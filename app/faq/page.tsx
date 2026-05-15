import { HelpCircle } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Breadcrumb from "@/components/Breadcrumb";
import { FAQ_DATA, FAQ_CATEGORIES } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/faqSchema";
import { generateSharedMetadata } from "@/lib/metadata";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BUSINESS } from "@/lib/constants";

export const metadata = generateSharedMetadata({
  title: `FAQ | Häufig gestellte Fragen | ${BUSINESS.shortName}`,
  description: `Antworten auf Ihre Fragen zum ${BUSINESS.name}. Transparenz bei Kosten, 15-30 Minuten Anfahrt im Landkreis Limburg-Weilburg und 100% Festpreis.`,
  path: "/faq",
});

export default function FAQPage() {
  const categories = ["kosten", "anfahrt", "leistungen", "sicherheit", "notdienst"] as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(FAQ_DATA)),
        }}
      />
      <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] font-sans">
        <Breadcrumb currentSlug="/faq" currentTitle="FAQ" />

        {/* Hero Section */}
        <section aria-label="FAQ Übersicht" className="relative overflow-hidden bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-b border-[var(--color-border-subtle)]">
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70"></div>
          <div className="absolute top-[-10%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-6 md:mb-10 shadow-sm tracking-wide">
              <HelpCircle className="h-4 w-4 text-blue-600" />
              Ihre Fragen, ehrlich beantwortet
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Klartext statt <br className="hidden md:block" />
              <span className="text-gradient-primary relative inline-block mt-2 md:mt-4">
                versteckter Kosten.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-body)] md:text-xl leading-relaxed text-balance">
              Wir wissen, dass Sie in einer Notsituation schnelle und verbindliche Antworten brauchen. {BUSINESS.name} steht für absolute Transparenz. Hier finden Sie die wichtigsten Antworten zu Preisen, Anfahrt und unseren Leistungen.
            </p>
          </div>
        </section>

        {/* Citation Paragraph */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card rounded-3xl bg-blue-50/50 p-8 md:p-12 shadow-sm border border-blue-100 text-center hover-lift transition-all duration-300">
              <p className="text-lg md:text-xl text-[var(--color-text-body)] leading-relaxed font-medium text-balance">
                {BUSINESS.name} ist Ihr lokaler 24/7-Schlüsselnotdienst. Wir garantieren Festpreise ab 99 Euro, erreichen Sie in Limburg, Diez, Bad Camberg und dem gesamten Landkreis Limburg-Weilburg meist innerhalb von 15 bis 30 Minuten. Transparenz und Zuverlässigkeit sind unsere obersten Prinzipien.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content by Category */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
          <div className="mx-auto max-w-4xl">
            {categories.map((cat) => {
              const faqs = FAQ_DATA.filter((f) => f.category === cat);
              if (faqs.length === 0) return null;
              
              return (
                <div key={cat} className="mb-16 md:mb-20 last:mb-0 scroll-mt-28" id={cat}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-2 rounded-full bg-blue-600"></div>
                    <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] tracking-tight">
                      {FAQ_CATEGORIES[cat]}
                    </h2>
                  </div>
                  <div className="space-y-4 bg-[var(--color-surface-elevated)] p-6 md:p-10 rounded-3xl border border-[var(--color-border-subtle)] shadow-sm hover-lift-subtle transition-all duration-300">
                    {faqs.map((faq, i) => (
                      <FAQAccordion key={i} question={faq.question} answer={faq.answer} isDarkerBg={false} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <EmergencyCTA />
      </div>
    </>
  );
}
