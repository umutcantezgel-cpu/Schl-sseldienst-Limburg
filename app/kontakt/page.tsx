import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import EmergencyCTA from "@/components/EmergencyCTA";
import { generateSharedMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="h-64 flex items-center justify-center text-gray-500 font-medium">Formular wird geladen...</div>,
});

const ConsentGoogleMaps = dynamic(() => import("@/components/ConsentGoogleMaps"), {
  loading: () => <div className="h-[400px] flex items-center justify-center bg-gray-100 text-gray-500 font-medium">Karte wird geladen...</div>,
});

export const revalidate = 86400;

export const metadata = generateSharedMetadata({
  title: "Kontakt & Notruf | MS Schlüsseldienst Limburg",
  description: "Treten Sie in Kontakt mit Ihrem Limburger Meisterbetrieb. 24/7 Notruf für garantierte 15-30 Min. Hilfe oder Kontaktformular für Beratungen.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] pt-20">
      {/* ═══ HERO SECTION ═══ */}
      <section aria-label="Kontaktübersicht" className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70" aria-hidden="true" />
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Immer für Sie da</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
            Sprechen Sie mit echten Limburger Profis
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed">
            Sprechen Sie mit echten Limburger Profis. Ihre Sicherheit in Limburg ist unser Auftrag. In Notfällen ist unser Meister-Notruf unter Leitung von Mina Saad 24/7 erreichbar. Für Beratungen zur Einbruchsprävention nutzen Sie bequem unser Kontaktformular.
          </p>
        </div>
      </section>

      {/* ═══ EMERGENCY ALERT ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 relative z-20 -mt-16">
        <div className="glass-card rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-lg border border-blue-200/50 relative overflow-hidden bg-white/80">

          <div className="flex justify-center mb-4">
            <span className="flex h-4 w-4 rounded-full bg-blue-600 animate-pulse-glow"></span>
          </div>
          <p className="text-blue-900 font-extrabold text-2xl mb-4">
            Zugefallene Tür in Limburg? Bitte nutzen Sie NICHT das Formular!
          </p>
          <p className="text-[var(--color-text-body)] mb-8 text-lg max-w-2xl mx-auto">
            Bei akuten Notfällen, Schlüsselverlust oder Einbruchschäden wählen Sie sofort unseren direkten Meister-Notruf. Wir garantieren eine Ankunftszeit von 15–30 Minuten im Limburger Stadtgebiet.
          </p>
          <a
            href={BUSINESS.phone.href}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 text-xl group"
          >
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
            Notruf: {BUSINESS.phone.display}
          </a>
        </div>
      </section>

      {/* ═══ CONTENT SECTION ═══ */}
      <section aria-label="Kontaktmöglichkeiten" className="px-4 sm:px-6 lg:px-8 py-20 bg-[var(--color-surface-base)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="lg:pr-8">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Direkter Draht</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
                So erreichen Sie uns
              </h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full mt-6 mb-8"></div>
              
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                Egal ob mitten in der Nacht oder an Feiertagen – MS Schlüsseldienst Limburg lässt Sie nicht vor verschlossener Tür stehen.
              </p>

              {/* Inhaber Portrait */}
              <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.inhaberPortrait.src}
                  alt={IMAGES.inhaberPortrait.alt}
                  title={IMAGES.inhaberPortrait.title}
                  width={IMAGES.inhaberPortrait.width}
                  height={IMAGES.inhaberPortrait.height}
                  priority
                  quality={80}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover w-full"
                />
              </div>

              <address className="not-italic mt-12 space-y-10">
                <div className="flex gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100 shadow-sm">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">Limburger Meister-Notruf (24/7)</h3>
                    <p className="mt-2 text-lg">
                      <a href={BUSINESS.phone.href} className="font-bold text-blue-600 hover:text-blue-800 transition-colors link-underline">
                        {BUSINESS.phone.display}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-600 group-hover:bg-gray-200 transition-colors duration-300 border border-gray-200 shadow-sm">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">E-Mail für Anfragen</h3>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg">
                      <a href={`mailto:${BUSINESS.email}`} className="hover:text-blue-600 transition-colors link-underline">
                        {BUSINESS.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-600 group-hover:bg-gray-200 transition-colors duration-300 border border-gray-200 shadow-sm">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">Zentrale in Limburg</h3>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg leading-relaxed">
                      <strong>{BUSINESS.name}</strong><br />
                      {BUSINESS.ownerTitle} {BUSINESS.owner}<br />
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.zip} {BUSINESS.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-600 group-hover:bg-gray-200 transition-colors duration-300 border border-gray-200 shadow-sm">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-main)]">Service & Einsatzzeiten</h3>
                    <p className="mt-2 text-[var(--color-text-body)] text-lg leading-relaxed">
                      <strong className="text-[var(--color-text-main)]">Notdienst:</strong> 24 Stunden, 7 Tage die Woche<br />
                      <strong className="text-[var(--color-text-main)]">Bürozeiten:</strong> Mo-Fr, 08:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form Wrapper */}
            <div className="relative h-full">
              <div className="absolute inset-0 bg-blue-50/50 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <div className="relative z-10 glass-card rounded-3xl p-8 md:p-10 shadow-lg border-white/60 bg-white">
                <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6">Beratung & Termin vereinbaren</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Detailed Info Block for Content Expansion & Keyword Integration */}
          <div className="mt-16 bg-[var(--color-surface-elevated)] rounded-3xl p-8 md:p-12 border border-[var(--color-border-subtle)] shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-main)] mb-6">
              Ihr direkter Draht zum Schlüsseldienst Limburg Kontakt
            </h2>
            <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
              Wenn Sie schnelle Unterstützung bei einer zugefallenen Tür benötigen oder eine fundierte Sicherheitsberatung für Ihre Immobilie wünschen, ist unser <strong>Schlüsseldienst Limburg Kontakt</strong> der direkte Weg zu verlässlicher Hilfe. Unter der persönlichen Leitung von Inhaber Mina Saad betreut unser regional verankerter Meisterbetrieb Kunden im gesamten Landkreis Limburg-Weilburg sowie den angrenzenden Regionen.
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-xs">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" /> 24/7 Notfall-Erreichbarkeit
                </h3>
                <p className="text-[var(--color-text-body)] leading-relaxed">
                  Für akute Notsituationen – wie eine ausgesperrte Person, ein verlorener Schlüsselbund oder ein Einbruchschaden – nutzen Sie bitte ausschließlich unsere Notrufhotline. So stellen wir sicher, dass ein Einsatzfahrzeug in 15 bis 30 Minuten vor Ort bei Ihnen in Limburg eintrifft.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-xs">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" /> Schriftliche Beratungsanfragen
                </h3>
                <p className="text-[var(--color-text-body)] leading-relaxed">
                  Für geplante Termine zur Installation von Schließanlagen, die Anfertigung von Nachschlüsseln oder die Sicherheitsüberprüfung Ihres Eigenheims steht Ihnen unser Online-Formular sowie unsere E-Mail-Adresse rund um die Uhr zur Verfügung. Wir antworten werktags innerhalb weniger Stunden.
                </p>
              </div>
            </div>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed mt-6">
              Transparenz ist unser Grundprinzip: Bereits bei Ihrem ersten Anruf beziffern wir die anfallenden Kosten verbindlich als Festpreis. Bei uns gibt es keine versteckten Sondergebühren oder unerwarteten Aufschläge vor Ort. Vertrauen Sie auf einen echten, regionalen Handwerksbetrieb, der seit Jahren erfolgreich im gesamten Landkreis Limburg-Weilburg tätig ist. Wir dokumentieren jeden Einsatz detailliert, erstellen ordnungsgemäße Rechnungen für Ihre Versicherung und bieten neben der klassischen Barzahlung selbstverständlich auch bequeme Kartenzahlung (EC-/Kreditkarte) direkt am Einsatzort an. 
            </p>
          </div>

          {/* Google Maps iFrame */}
          <div className="mt-24 w-full h-[400px] rounded-3xl overflow-hidden border border-[var(--color-border-subtle)] shadow-md relative group">
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
            <ConsentGoogleMaps />
          </div>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA
          title="Direkter Kontakt zu Ihrem Limburger Meisterbetrieb"
          subtitle="Ob akuter Notfall in 15–30 Min. oder geplante Sicherheitsberatung – wir sind 24/7 für Sie erreichbar."
          locationName="Limburg"
        />
      </aside>
    </div>
  );
}
