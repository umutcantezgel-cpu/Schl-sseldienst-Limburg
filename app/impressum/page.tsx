import { Building2, Mail, FileText } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { generateSharedMetadata } from "@/lib/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalCard } from "@/components/legal/LegalCard";

export const revalidate = 86400;

export const metadata = generateSharedMetadata({
  title: "Impressum MS Schlüsseldienst Limburg",
  description: "Impressum und Anbieterkennzeichnung von MS Schlüsseldienst Limburg. Kontaktdaten, Verantwortliche und rechtliche Informationen.",
  path: "/impressum",
});

const tocItems = [
  { id: "angaben", label: "Angaben gemäß § 5 TMG" },
  { id: "verantwortlich", label: "Verantwortlich gemäß § 18 MStV" },
  { id: "streit", label: "Streitschlichtung" },
  { id: "haftung-inhalte", label: "Haftung für Inhalte" },
  { id: "haftung-links", label: "Haftung für Links" },
  { id: "urheberrecht", label: "Urheberrecht" },
];

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum MS Schlüsseldienst Limburg"
      subtitle="Transparenz und Vertrauen sind die Basis für unser Handwerk. Hier finden Sie alle rechtlichen Angaben für: Impressum MS Schlüsseldienst Limburg."
      lastUpdated="Juli 2026"
      tocItems={tocItems}
    >
      <section id="angaben" className="scroll-mt-32">
        <h2>Angaben gemäß § 5 TMG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
          <LegalCard title="Firmenzentrale" icon={<Building2 className="w-6 h-6" />}>
            <p className="font-semibold text-white mb-2">{BUSINESS.name}</p>
            <p className="mb-4">
              Vertreten durch:<br />
              {BUSINESS.ownerTitle} {BUSINESS.owner}
            </p>
            <p>
              {BUSINESS.address.street}<br />
              {BUSINESS.address.zip} {BUSINESS.address.cityFull}<br />
              {BUSINESS.address.country}
            </p>
          </LegalCard>

          <LegalCard title="Kontakt & Register" icon={<Mail className="w-6 h-6" />}>
            <p className="mb-4">
              <span className="text-slate-400 block text-sm">24/7 Notruf:</span>
              <a href={BUSINESS.phone.href} className="text-white hover:text-amber-500 transition-colors font-medium">
                {BUSINESS.phone.display}
              </a>
            </p>
            <p className="mb-6">
              <span className="text-slate-400 block text-sm">E-Mail:</span>
              <a href={`mailto:${BUSINESS.email}`} className="text-amber-500 hover:text-amber-400 transition-colors">
                {BUSINESS.email}
              </a>
            </p>
            <p className="mb-2">
              <span className="text-slate-400 block text-sm">Steuernummer:</span>
              <span className="text-white">{BUSINESS.taxId}</span>
            </p>
            <p>
              <span className="text-slate-400 block text-sm">Umsatzsteuer-ID:</span>
              <span className="text-white">{BUSINESS.vatId}</span>
            </p>
          </LegalCard>
        </div>

        <p className="text-slate-300 leading-relaxed mt-4">
          <strong>Aufsichtsbehörde & Berufsrechtliche Angaben:</strong><br />
          Zuständige Handwerkskammer: Handwerkskammer Wiesbaden / Regionalstelle Limburg.<br />
          Berufsbezeichnung: Schlüsseldienst & Sicherheitstechnik Fachbetrieb (verliehen in der Bundesrepublik Deutschland).<br />
          Es gelten die berufsrechtlichen Regelungen der Handwerksordnung (HwO) sowie die allgemeinen Vorgaben des Gewerberechts der Stadt Limburg an der Lahn.
        </p>
      </section>

      <section id="verantwortlich" className="scroll-mt-32">
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="text-slate-300 leading-relaxed">
          Inhaber {BUSINESS.ownerTitle} {BUSINESS.owner}<br />
          {BUSINESS.name}<br />
          {BUSINESS.address.street}<br />
          {BUSINESS.address.zip} {BUSINESS.address.cityFull}
        </p>
      </section>

      <section id="streit" className="scroll-mt-32">
        <h2>Streitschlichtung</h2>
        <p className="text-slate-300 leading-relaxed">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter der offiziellen Website der Europäischen Kommission finden. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Wir legen jedoch größten Wert darauf, eventuelle Meinungsverschiedenheiten mit unseren Kunden direkt, einvernehmlich und unbürokratisch zu klären.
        </p>
      </section>

      <section id="haftung-inhalte" className="scroll-mt-32">
        <h2>Haftung für Inhalte</h2>
        <p className="text-slate-300 leading-relaxed">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="text-slate-300 leading-relaxed mt-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section id="haftung-links" className="scroll-mt-32">
        <h2>Haftung für Links</h2>
        <p className="text-slate-300 leading-relaxed">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-slate-300 leading-relaxed mt-4">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      <section id="urheberrecht" className="scroll-mt-32">
        <h2>Urheberrecht</h2>
        <p className="text-slate-300 leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte, Grafiken, Fotografien und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-slate-300 leading-relaxed mt-4">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </section>
    </LegalPageLayout>
  );
}
