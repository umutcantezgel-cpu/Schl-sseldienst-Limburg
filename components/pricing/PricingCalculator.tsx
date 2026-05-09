"use client";

import { useState } from "react";
import TimeSlotSelector from "./TimeSlotSelector";
import PriceBreakdown from "./PriceBreakdown";
import { ServiceType, TimeSlot, getDynamicPricing } from "./pricing.constants";
import { ShieldCheck, DoorOpen, Lock, Car, Shield } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCalculatorProps {
    basePrice?: number;
}

export default function PricingCalculator({ basePrice = 59 }: PricingCalculatorProps) {
    const [serviceType, setServiceType] = useState<ServiceType>("doorFallen");
    const [timeSlot, setTimeSlot] = useState<TimeSlot>("day");

    const PRICING = getDynamicPricing(basePrice);
    const currentPrice = PRICING[serviceType][timeSlot];
    const isNullPrice = currentPrice === null;

    const services = [
        { id: "doorFallen", label: "Zugefallene Tür", desc: "(Limburg & Umgebung)", icon: DoorOpen },
        { id: "doorLocked", label: "Abgeschlossene Tür", desc: "(Sicherheitsöffnung)", icon: Lock },
        { id: "carOpening", label: "Autoöffnung in Limburg", desc: "(100% Schonend)", icon: Car },
        { id: "safeOpening", label: "Tresoröffnung", desc: "(Diskreter Service)", icon: Shield },
    ] as const;

    return (
        <div className="glass-card overflow-hidden max-w-6xl mx-auto border border-[var(--color-border-glass)]">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-8 sm:p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg shadow-sm">
                    Limburgs Transparenz-Rechner
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl flex items-center justify-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-blue-200" />
                    Limburger Festpreis-Garantie: Keine versteckten Kosten
                </h2>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
                    <div className="bg-white/10 text-blue-50 px-4 py-2 rounded-full ring-1 ring-white/30 backdrop-blur-sm">
                        Lokaler Festpreis Limburg: ab {basePrice} €
                    </div>
                    <div className="bg-red-500/10 text-red-50 px-4 py-2 rounded-full ring-1 ring-red-500/30 hidden sm:block backdrop-blur-sm">
                        Warnung: Abzock-Zentralen verlangen oft &gt; 300 €
                    </div>
                </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                {/* Columns 1 & 2: Interactive Controls */}
                <div className="lg:col-span-2 space-y-10">
                    <fieldset>
                        <legend className="text-lg font-bold text-[var(--color-text-main)] mb-4">
                            1. Welches Problem haben Sie in Limburg?
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service) => {
                                const Icon = service.icon;
                                const isSelected = serviceType === service.id;
                                return (
                                    <label
                                        key={service.id}
                                        className={`relative flex cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${isSelected
                                            ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500 shadow-sm scale-[1.02]"
                                            : "border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] hover:border-blue-300 hover:bg-blue-50/30"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="serviceType"
                                            value={service.id}
                                            className="sr-only"
                                            checked={isSelected}
                                            onChange={(e) => setServiceType(e.target.value as ServiceType)}
                                        />
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center gap-4 w-full">
                                                <div className={`p-3 rounded-xl shrink-0 transition-colors ${isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}>
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <span className={`font-bold transition-colors ${isSelected ? "text-blue-900" : "text-[var(--color-text-main)]"}`}>
                                                        {service.label}
                                                    </span>
                                                    <span className={`text-xs transition-colors ${isSelected ? "text-blue-700" : "text-[var(--color-text-body)]"}`}>
                                                        {service.desc}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`shrink-0 ml-3 h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${isSelected ? "border-blue-600 bg-blue-600" : "border-[var(--color-border-strong)] bg-white"}`}>
                                                {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                                            </div>
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend className="text-lg font-bold text-[var(--color-text-main)] mb-4">
                            2. Wann benötigen Sie unseren Limburger Notdienst?
                        </legend>
                        <TimeSlotSelector selected={timeSlot} onSelect={setTimeSlot} />
                    </fieldset>
                </div>

                {/* Column 3: The Result/Breakdown */}
                <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-[var(--color-border-subtle)] pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between">
                    <div>
                        <PriceBreakdown serviceType={serviceType} timeSlot={timeSlot} basePrice={basePrice} />
                    </div>

                    <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] pb-2">
                        <a
                            href="tel:+496431123456"
                            className={cn(buttonVariants({ size: "lg", variant: "default" }), "w-full shadow-md")}
                        >
                            {isNullPrice ? "Jetzt diskret beraten lassen" : "Limburger Monteur sofort anfordern"}
                        </a>
                        <p className="text-center text-xs text-[var(--color-text-body)] mt-3 flex items-center justify-center gap-1">
                            <ShieldCheck className="h-4 w-4 text-blue-600" />
                            Ihr regionaler Fachbetrieb aus Limburg
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
