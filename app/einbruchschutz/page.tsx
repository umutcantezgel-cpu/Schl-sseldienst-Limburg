import { Metadata } from "next";
import { Shield, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import TrustBar from "@/components/trust/TrustBar";

export const metadata: Metadata = {
  title: "Einbruchschutz & Sicherheitstechnik | Fachberatung Lahn-Dill",
  description: "Kostenlose Fachberatung für Einbruchschutz in Wetzlar und Umgebung. Staatlich geförderte Sicherheitstechnik vom Fachbetrieb.",
};

export default function EinbruchschutzPage() {
  return (
    <>
      <div className="bg-white pt-20 pb-16">
        <section className="px-4 sm:px-6 lg:px-8">
           <div className="mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Content Side */}
                 <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm mb-6">
                       <Shield className="h-4 w-4" aria-hidden="true" />
                       Schutz vor Einbrechern
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6 text-balance">
                       Machen Sie Ihr Zuhause <span className="text-primary-600">sicher.</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-medium mb-8 text-balance leading-relaxed">
                       Alle 5 Minuten geschieht in Deutschland ein Einbruch. Mit moderner Sicherheitstechnik sinkt das Risiko um über 80%. Vereinbaren Sie jetzt eine kostenlose Erstberatung.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                       {[
                          "Kostenlose Vor-Ort-Analyse in Wetzlar & Umgebung",
                          "Mechanischer & elektronischer Einbruchschutz",
                          "Zertifizierter Partner hochwertiger Schließtechnik",
                          "Transparente Kostenplanung vorab"
                       ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-900 font-medium">
                             <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" aria-hidden="true" />
                             <span>{item}</span>
                          </li>
                       ))}
                    </ul>
                 </div>

                 {/* Form Side */}
                 <div className="w-full">
                    <div className="bg-white shadow-sm border border-slate-200 rounded-2xl p-4 md:p-8">
                       <ContactForm />
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>
      <TrustBar />
    </>
  );
}
