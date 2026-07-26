const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

// Static routes mapping to file paths
const staticPages = [
  { route: '/', file: 'app/layout.tsx' },
  { route: '/datenschutz', file: 'app/datenschutz/page.tsx' },
  { route: '/einbruchschutz', file: 'app/einbruchschutz/page.tsx' },
  { route: '/faq', file: 'app/faq/page.tsx' },
  { route: '/impressum', file: 'app/impressum/page.tsx' },
  { route: '/kontakt', file: 'app/kontakt/page.tsx' },
  { route: '/leistungen/autooeffnung', file: 'app/leistungen/autooeffnung/page.tsx' },
  { route: '/leistungen/schliessanlagen', file: 'app/leistungen/schliessanlagen/page.tsx' },
  { route: '/leistungen/schluessel-nachmachen', file: 'app/leistungen/schluessel-nachmachen/page.tsx' },
  { route: '/leistungen/sicherheitstechnik', file: 'app/leistungen/sicherheitstechnik/page.tsx' },
  { route: '/leistungen/turoeffnung', file: 'app/leistungen/turoeffnung/page.tsx' },
  { route: '/preise', file: 'app/preise/page.tsx' },
  { route: '/servicegebiet', file: 'app/servicegebiet/page.tsx' },
  { route: '/ueber-uns', file: 'app/ueber-uns/page.tsx' },
];

console.log('=== VICTORY AUDITOR INDEPENDENT VERIFICATION ===\n');

// 1. Check Title & Meta Description lengths in lib/metadata.ts and pages
const metadataTsPath = path.join(rootDir, 'lib/metadata.ts');
const metadataTsContent = fs.readFileSync(metadataTsPath, 'utf8');

console.log('--- Checking lib/metadata.ts ---');
console.log('Metadata helper format check:', metadataTsContent.includes('title: title') ? 'PASS (Direct title without brand suffix duplication)' : 'FAIL');

// Parse areas.ts
const areasPath = path.join(rootDir, 'lib/data/areas.ts');
const areasContent = fs.readFileSync(areasPath, 'utf8');

// Parse CITY_METADATA and CITY_DATA
console.log('\n--- Checking 17 Dynamic City Routes in lib/data/areas.ts ---');
const citySlugMatches = [...areasContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const uniqueCitySlugs = Array.from(new Set(citySlugMatches));
console.log(`Found ${uniqueCitySlugs.length} unique city slugs in areas.ts`);

let r1TitleFailures = 0;
let r1DescFailures = 0;

// Read CITY_METADATA titles & descriptions from areas.ts
const cityMetaRegex = /["']([^"']+)["']:\s*{\s*title:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["']/g;
let cMatch;
let cityMetaCount = 0;
while ((cMatch = cityMetaRegex.exec(areasContent)) !== null) {
  cityMetaCount++;
  const slug = cMatch[1];
  const title = cMatch[2];
  const desc = cMatch[3];
  const tLen = title.length;
  const dLen = desc.length;
  const tPass = tLen >= 45 && tLen <= 65;
  const dPass = dLen >= 120 && dLen <= 155;
  if (!tPass) r1TitleFailures++;
  if (!dPass) r1DescFailures++;
  console.log(`City /${slug.padEnd(25)} | Title (${tLen}): ${tPass ? 'PASS' : 'FAIL'} | Desc (${dLen}): ${dPass ? 'PASS' : 'FAIL'}`);
}

console.log(`\n--- Checking 14 Static Routes Metadata ---`);
staticPages.forEach(({ route, file }) => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  let title = '';
  let desc = '';

  // Extract title match
  const tMatch = content.match(/title:\  ["']([^"']+)["']/);
  const tMatch2 = content.match(/title:\s*["']([^"']+)["']/);
  title = tMatch ? tMatch[1] : (tMatch2 ? tMatch2[1] : '');

  // Extract desc match
  const dMatch = content.match(/description:\s*["']([^"']+)["']/);
  desc = dMatch ? dMatch[1] : '';

  const tLen = title.length;
  const dLen = desc.length;
  const tPass = tLen >= 45 && tLen <= 65;
  const dPass = dLen >= 120 && dLen <= 155;
  if (!tPass) r1TitleFailures++;
  if (!dPass) r1DescFailures++;
  console.log(`Route ${route.padEnd(30)} | Title (${tLen}): ${tPass ? 'PASS' : 'FAIL'} | Desc (${dLen}): ${dPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Title: "${title}"`);
  console.log(`  Desc:  "${desc}"`);
});

console.log(`\nR1 Metadata Summary: Title Failures = ${r1TitleFailures}, Desc Failures = ${r1DescFailures}`);

// 2. Check Strong/Bold tag warning in app/leistungen/turoeffnung/page.tsx
console.log('\n--- Checking Strong Tag Warning in app/leistungen/turoeffnung/page.tsx ---');
const turoeffnungPath = path.join(rootDir, 'app/leistungen/turoeffnung/page.tsx');
const turoeffnungContent = fs.readFileSync(turoeffnungPath, 'utf8');
const strongCount = (turoeffnungContent.match(/<strong/g) || []).length;
console.log(`Strong tag count in Türöffnung page: ${strongCount} (${strongCount === 0 ? 'PASS - All converted to styled spans' : 'FAIL'})`);

// 3. Check Anchor Texts for generic words
console.log('\n--- Scanning for Generic Link Anchor Texts ---');
const filesToScan = [
  'components/RelatedServices.tsx',
  'components/Footer.tsx',
  'app/page.tsx'
];
filesToScan.forEach(f => {
  const p = path.join(rootDir, f);
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    const genericMatches = c.match(/>\s*(hier|weiter|mehr erfahren|alle gebiete)\s*</gi);
    console.log(`File ${f}: ${genericMatches ? 'FOUND GENERIC: ' + genericMatches.join(', ') : 'PASS - No generic anchor texts found'}`);
  }
});

// 4. Check External Links in impressum and RegionalPartner
console.log('\n--- Checking External Links ---');
const impressumPath = path.join(rootDir, 'app/impressum/page.tsx');
const impressumContent = fs.readFileSync(impressumPath, 'utf8');
console.log('EU ODR Link in Impressum:', impressumContent.includes('ec.europa.eu/consumers/odr') ? 'FAIL - Still present' : 'PASS - Removed');

const partnerPath = path.join(rootDir, 'components/trust/RegionalPartner.tsx');
const partnerContent = fs.readFileSync(partnerPath, 'utf8');
console.log('Regional Partner rel="nofollow":', partnerContent.includes('rel="noopener noreferrer nofollow"') ? 'PASS' : 'FAIL');

// 5. Check Internal Redirect targets
console.log('\n--- Checking Direct Internal Links (No Redirects) ---');
const homePath = path.join(rootDir, 'app/page.tsx');
const homeContent = fs.readFileSync(homePath, 'utf8');
console.log('Cleverer Einbruchschutz card href:', homeContent.includes('href: "/einbruchschutz"') ? 'PASS - Direct link' : (homeContent.includes('href: "/leistungen/sicherheitstechnik"') ? 'FAIL - Indirect redirect' : 'UNKNOWN'));

const footerPath = path.join(rootDir, 'components/Footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf8');
console.log('Footer Limburg city slug:', footerContent.includes('{ name: "Limburg", slug: "" }') ? 'PASS - Points directly to /' : 'FAIL');

// 6. Check Sitemap orphan link
console.log('\n--- Checking Sitemap Orphan URL Resolution (/einbruchschutz) ---');
const headerPath = path.join(rootDir, 'components/Header.tsx');
const headerContent = fs.readFileSync(headerPath, 'utf8');
const stickyPath = path.join(rootDir, 'components/StickyHeader.tsx');
const stickyContent = fs.readFileSync(stickyPath, 'utf8');
const hHas = headerContent.includes('/einbruchschutz');
const sHas = stickyContent.includes('/einbruchschutz');
const fHas = footerContent.includes('/einbruchschutz');
console.log(`Navigation header: ${hHas ? 'PASS' : 'FAIL'}, Sticky header: ${sHas ? 'PASS' : 'FAIL'}, Footer: ${fHas ? 'PASS' : 'FAIL'}`);

console.log('\n=== END READ-ONLY AUDIT CHECK ===');
