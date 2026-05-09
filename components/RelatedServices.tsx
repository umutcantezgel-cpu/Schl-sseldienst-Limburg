import Link from "next/link";
import { CONTENT_GRAPH } from "@/lib/contentGraph";
import { ArrowRight } from "lucide-react";

export default function RelatedServices({ currentServiceId }: { currentServiceId: string }) {
    const currentNode = CONTENT_GRAPH.find(n => n.slug === currentServiceId || n.slug === `/leistungen/${currentServiceId}`);
    if (!currentNode || !currentNode.relatedSlugs || currentNode.relatedSlugs.length === 0) return null;

    return (
        <section className="my-12 py-8 border-t border-[var(--color-border-subtle)]">
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6">Passende Leistungen für Sie</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentNode.relatedSlugs.map((slug) => {
                    const service = CONTENT_GRAPH.find(n => n.slug === slug);
                    if (!service) return null;

                    return (
                        <Link
                            key={slug}
                            href={service.slug}
                            className="group block p-6 bg-[var(--color-blue-dark)] rounded-[var(--radius-lg)] elevation-1 border border-[var(--color-border-subtle)] hover:shadow-[var(--shadow-lift)] transition-all hover:border-[var(--color-brand-muted)]"
                        >
                            <h4 className="text-lg font-semibold text-[var(--color-text-main)] group-hover:text-[var(--color-blue-primary)] transition-colors">
                                {service.title}
                            </h4>
                            <span className="text-[var(--color-blue-primary)] font-medium flex items-center gap-1 mt-auto">
                                Mehr erfahren
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
