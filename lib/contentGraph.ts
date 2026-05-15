export interface ContentNode {
    slug: string;
    title: string;
    type: 'service' | 'area' | 'blog' | 'info' | 'legal';
    keywords: string[];
    relatedSlugs: string[];
    parentSlug?: string;
}

import { cities } from './data/areas';

// Generate area nodes dynamically from the cities data source
const cityNodes: ContentNode[] = cities.map(city => ({
    slug: `/${city.slug}`,
    title: `Schlüsseldienst ${city.name}`,
    type: 'area' as const,
    keywords: [
        `schlüsseldienst ${city.name.toLowerCase()}`,
        `notdienst ${city.name.toLowerCase()}`,
        `türöffnung ${city.name.toLowerCase()}`,
        `ausgesperrt ${city.name.toLowerCase()}`
    ],
    relatedSlugs: ['/preise', '/servicegebiet', '/leistungen/turoeffnung'],
    parentSlug: '/servicegebiet'
}));

export const CONTENT_GRAPH: ContentNode[] = [
    {
        slug: '/',
        title: 'Schlüsseldienst Limburg',
        type: 'info',
        keywords: ['schlüsseldienst', 'limburg', 'notdienst'],
        relatedSlugs: ['/preise', '/leistungen/turoeffnung', '/leistungen/sicherheitstechnik']
    },
    {
        slug: '/leistungen/turoeffnung',
        title: 'Türöffnung Limburg',
        type: 'service',
        keywords: ['türöffnung', 'ausgesperrt', 'tür öffnen'],
        relatedSlugs: ['/preise', '/leistungen/sicherheitstechnik', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/autooeffnung',
        title: 'Autoöffnung Limburg',
        type: 'service',
        keywords: ['autoöffnung', 'ausgesperrt', 'auto öffnen'],
        relatedSlugs: ['/preise', '/leistungen/turoeffnung', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/schliessanlagen',
        title: 'Schließanlagen Limburg',
        type: 'service',
        keywords: ['schließanlage', 'schließzylinder', 'sicherheitstechnik'],
        relatedSlugs: ['/leistungen/sicherheitstechnik', '/leistungen/schluessel-nachmachen'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/schluessel-nachmachen',
        title: 'Schlüssel nachmachen Limburg',
        type: 'service',
        keywords: ['schlüssel nachmachen', 'ersatzschlüssel', 'schlüssel kopieren'],
        relatedSlugs: ['/leistungen/schliessanlagen', '/leistungen/turoeffnung'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/sicherheitstechnik',
        title: 'Sicherheitstechnik Limburg',
        type: 'service',
        keywords: ['sicherheitstechnik', 'einbruchschutz', 'alarmanlage'],
        relatedSlugs: ['/leistungen/schliessanlagen', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/preise',
        title: 'Preise & Kosten',
        type: 'info',
        keywords: ['preise', 'kosten', 'festpreis'],
        relatedSlugs: ['/leistungen/turoeffnung', '/faq']
    },
    {
        slug: '/faq',
        title: 'FAQ',
        type: 'info',
        keywords: ['faq', 'fragen', 'antworten'],
        relatedSlugs: ['/preise', '/kontakt']
    },
    {
        slug: '/kontakt',
        title: 'Kontakt',
        type: 'info',
        keywords: ['kontakt', 'anrufen', 'notdienst'],
        relatedSlugs: ['/faq', '/preise']
    },
    {
        slug: '/servicegebiet',
        title: 'Einsatzgebiete',
        type: 'info',
        keywords: ['einsatzgebiet', 'region', 'limburg'],
        relatedSlugs: ['/limburg', '/weilburg', '/elz']
    },
    {
        slug: '/ueber-uns',
        title: 'Über uns',
        type: 'info',
        keywords: ['über uns', 'firma', 'team'],
        relatedSlugs: ['/kontakt']
    },
    {
        slug: '/datenschutz',
        title: 'Datenschutz',
        type: 'legal',
        keywords: ['datenschutz', 'privacy', 'dsgvo'],
        relatedSlugs: ['/impressum']
    },
    {
        slug: '/impressum',
        title: 'Impressum',
        type: 'legal',
        keywords: ['impressum', 'legal', 'anbieterkennzeichnung'],
        relatedSlugs: ['/datenschutz']
    },
    {
        slug: '/einbruchschutz',
        title: 'Einbruchschutz & Sicherheitsberatung',
        type: 'service',
        keywords: ['einbruchschutz', 'sicherheitsberatung', 'einbrecher', 'schutz'],
        relatedSlugs: ['/leistungen/sicherheitstechnik', '/leistungen/schliessanlagen', '/kontakt'],
        parentSlug: '/'
    },
    // Dynamic city/area nodes from areas.ts
    ...cityNodes
];

