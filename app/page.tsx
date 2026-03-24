import {
  Phone,
  Check,
  DoorOpen,
  Car,
  Lock,
  ShieldCheck,
  ArrowRight,
  Euro,
  MapPin,
  Key,
  Clock,
} from "lucide-react";
import Link from "next/link";
import EmergencyCTA from "@/components/EmergencyCTA";
import HeroCTA from "@/components/HeroCTA";
import TrustBadges from "@/components/trust/TrustBadges";
import { Card } from "@/components/ui/card";
import PricingTable from "@/components/pricing/PricingTable";
import TrustBar from "@/components/trust/TrustBar";
import ProcessSteps from "@/components/trust/ProcessSteps";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import GoogleReviewsBadge from "@/components/reviews/GoogleReviewsBadge";
import { aggregateRating } from "@/lib/data/testimonials";
import { getHomepageFAQs } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/faqSchema";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO SECTION — Der Rettungsanker ═══ */}
      <section id="hero-section" aria-label="Notfall-Hilfe" className="bg-white px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-12">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
            Ausgesperrt? Wir sind im <span className="text-primary-600">Lahn-Dill-Kreis</span> in 20-30 Minuten bei Ihnen.
          </h1>
          <p className="mx-auto max-w-xl text-slate-600 text-lg md:text-xl font-medium mt-6 text-balance leading-relaxed">
            Regionaler Fachbetrieb. Keine versteckten Kosten. Zerstörungsfreie Öffnung in 99% der Fälle.
          </p>
          <TrustBadges />
          <HeroCTA />
        </div>
      </section>

      {/* Google Reviews Badge */}
      <aside aria-label="Google-Bewertungen" className="relative -mt-4 mb-6 flex justify-center z-10 w-full px-4">
        <GoogleReviewsBadge rating={aggregateRating.ratingValue} count={aggregateRating.reviewCount} />
      </aside>

      {/* ═══ TRUST BAR — Immediate Relief ═══ */}
      <TrustBar />

      {/* ═══ PRICING SECTION — Transparenz ═══ */}
      <section id="preise" aria-label="Transparente Festpreise" className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Unsere transparenten <span className="text-primary-600">Festpreise</span>
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded bg-primary-600"></div>
            <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Garantierte Preise für Türöffnungen ohne versteckte Kosten.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <PricingTable />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-full px-6 py-3 transition-colors text-sm tracking-wide"
            >
              Interaktiven Preisrechner öffnen <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section aria-label="Unsere Leistungen" className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Unsere <span className="text-primary-600">Leistungen</span>
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded bg-primary-600"></div>
            <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Professionelle Hilfe für jedes Schloss-Problem.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: DoorOpen, title: "Türöffnung", desc: "Zerstörungsfreie Öffnung von Haus- und Wohnungstüren in 99% der Fälle.", href: "/leistungen/turoeffnung", linkText: "Türöffnung im Detail" },
              { icon: Car, title: "Autoöffnung", desc: "Schonende Öffnung von Fahrzeugen aller Marken ohne Lackschäden.", href: "/leistungen/autooeffnung", linkText: "Autoöffnung im Detail" },
              { icon: Lock, title: "Tresoröffnung", desc: "Diskrete und professionelle Öffnung von Tresoren und Wertgelassen.", href: "/leistungen/schliessanlagen", linkText: "Tresoröffnung im Detail" },
              { icon: ShieldCheck, title: "Sicherheitstechnik", desc: "Beratung und Einbau von Schließanlagen und Einbruchschutz.", href: "/leistungen/sicherheitstechnik", linkText: "Sicherheitstechnik im Detail" },
            ].map((service) => (
              <Card
                key={service.title}
                className="group relative flex flex-col items-start p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 h-full"
              >
                <div className="rounded-xl bg-primary-50 p-4 text-primary-600">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-auto pt-6 flex w-full">
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 text-sm transition-colors group-hover:translate-x-0.5"
                  >
                    {service.linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY US SECTION ═══ */}
      <section aria-label="Warum Schlüsseldienst Wetzlar" className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Warum <span className="text-primary-600">Schlüsseldienst Wetzlar</span>?
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded bg-primary-600"></div>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              { icon: Euro, title: "Transparente Festpreise", desc: "Wir nennen Ihnen den Preis vorab am Telefon. Keine bösen Überraschungen vor Ort." },
              { icon: MapPin, title: "Lokaler Anbieter", desc: "Wir sind echte Handwerker aus Wetzlar, kein anonymes Callcenter aus dem Ausland." },
              { icon: Key, title: "Zerstörungsfreie Öffnung", desc: "Mit Spezialwerkzeug öffnen wir zugefallene Türen in der Regel ohne jeden Schaden." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 text-primary-600 shadow-sm">
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Testimonials */}
      <ReviewsSection />

      {/* ═══ FAQ SECTION ═══ */}
      <section aria-label="Häufig gestellte Fragen" className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(getHomepageFAQs())),
          }}
        />
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Häufig gestellte <span className="text-primary-600">Fragen</span>
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded bg-primary-600"></div>
            <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Schlüsseldienst Wetzlar beantwortet Ihre wichtigsten Fragen — ehrlich und transparent.
            </p>
          </div>
          <div className="space-y-4">
            {getHomepageFAQs().map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Alle Fragen & Antworten anzeigen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA />
      </aside>
    </>
  );
}
