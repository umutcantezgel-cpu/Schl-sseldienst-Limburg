import React from "react";
import { Handshake } from "lucide-react";

export function RegionalPartner() {
  return (
    <div className="mt-32 relative rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-12 border border-slate-200/60 shadow-sm overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Icon Area */}
        <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-2xl bg-white shadow-md border border-slate-100">
          <Handshake className="h-10 w-10 text-blue-600" />
        </div>
        
        {/* Content Area */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">
            Regionales Partnernetzwerk
          </h3>
          <p className="text-[var(--color-text-body)] leading-relaxed text-lg mb-6">
            Befinden Sie sich außerhalb unseres Kern-Einsatzgebietes im Raum Limburg? Für eine schnelle, seriöse und schadenfreie Türöffnung im Lahn-Dill-Kreis empfehlen wir unseren geprüften Partnerbetrieb, die <a href="https://wetzlar-schluesseldienst.de/" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">Schlüsselschmiede Wetzlar</a>. So garantieren wir, dass Sie auch in benachbarten Regionen stets in hochprofessionellen Händen sind.
          </p>
        </div>
      </div>
    </div>
  );
}
