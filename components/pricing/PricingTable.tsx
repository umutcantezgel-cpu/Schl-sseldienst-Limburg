import { Info, Check } from "lucide-react";
import { pricingData } from "@/lib/data/pricing";

export default function PricingTable() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--color-border-glass)] glass shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[var(--color-blue-light)] border-b border-[var(--color-border-subtle)] text-lg">
              <th className="py-5 px-6 md:px-8 font-bold text-[var(--color-text-main)] w-1/3">Leistung in Limburg</th>
              <th className="py-5 px-6 md:px-8 font-bold text-[var(--color-blue-primary)] w-1/4 whitespace-nowrap">Limburger Festpreis</th>
              <th className="py-5 px-6 md:px-8 font-bold text-[var(--color-text-main)]">Ihre Garantien</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {pricingData.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50/50 transition-colors group">
                <td className="py-8 px-6 md:px-8 align-top">
                  <div className="font-bold text-lg text-[var(--color-text-main)]">{item.serviceName}</div>
                  <div className="text-[var(--color-text-body)] mt-3 text-sm leading-relaxed">{item.description}</div>
                </td>
                <td className="py-8 px-6 md:px-8 align-top">
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold tabular-nums text-gradient text-2xl whitespace-nowrap">
                      ab {item.priceBase} €
                    </span>
                    <div className="relative flex items-center justify-center group/tooltip">
                      <Info className="h-5 w-5 text-[var(--color-blue-primary)] cursor-help shrink-0" aria-label="Limburg Festpreis Details" />
                      {/* CSS-only Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 w-56 p-3 glass rounded-xl shadow-lg z-10 text-center pointer-events-none text-[var(--color-text-body)] text-xs font-medium">
                        Inkl. MwSt.{item.includesTravel ? " zzgl. 30€ Anfahrt." : ""}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-8 px-6 md:px-8 align-top">
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[var(--color-text-body)] text-sm">
                        <Check className="h-5 w-5 text-[var(--color-blue-primary)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[var(--color-blue-light)] p-5 text-center border-t border-[var(--color-border-subtle)] text-[var(--color-text-body)] font-medium text-sm leading-relaxed">
        * Limburger Festpreis-Garantie: Alle Preise sind absolut verbindliche Endpreise (inkl. MwSt., zzgl. 30€ Anfahrt). Keine versteckten Gebühren. Keine Abzocke.
      </div>
    </div>
  );
}
