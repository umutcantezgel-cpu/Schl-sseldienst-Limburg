import http from 'http';
import fs from 'fs';

const routes = [
  '/',
  '/datenschutz',
  '/einbruchschutz',
  '/faq',
  '/impressum',
  '/kontakt',
  '/leistungen/autooeffnung',
  '/leistungen/schliessanlagen',
  '/leistungen/schluessel-nachmachen',
  '/leistungen/sicherheitstechnik',
  '/leistungen/turoeffnung',
  '/preise',
  '/servicegebiet',
  '/ueber-uns',
  '/limburg',
  '/weilburg',
  '/bad-camberg',
  '/hadamar',
  '/elz',
  '/dornburg',
  '/runkel',
  '/diez',
  '/brechen',
  '/limburg-innenstadt',
  '/limburg-lindenholzhausen',
  '/limburg-linter',
  '/limburg-staffel',
  '/limburg-offheim',
  '/limburg-dietkirchen',
  '/limburg-ahlbach',
  '/limburg-eschhofen',
];

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3030${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

function cleanText(html) {
  // Strip script, style, svg, json-ld
  let clean = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                  .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
                  .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  return clean;
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>(.*?)<\/title>/i);
  return match ? match[1].trim() : '';
}

function extractH1(html) {
  const clean = cleanText(html);
  const match = clean.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return '';
  return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractParagraphs(html) {
  const clean = cleanText(html);
  const matches = [...clean.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  return matches.map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);
}

function extractBodyText(html) {
  const clean = cleanText(html);
  // Extract body content
  const bodyMatch = clean.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const content = bodyMatch ? bodyMatch[1] : clean;
  // Remove all HTML tags
  const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text;
}

function countWords(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(w => w.length > 0).length;
}

function getShingles(text, k = 3) {
  const words = text.toLowerCase().replace(/[^\w\u00C0-\u024F]+/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i <= words.length - k; i++) {
    set.add(words.slice(i, i + k).join(' '));
  }
  return set;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const elem of setA) {
    if (setB.has(elem)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return intersection / union;
}

async function main() {
  console.log('Starting empirical analysis of 31 routes...');
  const pageData = [];

  for (const route of routes) {
    const { status, html } = await fetchPage(route);
    const title = extractTitle(html);
    const h1 = extractH1(html);
    const paragraphs = extractParagraphs(html);
    const bodyText = extractBodyText(html);
    const wordCount = countWords(bodyText);
    const paragraphWordCount = countWords(paragraphs.join(' '));

    // Check keyword matching
    // Extract keywords from Title & H1
    const titleKeywords = title.split(/[|–\-\s]+/).map(w => w.replace(/[^\w\u00C0-\u024F]/g, '')).filter(w => w.length > 3);
    const h1Keywords = h1.split(/[|–\-\s]+/).map(w => w.replace(/[^\w\u00C0-\u024F]/g, '')).filter(w => w.length > 3);

    const paraText = paragraphs.join(' ').toLowerCase();

    const titleMatchesInPara = titleKeywords.map(kw => ({
      keyword: kw,
      matchedInPara: paraText.includes(kw.toLowerCase())
    }));

    const h1MatchesInPara = h1Keywords.map(kw => ({
      keyword: kw,
      matchedInPara: paraText.includes(kw.toLowerCase())
    }));

    pageData.push({
      route,
      status,
      title,
      h1,
      wordCount,
      paragraphWordCount,
      paragraphCount: paragraphs.length,
      paragraphs,
      bodyText,
      titleMatchesInPara,
      h1MatchesInPara
    });
  }

  // Print Summary Table for Task 1 & Task 2
  console.log('\n=== TASK 1 & 2: WORD COUNTS & KEYWORD MATCHING ===\n');
  let allAbove500 = true;

  pageData.forEach(p => {
    const isAbove = p.wordCount > 500;
    if (!isAbove) allAbove500 = false;
    console.log(`Route: ${p.route.padEnd(35)} | Status: ${p.status} | Words: ${String(p.wordCount).padStart(5)} | Paras: ${String(p.paragraphCount).padStart(2)} | >500: ${isAbove ? 'PASS' : 'FAIL'}`);
    console.log(`  Title: ${p.title}`);
    console.log(`  H1:    ${p.h1}`);
    const missingTitleKw = p.titleMatchesInPara.filter(m => !m.matchedInPara).map(m => m.keyword);
    const missingH1Kw = p.h1MatchesInPara.filter(m => !m.matchedInPara).map(m => m.keyword);
    console.log(`  Title Kw Matched in <p>: ${missingTitleKw.length === 0 ? 'ALL MATCHED' : 'MISSING: ' + missingTitleKw.join(', ')}`);
    console.log(`  H1 Kw Matched in <p>:    ${missingH1Kw.length === 0 ? 'ALL MATCHED' : 'MISSING: ' + missingH1Kw.join(', ')}`);
    console.log('-'.repeat(80));
  });

  console.log(`\nTask 1 Result: ${allAbove500 ? 'ALL PAGES EXCEED 500 WORDS' : 'SOME PAGES ARE BELOW 500 WORDS'}`);

  // Uniqueness Analysis across City Routes (Task 3)
  console.log('\n=== TASK 3: CITY ROUTE TEXT UNIQUENESS ===\n');
  const cityPages = pageData.filter(p => p.route.startsWith('/') && p.route !== '/' && !p.route.startsWith('/leistungen') && !['/datenschutz', '/einbruchschutz', '/faq', '/impressum', '/kontakt', '/preise', '/servicegebiet', '/ueber-uns'].includes(p.route));
  
  console.log(`Found ${cityPages.length} city routes for uniqueness check.`);
  let maxSimilarity = 0;
  let maxPair = '';

  const similarities = [];
  for (let i = 0; i < cityPages.length; i++) {
    for (let j = i + 1; j < cityPages.length; j++) {
      const pageA = cityPages[i];
      const pageB = cityPages[j];
      const shinglesA = getShingles(pageA.bodyText, 3);
      const shinglesB = getShingles(pageB.bodyText, 3);
      const sim = jaccardSimilarity(shinglesA, shinglesB);
      similarities.push({
        pair: `${pageA.route} vs ${pageB.route}`,
        similarity: (sim * 100).toFixed(2) + '%'
      });
      if (sim > maxSimilarity) {
        maxSimilarity = sim;
        maxPair = `${pageA.route} vs ${pageB.route}`;
      }
    }
  }

  console.log(`Max City Route Pairwise 3-gram Similarity: ${(maxSimilarity * 100).toFixed(2)}% (${maxPair})`);
  console.log('\nSample Pairwise Similarities:');
  similarities.slice(0, 15).forEach(s => {
    console.log(`  ${s.pair.padEnd(45)}: ${s.similarity}`);
  });

  // Save result json for audit report
  fs.writeFileSync('analysis_m4_results.json', JSON.stringify({ pageData, similarities, maxSimilarity, maxPair, allAbove500 }, null, 2));
  console.log('\nSaved detailed results to analysis_m4_results.json');
}

main().catch(console.error);
