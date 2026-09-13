#!/usr/bin/env node
/**
 * IndexNow Submission CLI
 * Submits website URLs to Microsoft Bing and IndexNow aggregator.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs                # Submits all site URLs
 *   node scripts/submit-indexnow.mjs <url1> <url2>  # Submits specific URLs
 */

const INDEXNOW_KEY = "606ae446334c4a7ea19c6ec432f9be67";
const HOST = "ms-limburg-schluesseldienst.de";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const ENDPOINTS = [
    { name: "IndexNow (Global API)", url: "https://api.indexnow.org/IndexNow" },
    { name: "Microsoft Bing", url: "https://www.bing.com/IndexNow" },
];

const STATIC_ROUTES = [
    "/",
    "/leistungen/turoeffnung",
    "/leistungen/autooeffnung",
    "/leistungen/schliessanlagen",
    "/leistungen/schluessel-nachmachen",
    "/leistungen/sicherheitstechnik",
    "/preise",
    "/faq",
    "/kontakt",
    "/servicegebiet",
    "/ueber-uns",
    "/datenschutz",
    "/impressum",
    "/einbruchschutz",
];

const AREA_SLUGS = [
    "limburg", "weilburg", "bad-camberg", "diez", "hadamar", "runkel",
    "elz", "brechen", "huenfelden", "villmar", "mengerskirchen", "selters",
    "dornburg", "beselich", "waldbrunn", "weinbach", "merenberg"
];

async function collectUrls() {
    // If specific URLs provided as CLI arguments
    const cliArgs = process.argv.slice(2).filter(arg => arg.startsWith("http"));
    if (cliArgs.length > 0) {
        return cliArgs;
    }

    // Try fetching from live sitemap first to get latest
    try {
        console.log(`[IndexNow] Fetching sitemap from https://${HOST}/sitemap.xml...`);
        const res = await fetch(`https://${HOST}/sitemap.xml`, { signal: AbortSignal.timeout(5000) });
        if (res.ok) {
            const xml = await res.text();
            const matches = [...xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
            if (matches.length > 0) {
                console.log(`[IndexNow] Discovered ${matches.length} URLs from live sitemap.`);
                return [...new Set(matches)];
            }
        }
    } catch (err) {
        console.log(`[IndexNow] Note: Could not fetch remote sitemap (${err.message}). Using local route graph.`);
    }

    // Fallback to local routes
    const allUrls = [
        ...STATIC_ROUTES.map(r => r === "/" ? `https://${HOST}/` : `https://${HOST}${r}`),
        ...AREA_SLUGS.map(s => `https://${HOST}/${s}`),
    ];
    return [...new Set(allUrls)];
}

function interpretStatus(status) {
    switch (status) {
        case 200:
            return "200 OK — URL(s) submitted successfully.";
        case 202:
            return "202 Accepted — URL(s) received, key verification in progress.";
        case 400:
            return "400 Bad Request — Invalid format.";
        case 403:
            return "403 Forbidden — Key not valid (e.g. key file not yet found on live host).";
        case 422:
            return "422 Unprocessable Entity — URLs do not belong to the host or key format invalid.";
        case 429:
            return "429 Too Many Requests — Rate limited (potential spam).";
        default:
            return `Status ${status}`;
    }
}

async function main() {
    console.log("==================================================");
    console.log(" Microsoft Bing / IndexNow URL Submission");
    console.log("==================================================");
    console.log(`Host:         ${HOST}`);
    console.log(`Key:          ${INDEXNOW_KEY}`);
    console.log(`Key Location: ${KEY_LOCATION}\n`);

    const urls = await collectUrls();
    console.log(`Preparing to submit ${urls.length} URL(s)...`);

    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
    };

    for (const endpoint of ENDPOINTS) {
        console.log(`\nSubmitting to ${endpoint.name} (${endpoint.url})...`);
        try {
            const response = await fetch(endpoint.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "User-Agent": "IndexNow-CLI/1.0 (ms-limburg-schluesseldienst.de)",
                },
                body: JSON.stringify(payload),
            });

            const text = await response.text();
            console.log(`Result: ${interpretStatus(response.status)}`);
            if (text && text.trim().length > 0) {
                console.log(`Response body: ${text.trim().substring(0, 300)}`);
            }
        } catch (error) {
            console.error(`Error connecting to ${endpoint.name}: ${error.message}`);
        }
    }

    console.log("\n==================================================");
    console.log(" Submission sequence finished.");
    console.log("==================================================");
}

main().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
