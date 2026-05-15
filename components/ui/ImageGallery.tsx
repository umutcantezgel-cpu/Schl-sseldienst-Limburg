"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";
import type { ImageMeta } from "@/lib/images";

interface ImageGalleryProps {
  /** Array von Bildern aus der zentralen Registry */
  images: ImageMeta[];
  /** Spalten-Layout */
  columns?: 2 | 3 | 4;
  /** Visueller Stil */
  variant?: "rounded" | "card" | "thumbnail";
  /** Einheitliches Seitenverhältnis für alle Bilder */
  aspectRatio?: string;
  /** Optional: Titel über der Galerie */
  title?: string;
  /** Optional: Beschreibung unter dem Titel */
  description?: string;
  /** Responsive sizes-Attribut */
  sizes?: string;
}

/**
 * Responsive Bildergalerie für Service-Seiten.
 * Zeigt mehrere Bilder in einem responsiven Grid mit einheitlichem Styling.
 */
export default function ImageGallery({
  images,
  columns = 3,
  variant = "card",
  aspectRatio = "4/3",
  title,
  description,
  sizes,
}: ImageGalleryProps) {
  const gridCols: Record<number, string> = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  const defaultSizes: Record<number, string> = {
    2: "(max-width: 640px) 100vw, 50vw",
    3: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    4: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  };

  return (
    <div className="mt-12 mb-8">
      {title && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-text-main)]">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-[var(--color-text-body)] text-lg">
              {description}
            </p>
          )}
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-4" />
        </div>
      )}
      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {images.map((image, index) => (
          <OptimizedImage
            key={image.src}
            image={image}
            variant={variant}
            aspectRatio={aspectRatio}
            fill
            sizes={sizes || defaultSizes[columns]}
            containerClassName={`w-full ${aspectRatio ? "" : "h-64 sm:h-72 lg:h-80"}`}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
