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
import Image from "next/image";
import EmergencyCTA from "@/components/EmergencyCTA";
import HeroCTA from "@/components/HeroCTA";
import TrustBadges from "@/components/trust/TrustBadges";
import { Card } from "@/components/ui/card";
import PricingTable from "@/components/pricing/PricingTable";
import TrustBar from "@/components/trust/TrustBar";
import ProcessSteps from "@/components/trust/ProcessSteps";

import { getHomepageFAQs } from "@/lib/faqData";
import { getFAQSchema } from "@/lib/faqSchema";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const revalidate = 86400;

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO SECTION — Premium Bright Glassmorphism ═══ */}
      <section id="hero-section" aria-label="Schnelle Notfall-Hilfe" className="relative px-4 sm:px-6 lg:px-8 pt-40 lg:pt-48 pb-20 overflow-hidden bg-[var(--color-surface-base)] scroll-mt-28">
        {/* Ambient bright glow */}
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" aria-hidden="true" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-teal-50/50 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content (3/5) */}
            <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-blue-100 bg-white/60 mb-8 md:mb-12 shadow-sm text-blue-800 text-sm font-semibold tracking-wide">
                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                {BUSINESS.name} – {BUSINESS.ownerTitle} {BUSINESS.owner}
              </div>
              <h1 className="font-extrabold text-[var(--color-text-main)] tracking-tight leading-[1.15] sm:leading-tight md:leading-snug text-balance mt-4 md:mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Tür zu? Ihr regionaler Premium-Schlüsseldienst für Limburg & Umgebung.
              </h1>
              <p className="max-w-2xl text-[var(--color-text-body)] text-lg md:text-xl font-medium mt-8 md:mt-10 text-balance leading-relaxed">
                Tür zu? Ihr regionaler Premium-Schlüsseldienst für Limburg & Umgebung. Wir sind {BUSINESS.name} unter Leitung von {BUSINESS.owner}. Als etablierter Fachbetrieb öffnen wir Ihre Tür in 99% der Fälle absolut schadensfrei. In 15–30 Minuten sind wir vor Ort – zu 100% garantierten, transparenten Festpreisen, ohne versteckte Gebühren.
              </p>
              <div className="mt-10 mb-6">
                <TrustBadges />
              </div>
              <HeroCTA />
            </div>

            {/* Right: Inhaber Portrait (2/5) */}
            <div className="lg:col-span-2 hidden lg:flex justify-center">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-blue-100/40 rounded-[2rem] transform rotate-3" aria-hidden="true" />
                <div className="absolute -inset-4 bg-blue-50/60 rounded-[2rem] transform -rotate-2" aria-hidden="true" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60">
                  <Image
                    src={IMAGES.inhaberPortrait.src}
                    alt={IMAGES.inhaberPortrait.alt}
                    title={IMAGES.inhaberPortrait.title}
                    width={IMAGES.inhaberPortrait.width}
                    height={IMAGES.inhaberPortrait.height}
                    priority
                    quality={85}
                    sizes="(max-width: 1024px) 0px, 33vw"
                    className="object-cover w-full max-w-[340px]"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-blue-100 flex items-center gap-2 z-10">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-[var(--color-text-main)] leading-tight">Geprüfter</div>
                    <div className="text-blue-600 font-semibold leading-tight">Fachbetrieb</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ TRUST BAR ═══ */}
      <TrustBar />

      {/* ═══ SERVICES SECTION ═══ */}
      <section aria-label="Exklusive Leistungen" className="relative bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 noise-overlay overflow-hidden border-y border-[var(--color-border-subtle)]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 md:mb-6 block">Erstklassiges Service-Portfolio</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Ihre Spezialisten für <span className="text-gradient-primary">Sicherheit & Öffnungen</span>
            </h2>
            <div className="mx-auto mt-6 md:mt-8 h-[4px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
            <p className="mt-6 md:mt-8 text-[var(--color-text-body)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Verlassen Sie sich auf modernstes Equipment und jahrelange Expertise. Vom verlorenen Haustürschlüssel bis zum komplexen Schließanlagen-Konzept – wir meistern jede Herausforderung präzise, diskret und vor allem materialschonend.
            </p>
          </div>
          <div className="mt-20 grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: DoorOpen, title: "Schonende Türöffnungen", desc: "Smarte und zu 99% zerstörungsfreie Öffnungsmethoden für Haus-, Wohnungs- und Zimmertüren. Innerhalb von Minuten sind Sie wieder drinnen.", href: "/leistungen/turoeffnung", linkText: "Türöffnung ansehen" },
              { icon: Car, title: "KFZ-Spezialöffnungen", desc: "Fachgerechte und völlig kratzerfreie Autoöffnung aller Marken und Modelle. Vertrauen Sie unserem geschulten Personal.", href: "/leistungen/autooeffnung", linkText: "KFZ-Öffnung ansehen" },
              { icon: Lock, title: "Tresor- & Safeknackung", desc: "Wir öffnen Ihren Tresor, Waffenschrank oder Geldkassette absolut diskret und mit höchster Präzision – auch bei defekten Schlössern.", href: "/leistungen/schliessanlagen", linkText: "Tresore ansehen" },
              { icon: ShieldCheck, title: "Cleverer Einbruchschutz", desc: "Kostenlose Sicherheitsanalyse vor Ort. Installation von Premium-Schließzylindern, Querriegeln und modernen Smart-Home-Sicherheitssystemen.", href: "/einbruchschutz", linkText: "Einbruchschutz ansehen" },
            ].map((service) => (
              <Card
                key={service.title}
                className="group relative flex flex-col items-start p-8 glass-card hover-lift h-full overflow-hidden transition-all duration-300 border-white/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 rounded-2xl bg-blue-50 p-4 text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="relative z-10 mt-8 text-xl font-bold text-[var(--color-text-main)] group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 mt-3 text-[var(--color-text-body)] text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="relative z-10 mt-auto pt-8 flex w-full">
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 text-sm transition-colors group-hover:translate-x-1"
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
      <section aria-label="Ihre Vorteile in Limburg" className="bg-[var(--color-surface-base)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Ihre Nummer 1 in Limburg</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Warum Sie bei uns <span className="text-gradient-primary">in den besten Händen</span> sind
            </h2>
            <div className="mx-auto mt-6 md:mt-8 h-[4px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
          </div>

          {/* Authentische Arbeitsbilder als Vertrauens-Element */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              IMAGES.turoeffnungErfolg,
              IMAGES.schlossMontage,
              IMAGES.zylinderMontage,
              IMAGES.zylinderInstallation,
            ].map((img, idx) => (
              <div key={img.src} className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:gap-16 sm:grid-cols-3">
            {[
              { icon: Euro, title: "Knallharte Festpreisgarantie", desc: "Sie erfahren bereits am Telefon, was die Türöffnung exakt kosten wird. Garantiert keine bösen Überraschungen, keine Fantasie-Anfahrtskosten, absolute Ehrlichkeit." },
              { icon: MapPin, title: "Echte lokale Präsenz", desc: `Als echter Limburger Betrieb (${BUSINESS.ownerTitle} ${BUSINESS.owner}) mit Sitz in der ${BUSINESS.address.street} sind wir rasend schnell bei Ihnen. Keine Callcenter, sondern direkter Kontakt zum Monteur.` },
              { icon: Key, title: "Zerstörungsfreie Öffnung", desc: "Zugefallene Türen öffnen unsere speziell ausgebildeten Monteure in 99% der Fälle komplett ohne jegliche Beschädigungen an Zylinder, Beschlag oder der Tür selbst." },
            ].map((item) => (
              <div key={item.title} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl glass border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-12 w-12" aria-hidden="true" />
                </div>
                <h3 className="mt-10 text-2xl font-bold text-[var(--color-text-main)] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING SECTION ═══ */}
      <section id="preise" aria-label="Garantierte Festpreise" className="relative bg-[var(--color-surface-elevated)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 border-y border-[var(--color-border-subtle)] scroll-mt-28">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Absolute Kostenkontrolle</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Preise, die dem <span className="text-gradient-primary">Tageslicht standhalten</span>
            </h2>
            <div className="mx-auto mt-6 md:mt-8 h-[4px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
            <p className="mt-6 md:mt-8 text-[var(--color-text-body)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Keine unseriösen "Ab 15€"-Lockvogelangebote. Bei uns erhalten Sie echte, transparente Komplettpreise inklusive Anfahrt. So wissen Sie vorab genau, was Sie erwartet.
            </p>
          </div>
          <div className="mt-20 max-w-5xl mx-auto px-2">
            <PricingTable />
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/preise"
              className="inline-flex items-center gap-3 bg-white border border-blue-200 text-blue-700 font-bold rounded-full px-10 py-5 transition-all text-lg tracking-wide hover:shadow-xl hover:border-blue-300 hover:text-blue-900 group"
            >
              Zum interaktiven Preisrechner <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />



      {/* ═══ FAQ SECTION ═══ */}
      <section id="faq" aria-label="Häufig gestellte Fragen" className="bg-[var(--color-surface-base)] px-4 sm:px-6 lg:px-8 py-20 lg:py-32 scroll-mt-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(getHomepageFAQs())),
          }}
        />
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Häufig Gestellte Fragen</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Wir räumen mit <span className="text-gradient-primary">Unklarheiten auf</span>
            </h2>
            <div className="mx-auto mt-6 md:mt-8 h-[4px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
            <p className="mt-6 md:mt-8 text-[var(--color-text-body)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Die Welt der Schlüsseldienste ist leider oft undurchsichtig. Als seriöser Fachbetrieb aus Limburg beantworten wir Ihnen die drängendsten Fragen schon vorab.
            </p>
          </div>
          <div className="space-y-6">
            {getHomepageFAQs().map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors link-underline pb-1"
            >
              Häufig gestellte Fragen zu Türöffnungen & Preisen lesen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <aside aria-label="Schnelle Kontaktaufnahme">
        <EmergencyCTA />
      </aside>
    </>
  );
}
