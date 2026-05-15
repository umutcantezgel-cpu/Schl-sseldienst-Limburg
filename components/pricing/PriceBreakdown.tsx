"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ServiceType, TimeSlot, PRICING_DATA, TIME_MODIFIERS, ADDONS } from "./pricing.constants";

interface PriceBreakdownProps {
    serviceType: ServiceType;
    timeSlot: TimeSlot;
}

export default function PriceBreakdown({ serviceType, timeSlot }: PriceBreakdownProps) {
    const currentPricing = PRICING_DATA[serviceType][timeSlot];
    const isNullPrice = currentPricing.total === null;

    if (isNullPrice) {
        return (
            <div className="rounded-2xl glass p-6 ring-1 ring-[var(--color-border-glass)] flex flex-col justify-center items-center text-center h-[260px]" aria-live="polite">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-2">Diskrete Kalkulation auf Anfrage</h3>
                <p className="text-[var(--color-text-body)] mb-6 text-sm">
                    Um Ihnen unsere unerschütterliche Limburger Festpreis-Garantie geben zu können, bewerten wir die genaue Situation für diese Spezial-Öffnung kurz telefonisch oder direkt bei Ihnen vor Ort in Limburg.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl glass p-6 ring-1 ring-[var(--color-border-glass)] h-full flex flex-col" aria-live="polite">
            <h3 className="text-base font-bold text-[var(--color-text-main)] mb-4 tracking-tight">Transparente Preisaufschlüsselung für Limburg</h3>

            <dl className="space-y-3 text-sm flex-1">
                <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-3">
                    <dt className="text-[var(--color-text-body)] text-left">Basispreis</dt>
                    <dd className="font-semibold text-[var(--color-text-main)] shrink-0 ml-4 relative w-[40px] text-right">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentPricing.basePrice}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                                className="absolute right-0 top-0 bottom-0 m-auto inline-flex items-center"
                            >
                                {currentPricing.basePrice}€
                            </motion.span>
                        </AnimatePresence>
                    </dd>
                </div>

                {currentPricing.surcharge > 0 && (
                    <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-3">
                        <dt className="text-[var(--color-text-body)] text-left">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentPricing.surchargeLabel}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {currentPricing.surchargeLabel}
                                </motion.span>
                            </AnimatePresence>
                        </dt>
                        <dd className="font-semibold text-[var(--color-brand-red)] shrink-0 ml-4 relative w-[40px] text-right">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentPricing.surcharge}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                                    className="absolute right-0 top-0 bottom-0 m-auto inline-flex items-center"
                                >
                                    +{currentPricing.surcharge}€
                                </motion.span>
                            </AnimatePresence>
                        </dd>
                    </div>
                )}

                <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-3">
                    <dt className="text-[var(--color-text-body)] text-left">{ADDONS.anfahrt.label}</dt>
                    <dd className="font-semibold text-[var(--color-success)] shrink-0 ml-4">{ADDONS.anfahrt.price}</dd>
                </div>

                <div className="pt-2">
                    <div className="flex justify-between items-center">
                        <dt className="text-sm font-bold text-[var(--color-text-main)]">Limburger Festpreis ab</dt>
                        <dd className="text-3xl font-extrabold text-gradient tabular-nums relative w-[80px] h-[40px] text-right">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentPricing.total}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                                    className="absolute right-0 top-0 h-full flex items-center"
                                >
                                    {currentPricing.total}€
                                </motion.span>
                            </AnimatePresence>
                        </dd>
                    </div>
                </div>
            </dl>

            <div className="mt-6 space-y-2 text-xs text-[var(--color-text-body)] bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-left">
                <p className="font-semibold text-blue-900">Absolute Transparenz bei Zusatzleistungen:</p>
                <ul className="list-disc pl-4 space-y-1 text-blue-800/80">
                    {serviceType === 'tuer-abgesperrt' && (
                        <li>{ADDONS.zylinder.label}: {ADDONS.zylinder.price}</li>
                    )}
                    <li>{ADDONS.mehrwehraufwand.label}: {ADDONS.mehrwehraufwand.price}</li>
                </ul>
            </div>
        </div>
    );
}
