import { NextRequest, NextResponse } from "next/server";
import {
    INDEXNOW_HOST,
    INDEXNOW_KEY,
    INDEXNOW_KEY_LOCATION,
    INDEXNOW_ENDPOINTS,
    getAllIndexableUrls,
    submitToIndexNow,
} from "@/lib/indexnow";

export const dynamic = "force-dynamic";

export async function GET() {
    const urls = getAllIndexableUrls();

    return NextResponse.json(
        {
            service: "IndexNow Integration",
            status: "ready",
            configuration: {
                host: INDEXNOW_HOST,
                key: INDEXNOW_KEY,
                keyLocation: INDEXNOW_KEY_LOCATION,
                endpoints: INDEXNOW_ENDPOINTS,
            },
            stats: {
                totalIndexableUrls: urls.length,
            },
            urls: {
                count: urls.length,
                sample: urls.slice(0, 10),
                all: urls,
            },
            usage: {
                method: "POST",
                description: "Send POST to this endpoint to submit URLs to IndexNow / Microsoft Bing.",
                bodyExamples: {
                    submitAll: {},
                    submitSpecific: {
                        urls: [
                            `https://${INDEXNOW_HOST}/`,
                            `https://${INDEXNOW_HOST}/preise`,
                        ],
                    },
                },
            },
        },
        {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        }
    );
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json().catch(() => ({}));

        // Optional authentication check if INDEXNOW_SECRET is configured
        const configuredSecret = process.env.INDEXNOW_SECRET;
        if (configuredSecret) {
            const authHeader = request.headers.get("authorization");
            const token = authHeader?.replace(/^Bearer\s+/i, "");
            const querySecret = request.nextUrl.searchParams.get("secret");

            if (token !== configuredSecret && querySecret !== configuredSecret) {
                return NextResponse.json(
                    {
                        error: "Unauthorized",
                        message: "Invalid or missing IndexNow authorization secret.",
                    },
                    { status: 401 }
                );
            }
        }

        const urls: string[] | undefined = Array.isArray(body?.urls) ? body.urls : undefined;
        const endpoint = body?.endpoint || INDEXNOW_ENDPOINTS.INDEXNOW_ORG;

        const result = await submitToIndexNow(urls, endpoint);

        return NextResponse.json(
            {
                result,
                timestamp: new Date().toISOString(),
            },
            { status: result.status >= 200 && result.status < 300 ? 200 : result.status || 500 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                error: "Internal Server Error",
                message: error instanceof Error ? error.message : "Unknown error occurred",
            },
            { status: 500 }
        );
    }
}
