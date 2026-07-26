import { Shield, CheckCircle2, Lock, AlertTriangle, Home, Eye } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import TrustBar from "@/components/trust/TrustBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getFAQSchema } from "@/lib/faqSchema";
import { generateSharedMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata = generateSharedMetadata({
  title: "Einbruchschutz & Sicherheitsberatung in Limburg",
  description: "Kostenlose Fachberatung für Einbruchschutz in Limburg-Weilburg. Mechanischer & elektronischer Schutz. Machen Sie Ihr Zuhause sicher vor Einbrechern.",
  path: "/einbruchschutz",
});

export default function EinbruchschutzPage() {
  return (
    <div className="bg-[var(--color-blue-dark)] font-sans text-[var(--color-text-main)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Präventiver Einbruchschutz & Sicherheitsberatung",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Schlüsseldienst Limburg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Limburg an der Lahn",
                "addressRegion": "Hessen",
                "addressCountry": "DE"
              }
            },
            "areaServed": "Limburg-Weilburg",
            "description": "Kostenlose Sicherheitsanalyse und professionelle Montage von Einbruchschutz in Limburg."
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema([
            { question: "Was kostet eine Sicherheitsberatung in Limburg?", answer: "Unsere Erstberatung und Schwachstellenanalyse vor Ort in Limburg ist für Sie völlig kostenfrei und unverbindlich." },
            { question: "Wie kann ich mein Haus schnell gegen Einbruch sichern?", answer: "Oft genügen schon Panzerriegel und Pilzkopfzapfen an neuralgischen Punkten (Erdgeschossfenster, Terrassentüren), um 80% der Einbruchsversuche abzuwehren." },
          ])),
        }}
      />

      <Breadcrumbs items={[{ name: "Einbruchschutz", href: "/einbruchschutz" }]} />
      
      <div className="pt-12 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-light)_0%,transparent_70%)] opacity-20 pointer-events-none" />
        <section className="px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Content Side */}
                 <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-blue-dark)] border border-[var(--color-brand-light)] text-[var(--color-blue-primary)] font-semibold text-sm mb-6 shadow-sm">
                       <Shield className="h-4 w-4" aria-hidden="true" />
                       Zertifizierter Einbruchschutz für Limburg
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-main)] leading-[1.1] tracking-tight mb-6 text-balance">
                       Einbruchschutz & <span className="text-[var(--color-blue-primary)]">Sicherheitsberatung Limburg</span>
                    </h1>
                    <p className="text-lg text-[var(--color-text-body)] font-medium mb-8 text-balance leading-relaxed">
                       Wenn Sie zertifizierten <strong>Einbruchschutz & Sicherheitsberatung Limburg</strong> suchen, ist MS Schlüsseldienst Limburg unter der Leitung von Mina Saad Ihr erster Ansprechpartner. Ein Einbruch hinterlässt nicht nur finanzielle, sondern tiefe psychologische Spuren. Überlassen Sie den Schutz Ihrer Familie nicht dem Zufall. Als regionaler Meisterbetrieb rüsten wir Ihr Zuhause mit zertifizierter Sicherheitstechnik nach – diskret, hochwirksam und absolut verlässlich.
                    </p>
                    
                    <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-3xl p-8 mb-8 shadow-sm">
                       <h2 className="font-bold text-2xl text-[var(--color-text-main)] mb-5 flex items-center gap-3">
                         <AlertTriangle className="h-6 w-6 text-amber-500" />
                         Prävention rettet Werte
                       </h2>
                       <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                         Polizeistatistiken belegen: Sichtbarer und fachgerecht montierter Einbruchschutz lässt über 80% aller Einbruchsversuche scheitern. Gelegenheitstäter suchen den schnellen, geräuschlosen Einstieg. Dauert der Einbruchsversuch länger als 2 bis 3 Minuten, brechen die Täter in der Regel ab.
                       </p>
                       <ul className="space-y-4">
                          {[
                             "Kostenfreie & diskrete Schwachstellenanalyse in Limburg & Umgebung",
                             "VdS-zertifizierte Nachrüstung von Haustüren, Kellertüren und Fensterflügeln",
                             "Montage ausschließlich durch eigene, geschulte Limburger Fachkräfte",
                             "100% Transparenz: Verbindliche Festpreise für Ihre Sicherheits-Nachrüstung"
                          ].map((item, i) => (
                             <li key={i} className="flex items-start gap-3 text-[var(--color-text-body)] font-medium">
                                <CheckCircle2 className="h-6 w-6 text-[var(--color-blue-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                                <span>{item}</span>
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mb-8">
                       <div className="bg-[var(--color-blue-dark)] border border-[var(--color-border-subtle)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                          <Lock className="h-8 w-8 text-[var(--color-blue-primary)] mb-3" />
                          <h3 className="font-bold text-[var(--color-text-main)]">Mechanik</h3>
                          <p className="text-sm text-[var(--color-text-body)] mt-2">Panzerriegel, Zusatzschlösser & einbruchhemmende Pilzkopfzapfen für Türen & Fenster.</p>
                       </div>
                       <div className="bg-[var(--color-blue-dark)] border border-[var(--color-border-subtle)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                          <Eye className="h-8 w-8 text-[var(--color-blue-primary)] mb-3" />
                          <h3 className="font-bold text-[var(--color-text-main)]">Elektronik</h3>
                          <p className="text-sm text-[var(--color-text-body)] mt-2">Smarte Alarmanlagen und Videoüberwachung zur präventiven Abschreckung & Meldung.</p>
                       </div>
                    </div>
                 </div>

                 {/* Form Side */}
                 <div className="w-full lg:sticky lg:top-32 mt-8 lg:mt-0">
                    <div className="bg-[var(--color-blue-dark)] shadow-2xl shadow-[var(--color-brand-light)]/20 border border-[var(--color-border-subtle)] rounded-3xl p-6 md:p-10 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-blue-primary)] to-[var(--color-brand-light)]" />
                       <div className="mb-8">
                         <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">Kostenlose Sicherheitsanalyse</h2>
                         <p className="text-[var(--color-text-body)]">Hinterlassen Sie uns Ihre Kontaktdaten. Einer unserer Limburger Sicherheitsexperten meldet sich umgehend für eine diskrete Ersteinschätzung bei Ihnen zurück.</p>
                       </div>
                       <ContactForm />
                       <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--color-text-body)]">
                         <Shield className="h-4 w-4" />
                         <span>Ihre Daten werden 100% vertraulich behandelt.</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Detailed Content Expansion Block */}
              <div className="mt-16 bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-3xl p-8 md:p-12 shadow-sm">
                 <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-6">
                    Effektiver Einbruchschutz für Wohnungen & Gewerbeobjekte in Limburg
                 </h2>
                 <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    Die Kriminalstatistik zeigt deutlich, dass gut gesicherte Türen und Fenster das Einbruchsrisiko drastisch senken. Unser Meisterbetrieb bietet umfassenden <strong>Einbruchschutz & Sicherheitsberatung Limburg</strong> für Eigentümer, Mieter und Gewerbetreibende in Limburg an der Lahn sowie im gesamten Landkreis Limburg-Weilburg.
                 </p>

                 <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                       <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                          <Lock className="h-5 w-5 text-[var(--color-blue-primary)]" /> Mechanische Nachrüstung nach DIN-Norm
                       </h3>
                       <p className="text-[var(--color-text-body)] leading-relaxed text-base">
                          Der meiste Hebelversuch scheitert an solidem mechanischen Wiederstand. Wir installieren geprüfte Panzerriegelschlosssysteme, Querriegelschlosssysteme sowie Fensterzusatzsicherungen mit Pilzkopfzapfen. Diese mechanischen Schutzmaßnahmen verhindern effektiv das Aufhebeln mit Schraubendrehern oder Brecheisen.
                       </p>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                          <Home className="h-5 w-5 text-[var(--color-blue-primary)]" /> Kostenfreie Sicherheits-Audits vor Ort
                       </h3>
                       <p className="text-[var(--color-text-body)] leading-relaxed text-base">
                          Jede Immobilie hat individuelle Schwachstellen – vom Lichtschacht im Keller über die schlecht einsehbare Terrassentür bis zum veralteten Schließzylinder an der Haupteingangstür. Bei unserem kostenlosen Vor-Ort-Termin analysiert Inhaber Mina Saad Ihr Objekt systematisch und empfiehlt passgenaue Sicherheitsupgrade-Lösungen zum Festpreis.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>
      <TrustBar />
    </div>
  );
}
