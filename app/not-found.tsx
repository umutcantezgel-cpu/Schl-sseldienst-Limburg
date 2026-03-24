import Link from "next/link";
import { ArrowRight, Key, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400" aria-hidden="true">
        <Key className="h-8 w-8" />
      </div>
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Seite nicht gefunden.
      </h1>
      <p className="mt-2 text-2xl font-bold text-primary-600">
        Aber wir finden Ihre Tür.
      </p>
      <p className="mt-4 text-lg text-slate-600 max-w-md">
        Die gesuchte Seite existiert nicht oder wurde verschoben. 
        Im Notfall erreichen Sie uns aber jederzeit.
      </p>

      <nav aria-label="Hilfreiche Seiten" className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="tel:06441123456"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl px-8 py-4 shadow-lg transition-colors text-lg"
        >
          <Phone className="h-5 w-5" />
          Jetzt anrufen
        </a>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl px-6 py-4 transition-colors"
        >
          Zurück zur Startseite
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>

      <Link href="/kontakt" className="text-slate-500 hover:text-primary-600 mt-6 block transition-colors">
        Kontakt aufnehmen →
      </Link>
    </div>
  );
}
