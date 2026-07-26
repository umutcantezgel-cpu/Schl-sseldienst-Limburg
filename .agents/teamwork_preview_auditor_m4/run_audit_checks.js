const fs = require('fs');
const path = require('path');

// We will test all 31 pages
// 14 static pages + 17 city pages = 31 total pages

const rootDir = path.resolve(__dirname, '../../');
const areasPath = path.join(rootDir, 'lib/data/areas.ts');
const areasContent = fs.readFileSync(areasPath, 'utf-8');

// Parse cities from areas.ts
// We can extract city slugs and city names
const cityMatches = [];
const cityRegex = /slug:\s*["']([^"']+)["']/g;
let match;
while ((match = cityRegex.exec(areasContent)) !== null) {
    cityMatches.push(match[1]);
}
const uniqueCities = Array.from(new Set(cityMatches));

console.log(`Found ${uniqueCities.length} city slugs in areas.ts:`, uniqueCities);

// Let's check metadata definitions across app/ files
const staticPages = [
    { name: 'Homepage (app/layout.tsx)', file: 'app/layout.tsx' },
    { name: 'Datenschutz', file: 'app/datenschutz/page.tsx' },
    { name: 'Einbruchschutz', file: 'app/einbruchschutz/page.tsx' },
    { name: 'FAQ', file: 'app/faq/page.tsx' },
    { name: 'Impressum', file: 'app/impressum/page.tsx' },
    { name: 'Kontakt', file: 'app/kontakt/page.tsx' },
    { name: 'Autoöffnung', file: 'app/leistungen/autooeffnung/page.tsx' },
    { name: 'Schließanlagen', file: 'app/leistungen/schliessanlagen/page.tsx' },
    { name: 'Schlüssel nachmachen', file: 'app/leistungen/schluessel-nachmachen/page.tsx' },
    { name: 'Sicherheitstechnik', file: 'app/leistungen/sicherheitstechnik/page.tsx' },
    { name: 'Türöffnung', file: 'app/leistungen/turoeffnung/page.tsx' },
    { name: 'Preise', file: 'app/preise/page.tsx' },
    { name: 'Servicegebiet', file: 'app/servicegebiet/page.tsx' },
    { name: 'Über Uns', file: 'app/ueber-uns/page.tsx' },
];

console.log(`Static pages count: ${staticPages.length}`);
console.log(`Total pages: ${staticPages.length + uniqueCities.length}`);
