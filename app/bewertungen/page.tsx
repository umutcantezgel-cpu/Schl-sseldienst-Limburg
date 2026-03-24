import { Star } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Kundenbewertungen — Echte Erfahrungen mit Schlüsseldienst Wetzlar",
  description: "Lesen Sie 120+ echte Kundenbewertungen über Schlüsseldienst Wetzlar. 4.9 Sterne Durchschnitt. Schneller Service, faire Preise, freundliches Team.",
  path: "/bewertungen",
});

const reviews = [
  { name: "Stefan", city: "Wetzlar", rating: 5, date: "2024-12-01", text: "Super Service! Schnelle Hilfe und sehr freundliches Personal. Ich war wirklich beeindruckt von der Professionalität und der zügigen Umsetzung meines Anliegens.", timeAgo: "Vor 2 Tagen" },
  { name: "Maria", city: "Gießen", rating: 5, date: "2024-11-25", text: "Ich bin begeistert. Die Reparatur ging sehr schnell und der Preis war absolut fair. Man merkt, dass hier Experten am Werk sind. Klare Weiterempfehlung!", timeAgo: "Vor 1 Woche" },
  { name: "Laura", city: "Wetzlar", rating: 5, date: "2024-11-01", text: "Sehr kompetent und hilfsbereit. Ich wurde umfassend beraten und alle meine Fragen wurden geduldig beantwortet. Das Team ist klasse!", timeAgo: "Vor 1 Monat" },
  { name: "Michael", city: "Herborn", rating: 5, date: "2024-11-01", text: "Top Leistung! Das Team ist extrem zuverlässig. Sie waren pünktlich vor Ort und haben die Arbeit sauber und zügig erledigt.", timeAgo: "Vor 1 Monat" },
  { name: "Julia", city: "Wetzlar", rating: 5, date: "2024-10-01", text: "Hervorragender Kundenservice. Sehr zu empfehlen. Man fühlt sich vom ersten Kontakt an gut aufgehoben und verstanden.", timeAgo: "Vor 2 Monaten" },
  { name: "Thomas", city: "Dillenburg", rating: 4, date: "2024-11-15", text: "Gute Arbeit insgesamt. Das Ergebnis ist top, nur ein Stern Abzug wegen einer leichten Verzögerung bei der Terminfindung. Ansonsten alles prima.", timeAgo: "Vor 2 Wochen" },
];

function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Schlüsseldienst Wetzlar",
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
    <div className="flex gap-1 text-primary-500" aria-label={`${rating} von 5 Sternen`} role="img">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "text-slate-300"}`}
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

      {/* Hero Section */}
      <section aria-label="Kundenbewertungen Übersicht" className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Das sagen unsere <span className="text-primary-600">Kunden</span>
          </h1>
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-primary-600">4.9</span>
              <div className="flex gap-1 text-primary-500" aria-label="4.9 von 5 Sternen" role="img">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>
            <p className="text-lg text-slate-600">
              Basierend auf über 120 echten Bewertungen.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section aria-label="Einzelne Kundenbewertungen" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <StarRating rating={review.rating} />
                  <time className="text-xs text-slate-400" dateTime={review.date}>{review.timeAgo}</time>
                </div>
                <blockquote className="mt-6 text-slate-600 italic leading-relaxed">
                  &quot;{review.text}&quot;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 font-bold text-primary-600" aria-hidden="true">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                    <div className="text-xs text-slate-400">aus {review.city}</div>
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
    </>
  );
}
