export interface FAQItem {
    question: string;
    answer: string;
    category: "kosten" | "anfahrt" | "leistungen" | "sicherheit" | "notdienst";
}

export const FAQ_CATEGORIES: Record<string, string> = {
    kosten: "Kosten & Preise",
    anfahrt: "Anfahrt & Servicegebiet",
    leistungen: "Leistungen & Ablauf",
    sicherheit: "Sicherheit & Vertrauen",
    notdienst: "Notdienst & Erreichbarkeit",
};

export const FAQ_DATA: FAQItem[] = [
    // ============ KOSTEN & PREISE ============
    {
        question: "Was kostet ein Schlüsseldienst in Limburg?",
        answer: "Die meisten Menschen fürchten beim Schlüsseldienst vor allem eines: versteckte Kosten. Wir setzen auf 100% Transparenz. Eine einfache Türöffnung (zugefallen) erhalten Sie bei uns ab 99 € als garantierten Festpreis – ohne Kleingedrucktes. Sie erfahren den exakten Preis inklusive aller Kosten verbindlich vorab am Telefon, bevor sich unser Techniker auf den Weg macht. Zuzüglich berechnen wir im Limburger Kerngebiet eine transparente Anfahrtspauschale von 30 €.",
        category: "kosten",
    },
    {
        question: "Gibt es versteckte Kosten oder Aufschläge?",
        answer: "Auf keinen Fall. Der Schlüsseldienst Limburg steht für kompromisslose Ehrlichkeit. Der Festpreis, den wir Ihnen telefonisch zusichern, ist das absolute Maximum, das Sie zahlen. Keine versteckten Gebühren, keine unangekündigten Aufschläge vor Ort. Darauf können Sie sich verlassen.",
        category: "kosten",
    },
    {
        question: "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
        answer: "Wie in der Branche üblich und gesetzlich geregelt, berechnen wir außerhalb der regulären Geschäftszeiten einen fairen, transparenten Notdienst-Zuschlag. Dieser beträgt pauschal 30 Euro (für Nachteinsätze ab 18:00 Uhr sowie an Wochenenden und Feiertagen). Auch dieser Betrag wird Ihnen vorab transparent mitgeteilt. Bei uns erleben Sie keine bösen Überraschungen.",
        category: "kosten",
    },
    {
        question: "Wie kann ich bezahlen?",
        answer: "Ihre Notsituation ist schon stressig genug, daher machen wir die Bezahlung so unkompliziert wie möglich. Sie können bei unserem Monteur bequem direkt vor Ort bezahlen – entweder in Bar, per EC-Karte, Kreditkarte oder via Smartphone (Apple Pay/Google Pay). Eine ordnungsgemäße, steuerlich absetzbare Rechnung ist für uns selbstverständlich.",
        category: "kosten",
    },
    {
        question: "Was kostet eine Autoöffnung?",
        answer: "Sie stehen vor einem verschlossenen Fahrzeug? Keine Panik. Wir öffnen PKWs aller Marken professionell und 100% beschädigungsfrei. Die KFZ-Öffnung startet ab einem Festpreis von 99 €. Der exakte Preis hängt vom Fahrzeugmodell ab und wird Ihnen sofort am Telefon garantiert. Kein Risiko für Ihren Lack, keine unerwarteten Kosten.",
        category: "kosten",
    },
    {
        question: "Welche Kosten entstehen bei einer Stornierung?",
        answer: "Solange unser Techniker noch nicht ausgerückt ist, können Sie Ihren Auftrag vollkommen kostenfrei stornieren. Befindet sich unser Mitarbeiter nach Ihrer verbindlichen Zusage bereits auf dem Weg zu Ihnen, berechnen wir lediglich eine branchenübliche Leerfahrt-Pauschale von 80 Euro, um die entstandenen Einsatz- und Fahrtkosten zu decken.",
        category: "kosten",
    },

    // ============ ANFAHRT & SERVICEGEBIET ============
    {
        question: "Wie schnell kommt der Schlüsseldienst in Limburg?",
        answer: "In einer Notsituation zählt jede Minute. Durch unseren zentralen Stützpunkt direkt in Limburg garantieren wir eine blitzschnelle Reaktionszeit. In der Regel steht unser Monteur bereits nach 15 bis 30 Minuten bei Ihnen vor der Tür. Keine Warteschleifen, kein anonymes Callcenter – Sie sprechen direkt mit dem diensthabenden Experten vor Ort.",
        category: "anfahrt",
    },
    {
        question: "Kommt der Schlüsseldienst auch nach Diez?",
        answer: "Selbstverständlich. Diez gehört zu unserem unmittelbaren Kern-Servicegebiet. Auch hier sind wir in der Regel innerhalb von 15 bis 20 Minuten bei Ihnen – exakt zum gleichen fairen Festpreis und zzgl. 30€ Anfahrtsgebühr.",
        category: "anfahrt",
    },
    {
        question: "Kommt der Schlüsseldienst auch nach Bad Camberg?",
        answer: "Ja, wir betreuen auch Bad Camberg und die umliegenden Gemeinden absolut zuverlässig. Rechnen Sie hier mit einer kurzen Anfahrtszeit von etwa 20 bis 30 Minuten. Auch für Bad Camberg gelten unsere strengen, transparenten Festpreis-Garantien.",
        category: "anfahrt",
    },
    {
        question: "Welche Orte bedient der Schlüsseldienst Limburg?",
        answer: "Unser Einsatzgebiet umfasst Limburg an der Lahn sowie einen großzügigen Umkreis von 50 Kilometern. Dazu gehören unter anderem Diez, Bad Camberg, Hadamar, Weilburg, Elz, Runkel, Dornburg, Brechen, Hünfelden, Selters, Villmar, Beselich, Mengerskirchen, Merenberg und Holzheim. Der gesamte Landkreis Limburg-Weilburg wird von uns flächendeckend betreut.",
        category: "anfahrt",
    },
    {
        question: "Gibt es zusätzliche Anfahrtskosten für Orte außerhalb von Limburg?",
        answer: "Transparenz endet bei uns nicht an der Stadtgrenze. Innerhalb unseres gesamten Servicegebiets (bis zu 50 km Umkreis) berechnen wir eine faire und transparente Anfahrtspauschale von 30€. Die Anfahrtspauschale von 30€ wird transparent zum Festpreis addiert.",
        category: "anfahrt",
    },

    // ============ LEISTUNGEN & ABLAUF ============
    {
        question: "Wird die Tür bei der Öffnung beschädigt?",
        answer: "In 99% der Fälle: Nein. Wenn Ihre Tür lediglich ins Schloss gefallen ist (nicht abgeschlossen), öffnen unsere geschulten Experten diese mithilfe modernster Präzisionswerkzeuge absolut zerstörungsfrei. Bei doppelt abgeschlossenen Türen oder mechanischen Defekten (z.B. Riegelbruch) kann es notwendig sein, den Zylinder schonend aufzubohren – dies kommunizieren wir jedoch vorab transparent und haben sofort passenden, hochwertigen Ersatz dabei.",
        category: "leistungen",
    },
    {
        question: "Wie läuft eine Türöffnung ab?",
        answer: "Unser Prozess ist maximal kundenorientiert und stressfrei: 1. Sie rufen uns an und schildern Ihr Problem. 2. Wir nennen Ihnen einen verbindlichen Festpreis. 3. Unser Monteur ist meist in 15–30 Minuten vor Ort. 4. Wir öffnen Ihre Tür schnell und hochprofessionell. 5. Sie bezahlen bequem den exakt vereinbarten Preis – ohne Wenn und Aber.",
        category: "leistungen",
    },
    {
        question: "Können Sie auch Tresor- oder Safe-Türen öffnen?",
        answer: "Ja, unsere Expertise geht weit über gewöhnliche Haustüren hinaus. Wir öffnen auch Tresore, Wertschutzschränke und Safes. Da Tresoröffnungen hochkomplex sind und spezielles Spezialwerkzeug erfordern, bitten wir Sie um eine vorherige telefonische Absprache. Wir prüfen die Machbarkeit und erstellen Ihnen ein transparentes Angebot.",
        category: "leistungen",
    },
    {
        question: "Bieten Sie auch Schließanlagen und Sicherheitsberatung an?",
        answer: "Als ganzheitlicher Sicherheitsexperte in Limburg planen, montieren und warten wir Schließanlagen für Privathaushalte und Gewerbeobjekte – von der modernen Gleichschließung bis hin zum komplexen, digitalen Zutrittskontrollsystem. Kontaktieren Sie uns gerne für einen kostenlosen, unverbindlichen Sicherheits-Check bei Ihnen vor Ort.",
        category: "leistungen",
    },
    {
        question: "Können Sie Schlösser direkt vor Ort austauschen?",
        answer: "Absolut. Unsere Einsatzfahrzeuge sind fahrende Spezialwerkstätten. Wir führen eine große Auswahl an Premium-Schließzylindern und Sicherheitsschlössern in allen gängigen Größen (z.B. von ABUS, BKS) direkt mit uns. So können wir defekte oder unsichere Schlösser sofort vor Ort austauschen, damit Sie sich wieder zu 100% sicher fühlen können.",
        category: "leistungen",
    },
    {
        question: "Helfen Sie auch bei einbruchbeschädigten Türen?",
        answer: "Nach einem Einbruch ist schnelle Hilfe extrem wichtig für Ihr Sicherheitsgefühl. Wir sind umgehend vor Ort, sichern einbruchbeschädigte Türen und Fenster provisorisch oder dauerhaft ab und tauschen manipulierte Schlösser sofort aus. Wir lassen Sie in dieser psychologischen Ausnahmesituation nicht allein.",
        category: "leistungen",
    },
    {
        question: "Bieten Sie auch Autoöffnungen an?",
        answer: "Ja, wenn Sie sich aus Ihrem Fahrzeug ausgesperrt haben oder der Schlüssel im Kofferraum liegt, helfen wir sofort. Wir öffnen nahezu alle Automarken und -modelle mit speziellem KFZ-Öffnungswerkzeug völlig zerstörungs- und kratzerfrei. Festpreis ab 99 €, 24 Stunden am Tag für Sie auf Abruf.",
        category: "leistungen",
    },
    {
        question: "Was ist der Unterschied zwischen einer zugefallenen und einer abgesperrten Tür?",
        answer: "Eine 'zugefallene Tür' bedeutet, dass die Tür nur ins Schloss gefallen ist, aber nicht per Schlüssel verriegelt wurde. Dies lässt sich meist in Sekunden zerstörungsfrei und extrem kostengünstig (ab 99 €) beheben. Eine 'abgesperrte Tür' (Schlüssel umgedreht, verloren oder abgebrochen im Zylinder) erfordert komplexe Fräs- oder Bohrtechniken und ist zeitaufwendiger (ab 189 €). Wir beherrschen beide Disziplinen perfekt.",
        category: "leistungen",
    },

    // ============ SICHERHEIT & VERTRAUEN ============
    {
        question: "Welcher Schlüsseldienst in Limburg ist seriös?",
        answer: "Einen seriösen Schlüsseldienst erkennen Sie an absoluter Kostentransparenz und regionaler Verankerung. Wir garantieren Ihnen echte Festpreise am Telefon, verlangen keine versteckten Gebühren vor Ort und sind ein echtes lokales Unternehmen aus der Region mit eigenem Firmensitz in Limburg — keine anonyme Vermittlungszentrale.",
        category: "sicherheit",
    },
    {
        question: "Woran erkenne ich einen seriösen Schlüsseldienst?",
        answer: "Achten Sie vor der Beauftragung auf drei entscheidende Dinge: 1. Verbindliche Festpreise vor der Anfahrt (keine unseriösen 'Ab-10-Euro'-Lockangebote). 2. Ein vollständiges Impressum mit echter lokaler Adresse (kein Postfach). 3. Eine Überprüfung Ihrer Identität vor der Türöffnung, um illegale Zutritte zu verhindern. All diese strengen Kriterien sind für uns absoluter Standard.",
        category: "sicherheit",
    },
    {
        question: "Muss ich meinen Ausweis vorlegen?",
        answer: "Ja, zwingend – und das zu Ihrer eigenen Sicherheit. Bevor wir eine Tür öffnen, sind wir gesetzlich verpflichtet, die Zugangsberechtigung des Auftraggebers zu prüfen. Ein Personalausweis, Reisepass mit Meldebescheinigung oder ein aktueller Mietvertrag genügen. Liegen Ihre Dokumente in der verschlossenen Wohnung, erfolgt die Prüfung unmittelbar im Beisein des Monteurs nach der Öffnung.",
        category: "sicherheit",
    },
    {
        question: "Haben Sie eine Versicherung für eventuelle Schäden?",
        answer: "Ihre Immobilie ist bei uns in sicheren Händen. Selbstverständlich verfügen wir über eine umfassende Betriebshaftpflichtversicherung für das Schlosserhandwerk. Sollte bei einem komplizierten Einsatz wider Erwarten doch einmal ein ungewollter Sachschaden entstehen, ist dieser zu 100% und unbürokratisch über unsere Versicherung abgedeckt.",
        category: "sicherheit",
    },
    {
        question: "Sind Ihre Techniker ausgebildet und qualifiziert?",
        answer: "Wir überlassen Ihre Sicherheit niemals Laien. Jeder unserer Monteure ist eine intensiv geschulte Fachkraft mit jahrelanger, täglicher Praxis in der Schloss-, Tür- und Sicherheitstechnik. Durch kontinuierliche Weiterbildungen sind wir auch bei modernsten elektronischen Schließsystemen und Smart-Home-Sicherheit immer auf dem neuesten Stand der Technik.",
        category: "sicherheit",
    },

    // ============ NOTDIENST & ERREICHBARKEIT ============
    {
        question: "Gibt es einen Schlüsseldienst in Limburg der nachts geöffnet hat?",
        answer: "Ja! Ein echter Notdienst kennt keine Öffnungszeiten. Wir sind 24 Stunden am Tag, 7 Tage die Woche durchgehend für Sie im Einsatz. Egal ob mitten in der tiefsten Nacht, am Sonntag oder an Feiertagen – wir lassen Sie nicht vor verschlossener Tür stehen. Für Nachteinsätze erheben wir lediglich einen transparenten, überaus fairen Pauschalzuschlag von 30 €.",
        category: "notdienst",
    },
    {
        question: "Was mache ich, wenn ich mich ausgesperrt habe?",
        answer: "Das Wichtigste zuerst: Bewahren Sie Ruhe. Versuchen Sie bitte auf keinen Fall, die Tür mit Gewalt, Werkzeug oder Haushaltsgegenständen aufzubrechen – das führt fast immer zu teuren Schäden an Türblatt oder Zylinder. Rufen Sie stattdessen unsere Notrufnummer +49 152 0936 1743 an. Wir sind meist in 15–30 Minuten bei Ihnen und lösen das Problem schnell, günstig und hochprofessionell.",
        category: "notdienst",
    },
    {
        question: "Kommt der Schlüsseldienst auch an Weihnachten und Silvester?",
        answer: "Selbstverständlich. Erfahrungsgemäß passieren gerade an Feiertagen die meisten Missgeschicke. Wir sind an 365 Tagen im Jahr erreichbar, auch an Weihnachten, Silvester, Ostern oder Pfingsten. Sie können sich jederzeit voll und ganz auf unsere schnelle Nothilfe verlassen.",
        category: "notdienst",
    },
    {
        question: "Wie erreiche ich den Schlüsseldienst Limburg am schnellsten?",
        answer: "Der direkteste und schnellste Weg ist immer der telefonische Anruf unter +49 152 0936 1743. Bei uns landen Sie in keinem Callcenter und in keiner nervigen Warteschleife, sondern sprechen direkt mit dem zuständigen Einsatz-Disponenten oder dem Monteur selbst. Alternativ können Sie uns für nicht-dringende Anfragen bequem per WhatsApp oder über unser Kontaktformular erreichen.",
        category: "notdienst",
    },
    {
        question: "Kann ich einen Termin für einen nicht-dringenden Einsatz vereinbaren?",
        answer: "Ja, unser Service geht weit über den klassischen 24/7 Notdienst hinaus. Für geplante Arbeiten wie den präventiven Austausch von Schließzylindern, die fachgerechte Montage von Panzerriegeln oder eine umfassende Vor-Ort-Sicherheitsberatung können Sie ganz flexibel Ihren Wunschtermin mit uns vereinbaren.",
        category: "notdienst",
    },
    {
        question: "Tür zugefallen in Limburg — was tun?",
        answer: "Handeln Sie souverän: Rufen Sie die regionale Direktdurchwahl +49 152 0936 1743 an. Sie erhalten am Telefon sofort Ihren garantierten Festpreis (ab 99 €). Einer unserer Fachmonteure macht sich ohne Verzögerung auf den Weg und ist in der Regel in 15 bis 30 Minuten bei Ihnen. In 99% der Fälle öffnen wir die Tür völlig zerstörungsfrei. Sicher, absolut seriös und blitzschnell.",
        category: "notdienst",
    },
];

/**
 * Get FAQs by category, or all if no category specified
 */
export function getFAQsByCategory(category?: FAQItem["category"]): FAQItem[] {
    if (!category) return FAQ_DATA;
    return FAQ_DATA.filter(faq => faq.category === category);
}

/**
 * Get the top N FAQs for homepage (hand-picked highest-impact questions)
 */
export function getHomepageFAQs(): FAQItem[] {
    const homepageQuestions = [
        "Was kostet ein Schlüsseldienst in Limburg?",
        "Wie schnell kommt der Schlüsseldienst in Limburg?",
        "Gibt es einen Schlüsseldienst in Limburg der nachts geöffnet hat?",
        "Welcher Schlüsseldienst in Limburg ist seriös?",
        "Wird die Tür bei der Öffnung beschädigt?",
        "Gibt es versteckte Kosten oder Aufschläge?",
        "Wie läuft eine Türöffnung ab?",
        "Muss ich meinen Ausweis vorlegen?",
        "Kommt der Schlüsseldienst auch nach Diez?",
        "Kommt der Schlüsseldienst auch nach Bad Camberg?",
        "Welche Orte bedient der Schlüsseldienst Limburg?",
        "Was mache ich, wenn ich mich ausgesperrt habe?",
        "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
        "Wie kann ich bezahlen?",
        "Tür zugefallen in Limburg — was tun?",
    ];

    return homepageQuestions
        .map(q => FAQ_DATA.find(faq => faq.question === q))
        .filter((faq): faq is FAQItem => faq !== undefined);
}
