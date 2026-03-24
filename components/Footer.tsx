import { Key, MapPin, Phone, Mail, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
              <Key className="h-5 w-5 text-primary-400" aria-hidden="true" />
              Schlüsseldienst Wetzlar
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für alle Schloss- und Sicherheitsfragen
              in Wetzlar und Umgebung. 24/7 erreichbar.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> IHK-geprüft</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> SSL-gesichert</span>
            </div>
          </div>

          {/* Contact */}
          <nav aria-label="Kontakt">
            <h3 className="font-bold uppercase text-slate-500 text-xs tracking-widest">
              Kontakt
            </h3>
            <address className="not-italic mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400" aria-hidden="true" />
                <a href="tel:06441123456" className="hover:text-white transition-colors">06441 123 456</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400" aria-hidden="true" />
                <a href="mailto:info@sd-wetzlar.de" className="hover:text-white transition-colors">info@sd-wetzlar.de</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" aria-hidden="true" />
                <span>Wetzlarer Str. 1, 35578 Wetzlar</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-400" aria-hidden="true" />
                <span>24/7 Notdienst</span>
              </div>
            </address>
          </nav>

          {/* Service Areas */}
          <nav aria-label="Einsatzgebiete">
            <h3 className="font-bold uppercase text-slate-500 text-xs tracking-widest">
              Einsatzgebiete
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Wetzlar", "Gießen", "Marburg", "Aßlar", "Solms"].map((city) => (
                <li key={city}>
                  <Link href={`/${city.toLowerCase().replace("ß", "ss")}`} className="hover:text-white transition-colors">
                    Schlüsseldienst {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicegebiet" className="text-primary-400 hover:text-white transition-colors font-semibold">
                  Alle Gebiete →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Rechtliches">
            <h3 className="font-bold uppercase text-slate-500 text-xs tracking-widest">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Schlüsseldienst Wetzlar. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
