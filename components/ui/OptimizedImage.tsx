"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import type { ImageMeta } from "@/lib/images";

/**
 * Props für die OptimizedImage-Komponente.
 * Akzeptiert ein ImageMeta-Objekt aus der zentralen Registry
 * plus optionale Overrides und Layout-Konfiguration.
 */
interface OptimizedImageProps {
  /** Bild-Metadaten aus lib/images.ts */
  image: ImageMeta;
  /** Überschreibt die Anzeigegröße (CSS-Klassen) */
  className?: string;
  /** Responsive sizes-Attribut für optimale Bildauswahl */
  sizes?: string;
  /** Above-the-fold: priority + fetchpriority="high" */
  priority?: boolean;
  /** Visueller Stil-Preset */
  variant?: "rounded" | "card" | "hero" | "thumbnail" | "full";
  /** Aspect-Ratio Override (z.B. "4/3", "16/9", "1/1") */
  aspectRatio?: string;
  /** Object-fit Modus */
  objectFit?: "cover" | "contain" | "fill";
  /** Extra CSS-Klasse für den Container */
  containerClassName?: string;
  /** Optional: fill statt fester Dimensionen */
  fill?: boolean;
}

/**
 * Optimierte Bildkomponente für MS Schlüsseldienst Limburg.
 *
 * Features:
 * - Automatisches WebP/AVIF via Next.js Image Optimization
 * - Shimmer-Platzhalter während des Ladens
 * - CLS-freies Layout durch feste Dimensionen
 * - Fehler-Fallback bei nicht-ladbaren Bildern
 * - Hover-Zoom-Effekt (konfigurierbar)
 * - Unterstützt alle Bildregistrierungen aus lib/images.ts
 */
export default function OptimizedImage({
  image,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  variant = "rounded",
  aspectRatio,
  objectFit = "cover",
  containerClassName = "",
  fill = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  /** Variant-spezifische Klassen */
  const variantStyles: Record<string, string> = {
    rounded: "rounded-2xl",
    card: "rounded-3xl shadow-lg",
    hero: "rounded-3xl shadow-2xl",
    thumbnail: "rounded-xl",
    full: "rounded-none",
  };

  /** Container-Styles je nach Variant */
  const containerVariantStyles: Record<string, string> = {
    rounded: "",
    card: "overflow-hidden rounded-3xl shadow-lg border border-[var(--color-border-subtle)]",
    hero: "overflow-hidden rounded-3xl shadow-2xl",
    thumbnail: "overflow-hidden rounded-xl",
    full: "",
  };

  /** Shimmer-Platzhalter für Ladezeit */
  const shimmerStyle = isLoading
    ? "animate-pulse bg-gradient-to-r from-blue-50 via-blue-100/50 to-blue-50 bg-[length:200%_100%]"
    : "";

  /** Fehler-Fallback */
  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-blue-50 text-blue-400 ${variantStyles[variant]} ${containerClassName}`}
        style={aspectRatio ? { aspectRatio } : { aspectRatio: `${image.width}/${image.height}` }}
        role="img"
        aria-label={image.alt}
      >
        <svg className="h-12 w-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      </div>
    );
  }

  /** Gemeinsame Image-Props */
  const imageProps: Partial<ImageProps> = {
    src: image.src,
    alt: image.alt,
    title: image.title,
    sizes,
    quality: 80,
    className: `
      object-${objectFit}
      transition-all duration-700 ease-out
      ${isLoading ? "scale-[1.02] blur-sm" : "scale-100 blur-0"}
      group-hover:scale-105
      ${!fill ? variantStyles[variant] : ""}
      ${className}
    `.trim(),
    onLoad: () => setIsLoading(false),
    onError: () => setHasError(true),
    ...(priority
      ? { priority: true, loading: undefined }
      : { loading: "lazy" as const }),
  };

  return (
    <div
      className={`group relative overflow-hidden ${containerVariantStyles[variant]} ${shimmerStyle} ${containerClassName}`}
      style={
        !fill
          ? aspectRatio
            ? { aspectRatio }
            : undefined
          : aspectRatio
            ? { aspectRatio, position: "relative" as const }
            : { position: "relative" as const }
      }
    >
      {fill ? (
        <Image
          {...(imageProps as ImageProps)}
          fill
          style={{ objectFit }}
        />
      ) : (
        <Image
          {...(imageProps as ImageProps)}
          width={image.width}
          height={image.height}
        />
      )}
    </div>
  );
}
