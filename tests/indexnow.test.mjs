import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("Running IndexNow integration validation tests...\n");

// 1. Verify key file in public directory
const expectedKey = "606ae446334c4a7ea19c6ec432f9be67";
const publicKeyFile = path.join(rootDir, "public", `${expectedKey}.txt`);

assert.ok(
    fs.existsSync(publicKeyFile),
    `public/${expectedKey}.txt must exist`
);

const keyContent = fs.readFileSync(publicKeyFile, "utf-8").trim();
assert.equal(
    keyContent,
    expectedKey,
    `Key file content must strictly match ${expectedKey}`
);
console.log("✓ public/" + expectedKey + ".txt is present and contains exact key.");

// 2. Verify route handler file for direct Next.js static routing
const routeKeyFile = path.join(rootDir, "app", `${expectedKey}.txt`, "route.ts");
assert.ok(
    fs.existsSync(routeKeyFile),
    `app/${expectedKey}.txt/route.ts must exist`
);
const routeContent = fs.readFileSync(routeKeyFile, "utf-8");
assert.ok(
    routeContent.includes(expectedKey),
    "Route handler must return the expected IndexNow key"
);
console.log("✓ app/" + expectedKey + ".txt/route.ts exists and serves key.");

// 3. Verify lib/indexnow.ts file
const libIndexNowFile = path.join(rootDir, "lib", "indexnow.ts");
assert.ok(fs.existsSync(libIndexNowFile), "lib/indexnow.ts must exist");
const libContent = fs.readFileSync(libIndexNowFile, "utf-8");
assert.ok(libContent.includes(expectedKey), "lib/indexnow.ts must reference expected key");
assert.ok(libContent.includes("ms-limburg-schluesseldienst.de"), "lib/indexnow.ts must reference host");
assert.ok(libContent.includes("api.indexnow.org"), "lib/indexnow.ts must reference api.indexnow.org");
assert.ok(libContent.includes("submitToIndexNow"), "lib/indexnow.ts must export submitToIndexNow");
console.log("✓ lib/indexnow.ts contains complete implementation and types.");

// 4. Verify API route app/api/indexnow/route.ts
const apiRouteFile = path.join(rootDir, "app", "api", "indexnow", "route.ts");
assert.ok(fs.existsSync(apiRouteFile), "app/api/indexnow/route.ts must exist");
const apiContent = fs.readFileSync(apiRouteFile, "utf-8");
assert.ok(apiContent.includes("GET"), "API route must export GET");
assert.ok(apiContent.includes("POST"), "API route must export POST");
console.log("✓ app/api/indexnow/route.ts contains GET and POST handlers.");

// 5. Verify CLI script
const cliScriptFile = path.join(rootDir, "scripts", "submit-indexnow.mjs");
assert.ok(fs.existsSync(cliScriptFile), "scripts/submit-indexnow.mjs must exist");
console.log("✓ scripts/submit-indexnow.mjs exists.");

// 6. Verify package.json script
const pkgJson = JSON.parse(fs.readFileSync(path.join(rootDir, "package.json"), "utf-8"));
assert.ok(pkgJson.scripts?.indexnow, "package.json must contain indexnow script");
console.log("✓ package.json contains 'indexnow' script.");

console.log("\nAll IndexNow integration tests PASSED successfully! (6/6)");
