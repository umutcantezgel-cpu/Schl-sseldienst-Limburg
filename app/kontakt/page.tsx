import { Phone, Mail, MapPin, Clock } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import ContactForm from "@/components/contact/ContactForm";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Kontakt — 24/7 Notruf & Kontaktformular",
  description: "Kontaktieren Sie Schlüsseldienst Wetzlar: 24/7 Notruf unter 06441 123 456 oder per Kontaktformular. Schnelle Hilfe bei Notfällen, faire Beratung für Sicherheitstechnik.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="Kontaktübersicht" className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="text-primary-600">Kontakt</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            Wir sind für Sie da. Rufen Sie uns im Notfall direkt an oder
            schreiben Sie uns eine Nachricht für allgemeine Anfragen.
          </p>
        </div>
      </section>

      {/* Notruf-Warnung Box — Split-Intent */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <p className="text-slate-900 font-bold text-xl mb-4">
            🚨 NOTFALL? Bitte nutzen Sie das Formular nicht!
          </p>
          <p className="text-slate-600 mb-6">
            Bei einem akuten Notfall (zugefallene Tür, ausgesperrt) rufen Sie uns bitte direkt an:
          </p>
          <a
            href="tel:06441123456"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl px-8 py-4 shadow-lg transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            06441 123 456 anrufen
          </a>
        </div>
      </section>

      {/* Content Section — Split Layout */}
      <section aria-label="Kontaktmöglichkeiten" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                So erreichen Sie uns
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Im Notfall (zugefallene Tür) empfehlen wir immer den
                telefonischen Kontakt. Wir sind 24/7 für Sie erreichbar.
              </p>

              <address className="not-italic mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Notruf (24/7)</h3>
                    <p className="mt-2 text-slate-600">
                      <a href="tel:06441123456" className="font-semibold text-primary-600 hover:underline">
                        06441 / 123 456
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">E-Mail</h3>
                    <p className="mt-2 text-slate-600">
                      <a href="mailto:info@schluesseldienst-wetzlar.de" className="hover:underline">
                        info@schluesseldienst-wetzlar.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Standort</h3>
                    <p className="mt-2 text-slate-600">
                      Schlüsseldienst Wetzlar<br />
                      Musterstraße 123<br />
                      35578 Wetzlar
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Servicezeiten</h3>
                    <p className="mt-2 text-slate-600">
                      Notdienst: 24 Stunden, 7 Tage die Woche<br />
                      Bürozeiten: Mo-Fr, 08:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA />
      </aside>
    </>
  );
}
