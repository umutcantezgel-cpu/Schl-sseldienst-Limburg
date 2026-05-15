import { ShieldCheck, MapPin, Heart, Clock, Star, BadgeCheck, PhoneCall, Award, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import EmergencyCTA from "@/components/EmergencyCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import CertBadges from "@/components/trust/CertBadges";
import { RegionalPartner } from "@/components/trust/RegionalPartner";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Über MS Schlüsseldienst Limburg | Mina Saad",
  description: "Lernen Sie den Meisterbetrieb MS Schlüsseldienst Limburg kennen. Ehrliches Handwerk, Inhaber Mina Saad und tiefe Verwurzelung in der Region Limburg-Weilburg.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": BUSINESS.name,
      "description": "Ihr lokaler, vertrauenswürdiger Fachbetrieb in Limburg. Wir garantieren zerstörungsfreie Türöffnungen und 100% Festpreise – Inhaber Mina Saad.",
      "areaServed": "Limburg an der Lahn und Umgebung",
      "knowsAbout": ["Türöffnung", "Sicherheitstechnik", "Einbruchschutz", "Schließanlagen"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[var(--color-surface-base)] text-[var(--color-text-main)] font-sans">
        <Breadcrumbs items={[{ name: "Über uns", href: "/ueber-uns" }]} />

        {/* ═══ HERO SECTION ═══ */}
        <section className="relative overflow-hidden bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-b border-[var(--color-border-subtle)]">
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-80" aria-hidden="true" />
          <div className="absolute top-[-10%] left-[10%] w-[30%] h-[30%] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-blue-100 bg-white/70 text-blue-800 text-sm font-semibold mb-8 shadow-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              Lokal in Limburg: {BUSINESS.address.street}, {BUSINESS.address.zip} {BUSINESS.address.city}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl lg:text-6xl mb-6">
              Transparenz statt <br className="hidden sm:block" />
              <span className="text-gradient-primary relative inline-block">
                Kostenfallen.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl leading-relaxed mt-8">
              Hinter dem Namen <strong>{BUSINESS.name}</strong> steht ein Team um Inhaber {BUSINESS.owner}. Wir sind ein echter Fachbetrieb aus Ihrer direkten Nachbarschaft, angetreten, um das Vertrauen in unsere Branche durch ehrliches Handwerk wiederherzustellen.
            </p>
          </div>
        </section>

        {/* ═══ STORY SECTION ═══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Unsere Werte</span>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl mb-6">
                  Wir reparieren den Ruf einer ganzen Branche
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full mb-8"></div>
                
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                  Wir alle kennen die Berichte über sogenannte "Schwarze Schafe", die Notsituationen schamlos ausnutzen, grundlos Zylinder zerstören und horrende Rechnungen stellen. 
                </p>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                  <strong>Wir gehen einen völlig anderen Weg.</strong> Unter der Führung von {BUSINESS.ownerTitle} {BUSINESS.owner} garantieren wir Ihnen eine Behandlung auf Augenhöhe. Faire Preise, materialerhaltende Arbeitsweisen und absolute Verlässlichkeit.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Klar kommunizierte Festpreise am Telefon",
                    "Zerstörungsfreie Öffnung bei zugefallenen Türen in 99% der Fälle",
                    "Fachpersonal direkt aus der Region Limburg",
                    "Seriöse Rechnungsstellung ohne versteckte Gebühren"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-main)] font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl opacity-50 transform translate-x-4 translate-y-4"></div>
                <div className="glass-card rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative z-10">
                  {/* Inhaber-Portrait */}
                  <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={IMAGES.inhaberPortrait.src}
                      alt={IMAGES.inhaberPortrait.alt}
                      title={IMAGES.inhaberPortrait.title}
                      width={IMAGES.inhaberPortrait.width}
                      height={IMAGES.inhaberPortrait.height}
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover w-full"
                    />
                  </div>
                  <blockquote className="text-[var(--color-text-main)] text-xl md:text-2xl font-medium leading-relaxed">
                    &quot;Ein Schlüsseldienst sollte ein Retter in der Not sein, kein Grund zur Sorge. Wenn unser Team vor Ort ist, übernehmen Profis, denen Sie blind vertrauen können.&quot;
                  </blockquote>
                  <div className="mt-10 flex items-center gap-5 border-t border-blue-100 pt-6">
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 overflow-hidden">
                      <Image
                        src={IMAGES.inhaberPortrait.src}
                        alt={IMAGES.inhaberPortrait.alt}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-text-main)] text-xl">{BUSINESS.owner}</div>
                      <div className="text-blue-600 font-medium">{BUSINESS.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ ARBEITSFOTOS ═══ */}
            <div className="mt-24">
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6">Unser Team bei der Arbeit</h3>
              <div className="h-1 w-16 bg-blue-500 rounded-full mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  IMAGES.schlossMontage,
                  IMAGES.zylinderMontage,
                  IMAGES.turoeffnungErfolg,
                  IMAGES.zylinderInstallation,
                  IMAGES.sprechanlageArbeit,
                  IMAGES.zylinderVermessung,
                ].map((img) => (
                  <div key={img.src} className="overflow-hidden rounded-2xl shadow-md group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      title={img.title}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ VALUES GRID ═══ */}
            <div className="mt-32 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: BadgeCheck, title: "Zertifizierte Expertise", desc: "Unser Team wird kontinuierlich fortgebildet. Wir setzen auf neueste Sicherheitsstandards und High-End-Spezialwerkzeuge, um Schäden komplett zu vermeiden." },
                { icon: Clock, title: "Lokal in Rekordzeit", desc: "Da wir unseren festen Sitz in Limburg haben, entfallen extrem lange Anfahrtswege. Wir sind im Stadtgebiet meist in 15 bis 30 Minuten bei Ihnen." },
                { icon: Heart, title: "Empathie im Notfall", desc: "Sich auszusperren ist Stress pur. Unser Team ist geschult darin, nicht nur handwerklich, sondern auch menschlich beruhigend und transparent zu agieren." }
              ].map((val) => (
                <div key={val.title} className="group glass-card p-10 hover-lift transition-all duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <val.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">{val.title}</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed text-lg">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* ═══ REGIONAL PARTNERS ═══ */}
            <RegionalPartner />

            {/* ═══ PROOF SECTION ═══ */}
            <div className="mt-32 rounded-3xl bg-blue-50 p-12 text-center border border-blue-100 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Award className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-6">
                  Vertrauen Sie auf bewiesene Qualität
                </h2>
                <p className="text-[var(--color-text-body)] leading-relaxed max-w-2xl mx-auto mb-10 text-lg">
                  Unser höchstes Gut ist der Ruf in unserer Heimat Limburg. Die Zufriedenheit unserer Kunden ist unser täglicher Ansporn. Keine leeren Marketing-Worte, sondern nachweisbare Ergebnisse.
                </p>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-1 text-blue-500 drop-shadow-sm mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-8 w-8 fill-current" />)}
                  </div>
                  <p className="text-[var(--color-text-main)] font-bold text-xl">
                    Speichern Sie unsere Nummer für den Ernstfall.
                  </p>
                  <a href={BUSINESS.phone.href} className="mt-6 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700">
                    <PhoneCall className="h-6 w-6" />
                    Jetzt anrufen: {BUSINESS.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CertBadges />
        <EmergencyCTA />
      </div>
    </>
  );
}
