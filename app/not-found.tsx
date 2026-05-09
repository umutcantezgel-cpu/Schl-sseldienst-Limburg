import Link from "next/link";
import { ArrowRight, Key, Phone, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--color-surface-white)] px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-brand-light)] text-[var(--color-blue-primary)] mb-8" aria-hidden="true">
        <Key className="h-10 w-10" />
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-[var(--color-blue-primary)]" />
        <span className="text-sm font-bold tracking-widest text-[var(--color-blue-primary)] uppercase">
          {BUSINESS.name}
        </span>
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
        Seite nicht gefunden.
      </h1>
      <p className="mt-2 text-2xl font-bold text-[var(--color-blue-primary)]">
        Aber wir finden jede Tür in Limburg.
      </p>
      <p className="mt-4 text-lg text-[var(--color-text-body)] max-w-lg mx-auto">
        Die gesuchte Seite existiert nicht oder wurde verschoben. Kein Problem! 
        Unser Meister-Notruf ist 24/7 für Sie im gesamten Landkreis Limburg-Weilburg im Einsatz.
      </p>

      <nav aria-label="Hilfreiche Seiten" className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
        <a
          href={BUSINESS.phone.href}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--color-emergency)] hover:bg-[var(--color-emergency-hover)] text-white font-bold rounded-xl px-8 py-4 shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-4)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
        >
          <Phone className="h-5 w-5" />
          Jetzt anrufen
        </a>
        <Link
          href="/"
          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[var(--color-border-subtle)] hover:border-[var(--color-blue-primary)] text-[var(--color-text-main)] font-semibold rounded-xl px-6 py-4 transition-colors"
        >
          Zur Startseite
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>

      <div className="mt-12 flex items-center gap-2 text-sm font-medium text-[var(--color-text-body)] bg-[var(--color-surface-elevated)] px-4 py-2 rounded-full">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Einsatzbereit in Limburg & Umgebung • 15–30 Min Anfahrtszeit
      </div>
    </div>
  );
}
