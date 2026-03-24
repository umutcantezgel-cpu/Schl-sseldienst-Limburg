import { ShieldCheck, Phone, ArrowRight } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import dynamic from "next/dynamic";
import Link from "next/link";

const PricingCalculator = dynamic(() => import("@/components/pricing/PricingCalculator"), {
  loading: () => (
    <div className="w-full max-w-2xl mx-auto h-[600px] bg-white rounded-2xl shadow-sm border border-slate-200 animate-pulse flex items-center justify-center p-8 mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-100"></div>
        <div className="h-6 w-48 bg-slate-100 rounded-full"></div>
        <div className="h-4 w-32 bg-slate-100 rounded-full mt-2"></div>
      </div>
    </div>
  )
});
import PricingFAQ, { faqs } from "@/components/pricing/PricingFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateSharedMetadata } from "@/lib/metadata";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { getFAQSchema } from "@/lib/faqSchema";

const mainServicesSchema = [
  generateServiceSchema({ title: "Türöffnung", description: "Zerstörungsfreie Türöffnung ab 50€", url: "/leistungen/turoeffnung", price: 50 }),
  generateServiceSchema({ title: "Autoöffnung", description: "Schonende Autoöffnung", url: "/leistungen/autooeffnung", price: 80 })
];
export const metadata = generateSharedMetadata({
  title: "Preise | Festpreise ab 50€ | Ohne versteckte Kosten",
  description: "Transparente Festpreise für Türöffnungen in Wetzlar. Keine versteckten Kosten. Berechnen Sie Ihren Preis sofort online.",
  path: "/preise",
});

export default function PreisePage() {
  const breadcrumbs = [
    { name: "Preise", href: "/preise" }
  ];

  return (
    <div className="bg-white text-slate-900 pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainServicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Unsere <span className="text-primary-600">Festpreise</span> – Fair und Transparent.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            Sie zahlen genau das, was wir vorher am Telefon vereinbaren. Garantiert. Keine versteckten Kosten.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-10">
        <PricingCalculator />
      </section>

      {/* Fairness-Garantie Box */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary-600 mb-4" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Ihre Sicherheit: Unsere Festpreisgarantie
            </h2>
            <p className="mt-4 text-primary-900 leading-relaxed max-w-2xl mx-auto">
              Alle Preise inkl. gesetzlicher MwSt. und Anfahrt. Keine versteckten Kosten. EC-Kartenzahlung direkt beim Monteur möglich. Der Preis, den Ihnen der Monteur vor Ort nach der Besichtigung nennt, ist verbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
        <PricingFAQ />
      </section>

      <EmergencyCTA />
    </div>
  );
}
