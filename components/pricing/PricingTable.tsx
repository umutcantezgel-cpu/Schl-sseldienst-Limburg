import { Info, Check } from "lucide-react";
import { pricingData } from "@/lib/data/pricing";

export default function PricingTable() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[var(--color-surface-muted)] border-b border-[var(--color-border-subtle)]">
              <th className="py-[var(--space-4)] px-[var(--space-5)] font-[700] text-[var(--color-text-primary)] w-1/3" style={{ fontSize: 'var(--text-body)' }}>Leistung</th>
              <th className="py-[var(--space-4)] px-[var(--space-5)] font-[700] text-[var(--color-text-primary)] w-1/4" style={{ fontSize: 'var(--text-body)' }}>Preis</th>
              <th className="py-[var(--space-4)] px-[var(--space-5)] font-[700] text-[var(--color-text-primary)]" style={{ fontSize: 'var(--text-body)' }}>Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {pricingData.map((item) => (
              <tr key={item.id} className="hover:bg-[var(--color-surface-subtle)] transition-colors group">
                <td className="py-[var(--space-5)] px-[var(--space-5)] align-top">
                  <div className="font-[700] text-[var(--color-text-primary)]" style={{ fontSize: 'var(--text-body)' }}>{item.serviceName}</div>
                  <div className="text-[var(--color-text-muted)] mt-[var(--space-1)]" style={{ fontSize: 'var(--text-small)' }}>{item.description}</div>
                </td>
                <td className="py-[var(--space-5)] px-[var(--space-5)] align-top">
                  <div className="flex items-center gap-[var(--space-2)]">
                    <span className="font-[800] tabular-nums text-[var(--color-brand)]" style={{ fontSize: 'var(--text-h4)' }}>
                      ab {item.priceBase} €
                    </span>
                    <div className="relative flex items-center justify-center">
                      <Info className="h-4 w-4 text-[var(--color-slate-400)] cursor-help" aria-label="Preis Info" />
                      {/* CSS-only Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-[var(--color-text-primary)] text-white rounded shadow-lg z-10 text-center pointer-events-none" style={{ fontSize: 'var(--text-tiny)' }}>
                        Inklusive MwSt.{item.includesTravel ? " und Anfahrt." : ""}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-[var(--space-5)] px-[var(--space-5)] align-top">
                  <ul className="space-y-[var(--space-2)]">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-[var(--space-2)] text-[var(--color-text-body)]" style={{ fontSize: 'var(--text-small)' }}>
                        <Check className="h-4 w-4 text-[var(--color-success)] shrink-0 mt-[2px]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[var(--color-surface-muted)] p-[var(--space-4)] text-center border-t border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-[500]" style={{ fontSize: 'var(--text-small)' }}>
        * Alle Preise verstehen sich als garantierte Festpreise vor Ort (inkl. MwSt.). Keine versteckten Gebühren.
      </div>
    </div>
  );
}
