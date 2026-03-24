import EmergencyCTA from "@/components/EmergencyCTA";
import { FAQ_DATA, FAQ_CATEGORIES } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/faqSchema";
import { generateSharedMetadata } from "@/lib/metadata";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = generateSharedMetadata({
  title: "FAQ — Häufig gestellte Fragen zum Schlüsseldienst Wetzlar",
  description: "Schlüsseldienst Wetzlar beantwortet 30+ häufige Fragen zu Kosten, Anfahrt, Leistungen und Notdienst. Festpreise ab 50€, 15–30 Min Anfahrt, 24/7 erreichbar. 4.9 Sterne bei 127+ Bewertungen.",
  path: "/faq",
});

export default function FAQPage() {
  const categories = ["kosten", "anfahrt", "leistungen", "sicherheit", "notdienst"] as const;

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(FAQ_DATA)),
        }}
      />

      {/* Hero Section */}
      <section aria-label="FAQ Übersicht" className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Häufig gestellte <span className="text-primary-600">Fragen</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            Schlüsseldienst Wetzlar beantwortet die wichtigsten Fragen rund um Kosten, Anfahrt, Leistungen und Notdienst — transparent und ehrlich.
          </p>
        </div>
      </section>

      {/* Citation Paragraph */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed">
            Schlüsseldienst Wetzlar ist ein 24/7-Schlüsselnotdienst mit Festpreisen ab 50 Euro, der Wetzlar, Gießen, Marburg und den gesamten Lahn-Dill-Kreis innerhalb von 15–30 Minuten erreicht und über 127 Google-Bewertungen mit einer Durchschnittsnote von 4.9 verfügt. Auf dieser Seite finden Sie Antworten auf über 30 häufig gestellte Fragen zu Kosten, Anfahrt, Leistungen und Sicherheit.
          </p>
        </div>
      </section>

      {/* FAQ Content by Category */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl">
          {categories.map((cat) => {
            const faqs = FAQ_DATA.filter((f) => f.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-primary-600 pl-4">
                  {FAQ_CATEGORIES[cat]}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <FAQAccordion key={i} question={faq.question} answer={faq.answer} isDarkerBg={true} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <EmergencyCTA />
    </div>
  );
}
