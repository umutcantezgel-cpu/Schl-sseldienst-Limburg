"use client";

import { TimeSlot, TIME_MODIFIERS } from "./pricing.constants";
import { motion } from "framer-motion";

interface TimeSlotSelectorProps {
    selected: TimeSlot;
    onSelect: (slot: TimeSlot) => void;
}

export default function TimeSlotSelector({ selected, onSelect }: TimeSlotSelectorProps) {
    const slots: { id: TimeSlot; label: string }[] = [
        { id: "regulaer", label: "Regulär" },
        { id: "abends", label: "Abends" },
        { id: "nachts", label: "Nachts" },
        { id: "wochenende", label: "Wochenende" },
    ];

    return (
        <div
            role="tablist"
            aria-label="Notdienst-Zeitraum für Limburg auswählen"
            className="flex flex-col sm:flex-row w-full bg-[var(--color-surface-divider)] p-1.5 rounded-2xl gap-1 relative"
        >
            {slots.map((slot) => {
                const isSelected = selected === slot.id;
                return (
                    <button
                        key={slot.id}
                        role="tab"
                        aria-selected={isSelected}
                        tabIndex={isSelected ? 0 : -1}
                        onClick={() => onSelect(slot.id)}
                        className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-colors z-10 ${isSelected ? "text-white" : "text-[var(--color-text-body)] hover:text-[var(--color-text-main)]"
                            }`}
                    >
                        {isSelected && (
                            <motion.div
                                layoutId="active-timeslot"
                                className="absolute inset-0 bg-[var(--color-blue-primary)] rounded-xl -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        )}
                        <span className="relative z-20">{slot.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
