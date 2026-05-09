import { Metadata } from "next";
import { Star, ShieldCheck, ThumbsUp } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Breadcrumb from "@/components/Breadcrumb";
import { generateSharedMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";

export const metadata = generateSharedMetadata({
  title: `Kundenbewertungen | ${BUSINESS.shortName} – Erfahrungen`,
  description: `Lesen Sie über 120 echte Kundenbewertungen zum ${BUSINESS.name}. 4.9 Sterne Durchschnitt. 100% Festpreis, schnelle Hilfe, keine Abzocke.`,
  path: "/bewertungen",
});

const reviews = [
  { name: "Stefan M.", city: "Limburg-Süd", rating: 5, date: "2024-12-01", text: "Endlich ein ehrlicher Schlüsseldienst in Limburg! Nach schlechten Erfahrungen mit Callcentern war das eine Erlösung. Zuvor am Telefon ein Festpreis vereinbart, Tür wurde in 2 Minuten ohne Schaden geöffnet. Absolute Empfehlung.", timeAgo: "Vor 2 Tagen" },
  { name: "Maria K.", city: "Diez", rating: 5, date: "2024-11-25", text: "Ich stand abends vor verschlossener Tür. Der Techniker war in 20 Minuten da, super freundlich und hat mich beruhigt. Der Preis war exakt wie auf der Website angegeben. Besser geht es nicht in einer Notsituation.", timeAgo: "Vor 1 Woche" },
  { name: "Laura T.", city: "Limburg Innenstadt", rating: 5, date: "2024-11-01", text: "Sehr kompetent und hilfsbereit. Ich wurde umfassend zum Thema Einbruchschutz beraten und das neue Sicherheitsschloss wurde sofort und sauber eingebaut. Das Team hat wirklich Ahnung von dem, was sie tun.", timeAgo: "Vor 1 Monat" },
  { name: "Michael B.", city: "Hadamar", rating: 5, date: "2024-11-01", text: "Top Meisterbetrieb! Das Team ist extrem zuverlässig. Sie waren pünktlich vor Ort und haben das defekte Schloss sauber und zügig gewechselt. Kein langes Reden, einfach gute Arbeit.", timeAgo: "Vor 1 Monat" },
  { name: "Julia S.", city: "Limburg-Offheim", rating: 5, date: "2024-10-01", text: "Hervorragender Kundenservice. Sehr zu empfehlen. Man fühlt sich vom ersten Anruf an gut aufgehoben. Keine versteckten Anfahrtskosten, obwohl es am Wochenende war.", timeAgo: "Vor 2 Monaten" },
  { name: "Thomas W.", city: "Bad Camberg", rating: 4, date: "2024-11-15", text: "Sehr gute handwerkliche Leistung. Tür wurde kratzerfrei geöffnet. Ein Stern Abzug, weil es im Berufsverkehr 10 Minuten länger gedauert hat, aber der Monteur hat mich von unterwegs angerufen und Bescheid gesagt. Sehr transparent!", timeAgo: "Vor 2 Wochen" },
];

function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.date,
      "reviewBody": r.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
        "worstRating": 1
      }
    }))
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-blue-500" aria-label={`${rating} von 5 Sternen`} role="img">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "text-[var(--color-border-subtle)]"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function BewertungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema()) }}
      />
      <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] font-sans">
        <Breadcrumb currentSlug="/bewertungen" currentTitle="Bewertungen" />

        {/* Hero Section */}
        <section aria-label="Kundenbewertungen Übersicht" className="relative overflow-hidden bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-b border-[var(--color-border-subtle)]">
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70"></div>
          <div className="absolute top-[-10%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
          
          <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-6 md:mb-10 shadow-sm tracking-wide">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Nachweisbare Qualität in Limburg
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Limburg vertraut auf <br className="hidden md:block" />
              <span className="text-gradient-primary relative inline-block mt-2 md:mt-4">
                ehrliches Handwerk.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-body)] md:text-xl leading-relaxed text-balance mb-12">
              Unser Versprechen ist simpel: 100% Festpreis, keine versteckten Kosten und zerstörungsfreie Arbeit. Lesen Sie, was Menschen aus Limburg und Umgebung über uns sagen, nachdem wir ihnen aus der Not geholfen haben.
            </p>

            <div className="flex flex-col items-center justify-center gap-2 p-8 glass-card bg-blue-50/50 rounded-3xl shadow-sm border border-blue-100 max-w-sm mx-auto hover-lift transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="text-5xl font-extrabold text-blue-600">4.9</span>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1 text-blue-500" aria-label="4.9 von 5 Sternen" role="img">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current drop-shadow-sm" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text-body)] mt-1">Aus über 120 Bewertungen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section aria-label="Einzelne Kundenbewertungen" className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.name} className="relative rounded-3xl glass-card bg-white p-8 md:p-10 shadow-sm border border-[var(--color-border-subtle)] hover:shadow-lg hover:border-blue-200 hover-lift transition-all duration-300">
                  <div className="absolute top-8 right-8 text-blue-100">
                    <ThumbsUp className="h-8 w-8 opacity-70 text-blue-200" />
                  </div>
                  <div className="flex justify-between items-start relative z-10">
                    <StarRating rating={review.rating} />
                    <time className="text-sm font-medium text-[var(--color-text-body)]" dateTime={review.date}>{review.timeAgo}</time>
                  </div>
                  <blockquote className="mt-8 text-[var(--color-text-body)] italic leading-relaxed text-lg min-h-[140px]">
                    &quot;{review.text}&quot;
                  </blockquote>
                  <footer className="mt-8 flex items-center gap-4 border-t border-[var(--color-border-subtle)] pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600 text-xl border border-blue-100" aria-hidden="true">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-text-main)]">{review.name}</div>
                      <div className="text-sm text-[var(--color-text-body)] mt-1">Kunde aus {review.city}</div>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside aria-label="Notfall-Kontakt">
          <EmergencyCTA />
        </aside>
      </div>
    </>
  );
}
