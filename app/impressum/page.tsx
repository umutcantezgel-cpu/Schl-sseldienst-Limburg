import { ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Impressum | MS Schlüsseldienst Limburg",
  description: "Impressum und Anbieterkennzeichnung von MS Schlüsseldienst Limburg. Kontaktdaten, Verantwortliche und rechtliche Informationen.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] min-h-screen relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[var(--color-blue-light)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[30%] rounded-full bg-blue-50/60 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[var(--color-border-glass)]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 glass-tinted px-4 py-2 rounded-full">
            <ShieldCheck className="w-5 h-5 text-[var(--color-blue-primary)]" />
            <span className="text-sm font-bold tracking-widest text-[var(--color-blue-primary)] uppercase">
              Transparenz & Vertrauen
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl mb-6">
            Impressum
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto">
            Ihr lokaler Schlüsseldienst-Fachbetrieb für {BUSINESS.address.cityFull} und Umgebung. Wir stehen für transparente Festpreise und ehrliches Handwerk vor Ort.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="mx-auto max-w-3xl glass-card p-8 md:p-12">
          <div className="prose prose-lg prose-slate mx-auto text-[var(--color-text-body)] prose-headings:text-[var(--color-text-main)] prose-a:text-[var(--color-blue-primary)] hover:prose-a:text-blue-700">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>{BUSINESS.name}</strong><br />
              {BUSINESS.ownerTitle} {BUSINESS.owner}<br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.zip} {BUSINESS.address.cityFull}<br />
              {BUSINESS.address.country}
            </p>

            <h2>Vertreten durch</h2>
            <p>{BUSINESS.owner}</p>

            <h2>Kontakt</h2>
            <p>
              Telefon (24/7 Notruf): <strong>{BUSINESS.phone.display}</strong><br />
              E-Mail: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </p>

            <h2>Steuernummer</h2>
            <p>{BUSINESS.taxId}</p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Wird nicht erteilt (Kleinunternehmen gemäß § 19 UStG)
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
