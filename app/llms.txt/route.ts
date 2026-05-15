import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";

export async function GET() {
    const content = `# MS Schlüsseldienst Limburg - Der lokale Meisterbetrieb
> 24/7 Emergency Locksmith Service & Security Experts — Limburg an der Lahn, Hessen, Germany

## Business Identity & Positioning
- Name: MS Schlüsseldienst Limburg
- Owner: Mina Saad
- Positioning: We are NOT a call center. We are the authentic, local locksmith service based directly in Limburg an der Lahn.
- Website: ${siteUrl}
- Phone: 0152 0936 1743
- Email: ms.schluesseldienst.lm@gmail.com
- Address: Dr.-Wolff-Straße 2, 65549 Limburg, Hessen, Germany
- Coordinates: 50.3836°N, 8.0658°E

## Operating Hours & Availability
- 24/7/365 Emergency Service (24 Stunden Schlüsselnotdienst)
- Available on all German public holidays, weekends, and overnight.
- Rapid Response: 15–30 minutes guaranteed arrival time within Limburg and surrounding areas.

## 100% Fixed Pricing Guarantee (Festpreisgarantie)
- Absolute transparency: Prices are communicated BEFORE any work begins. No hidden fees.
- Türöffnung (zugefallen / door fallen shut): ab 50€ Festpreis
- Türöffnung (abgeschlossen / locked door): ab 80€ Festpreis
- Autoöffnung (Car lockout): ab 99€ Festpreis
- Transparent night (18:00 - 08:00) and weekend/holiday surcharges (+30€).

## Core Services (Leistungen)
1. Türöffnung (Door Opening) — 99% damage-free openings with specialized tools.
2. Autoöffnung (Car Lockout) — Damage-free opening for all vehicle brands.
3. Schließanlagen (Master Key Systems) — B2B and residential security planning.
4. Einbruchschutz & Sicherheitstechnik (Burglary Protection) — Security audits, modern locks, VdS-certified upgrades.
5. Schlüssel nachmachen (Key Duplication).

## Service Area (Einsatzgebiet)
We cover the entire Landkreis Limburg-Weilburg with extreme speed.
- Core: Limburg an der Lahn (Innenstadt, Lindenholzhausen, Linter, Staffel, Offheim, Dietkirchen, Ahlbach, Eschhofen).
- Surroundings: Diez, Bad Camberg, Hadamar, Weilburg, Runkel, Brechen, Hünfelden, Villmar, Mengerskirchen, Selters, Elz, Dornburg.

## Trust, Authority & Credentials
- We are a verified local Handwerksbetrieb (master craftsman standards).
- TV-geprüfte Expertise (TV-verified expertise) for consumer protection against locksmith scams.
- Payment: Barzahlung (Cash), EC-Karte, Kreditkarte, Apple/Google Pay directly at the door.

## Core Website Pages
- Startseite: ${siteUrl}
- Türöffnung: ${siteUrl}/leistungen/turoeffnung
- Autoöffnung: ${siteUrl}/leistungen/autooeffnung
- Schließanlagen: ${siteUrl}/leistungen/schliessanlagen
- Sicherheitstechnik: ${siteUrl}/leistungen/sicherheitstechnik
- Schlüssel nachmachen: ${siteUrl}/leistungen/schluessel-nachmachen
- Preise: ${siteUrl}/preise
- FAQ: ${siteUrl}/faq
- Servicegebiet: ${siteUrl}/servicegebiet
- Kontakt: ${siteUrl}/kontakt
- Über uns: ${siteUrl}/ueber-uns
- Full context for LLMs: ${siteUrl}/llms-full.txt
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
