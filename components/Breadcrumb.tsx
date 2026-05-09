import Link from "next/link";
import { CONTENT_GRAPH } from "@/lib/contentGraph";
import { siteUrl } from "@/lib/schema";

interface BreadcrumbProps {
    currentSlug: string;
    currentTitle: string;
}

export default function Breadcrumb({ currentSlug, currentTitle }: BreadcrumbProps) {
    const node = CONTENT_GRAPH.find(n => n.slug === currentSlug);
    const parentNode = node?.parentSlug
        ? CONTENT_GRAPH.find(n => n.slug === node.parentSlug)
        : null;

    const crumbs = [
        { name: "Startseite", href: "/" },
        ...(parentNode ? [{ name: parentNode.title, href: parentNode.slug }] : []),
        { name: currentTitle, href: currentSlug },
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: `${siteUrl}${crumb.href}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="Breadcrumb" className="px-4 py-3 sm:px-12 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)]">
                <ol className="mx-auto max-w-7xl flex items-center gap-2 text-sm text-[var(--color-text-body)]">
                    {crumbs.map((crumb, i) => (
                        <li key={`${crumb.href}-${i}`} className="flex items-center gap-2">
                            {i > 0 && <span className="text-[var(--color-stone-400)]">/</span>}
                            {i < crumbs.length - 1 ? (
                                <Link
                                    href={crumb.href}
                                    className="hover:text-[var(--color-blue-primary)] transition-colors"
                                >
                                    {crumb.name}
                                </Link>
                            ) : (
                                <span className="text-[var(--color-text-main)] font-medium">
                                    {crumb.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
