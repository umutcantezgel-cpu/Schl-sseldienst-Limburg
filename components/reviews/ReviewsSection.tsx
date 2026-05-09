import { reviewsData } from "@/lib/data/testimonials";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import StaggerReveal from "../motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";

export default function ReviewsSection() {
    return (
        <section className="relative bg-[var(--color-surface-elevated)] border-y border-[var(--color-border-subtle)] px-6 md:px-12 py-20 md:py-32 overflow-hidden noise-overlay" aria-label="Kundenbewertungen">
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col text-center">
                    <h2
                        className="font-[700] text-[var(--color-text-main)]"
                        style={{
                            fontSize: 'var(--text-h2)',
                            lineHeight: 'var(--leading-h)',
                            letterSpacing: 'var(--tracking-heading)',
                        }}
                    >
                        Was unsere Kunden in Limburg über unseren <span className="text-gradient">Meisterbetrieb</span> sagen
                    </h2>
                    <p
                        className="mt-6 text-[var(--color-text-body)] mx-auto font-[400]"
                        style={{
                            fontSize: 'var(--text-lead)',
                            lineHeight: 'var(--leading-lead)',
                            maxWidth: 'var(--prose-width)',
                        }}
                    >
                        Echte Notsituationen, echte Bewertungen. Überzeugen Sie sich von unserer 100% Festpreis-Garantie und lokalen Zuverlässigkeit.
                    </p>
                </div>

                <StaggerReveal animation={entryAnimations.slideUpFade}>
                    <ReviewCarousel>
                        {reviewsData.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </ReviewCarousel>
                </StaggerReveal>
            </div>
        </section>
    );
}
