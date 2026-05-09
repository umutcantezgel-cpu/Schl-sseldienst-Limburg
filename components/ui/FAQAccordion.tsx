"use client";

import { useState, useId } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
    question: string;
    answer: string;
    isDarkerBg?: boolean;
}

export default function FAQAccordion({ question, answer, isDarkerBg = false }: FAQAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const uniqueId = useId();
    const buttonId = `faq-btn-${uniqueId}`;
    const panelId = `faq-panel-${uniqueId}`;

    return (
        <div className={`rounded-[var(--radius-lg)] border border-[var(--color-border-glass)] ${isDarkerBg ? 'bg-[var(--color-surface-elevated)]' : 'bg-[var(--color-surface-glass)]'} backdrop-blur-md overflow-hidden transition-all duration-300 ease-out mb-6 ${isOpen ? 'border-[var(--color-blue-primary)] shadow-[var(--shadow-md)]' : ''}`}>
            <h3>
                <button
                    id={buttonId}
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                >
                    <span className="flex gap-3 text-[18px] font-bold text-[var(--color-text-main)] font-[var(--font-heading)]">
                        <HelpCircle className="h-5 w-5 text-[var(--color-blue-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                        {question}
                    </span>
                    <span className={`shrink-0 text-[var(--color-blue-primary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                </button>
            </h3>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="mx-6 sm:mx-8 mb-6 sm:mb-8 pt-0 border-t border-[var(--color-border-subtle)]">
                        <p className="pt-6 text-[16px] text-[var(--color-text-body)] leading-[1.75]">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
