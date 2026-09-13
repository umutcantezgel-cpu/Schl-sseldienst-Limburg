import { BUSINESS } from "./constants";
import { siteUrl } from "./schema";
import { CONTENT_GRAPH } from "./contentGraph";

export const INDEXNOW_KEY = "606ae446334c4a7ea19c6ec432f9be67";
export const INDEXNOW_HOST = BUSINESS.domain.replace(/^https?:\/\//, "");
export const INDEXNOW_KEY_LOCATION = `${siteUrl}/${INDEXNOW_KEY}.txt`;

export const INDEXNOW_ENDPOINTS = {
    INDEXNOW_ORG: "https://api.indexnow.org/IndexNow",
    BING: "https://www.bing.com/IndexNow",
} as const;

export interface IndexNowPayload {
    host: string;
    key: string;
    keyLocation: string;
    urlList: string[];
}

export interface IndexNowSubmissionResult {
    success: boolean;
    status: number;
    statusText: string;
    endpoint: string;
    submittedCount: number;
    message: string;
    details?: string;
}

/**
 * Returns all indexable canonical URLs configured across the website.
 */
export function getAllIndexableUrls(): string[] {
    const urls = new Set<string>();

    for (const node of CONTENT_GRAPH) {
        if (!node.slug) continue;
        const normalizedSlug = node.slug.startsWith("/") ? node.slug : `/${node.slug}`;
        if (normalizedSlug === "/") {
            urls.add(`${siteUrl}/`);
        } else {
            urls.add(`${siteUrl}${normalizedSlug}`);
        }
    }

    return Array.from(urls);
}

/**
 * Interprets IndexNow HTTP response codes according to specification.
 */
function interpretIndexNowStatus(status: number): { success: boolean; message: string } {
    switch (status) {
        case 200:
            return {
                success: true,
                message: "OK: URLs submitted and processed successfully.",
            };
        case 202:
            return {
                success: true,
                message: "Accepted: URLs submitted successfully, key verification pending.",
            };
        case 400:
            return {
                success: false,
                message: "Bad Request: Invalid format in payload.",
            };
        case 403:
            return {
                success: false,
                message: "Forbidden: Key is not valid or key file could not be verified on the host.",
            };
        case 422:
            return {
                success: false,
                message: "Unprocessable Entity: URLs do not belong to host or key mismatch.",
            };
        case 429:
            return {
                success: false,
                message: "Too Many Requests: Rate limit exceeded or suspected spam.",
            };
        default:
            return {
                success: status >= 200 && status < 300,
                message: `HTTP Status ${status}`,
            };
    }
}

/**
 * Submits a list of URLs (or all site URLs if none provided) to IndexNow endpoints.
 */
export async function submitToIndexNow(
    urls?: string[],
    endpoint: string = INDEXNOW_ENDPOINTS.INDEXNOW_ORG
): Promise<IndexNowSubmissionResult> {
    const targetUrls = urls && urls.length > 0 ? urls : getAllIndexableUrls();

    // Ensure all URLs belong to the domain
    const filteredUrls = targetUrls.filter((u) => {
        try {
            const parsed = new URL(u);
            return parsed.hostname === INDEXNOW_HOST || parsed.hostname === `www.${INDEXNOW_HOST}`;
        } catch {
            return false;
        }
    });

    if (filteredUrls.length === 0) {
        return {
            success: false,
            status: 400,
            statusText: "Bad Request",
            endpoint,
            submittedCount: 0,
            message: "No valid URLs matching domain to submit.",
        };
    }

    const payload: IndexNowPayload = {
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: filteredUrls.slice(0, 10000), // Max 10,000 URLs per IndexNow request
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": "IndexNow-Client/1.0 (ms-limburg-schluesseldienst.de)",
            },
            body: JSON.stringify(payload),
        });

        const interpretation = interpretIndexNowStatus(response.status);
        let details: string | undefined;
        try {
            details = await response.text();
        } catch {
            // Ignore text reading error
        }

        return {
            success: interpretation.success,
            status: response.status,
            statusText: response.statusText,
            endpoint,
            submittedCount: payload.urlList.length,
            message: interpretation.message,
            details: details || undefined,
        };
    } catch (error) {
        return {
            success: false,
            status: 0,
            statusText: "Network Error",
            endpoint,
            submittedCount: payload.urlList.length,
            message: error instanceof Error ? error.message : "Unknown network error",
        };
    }
}
