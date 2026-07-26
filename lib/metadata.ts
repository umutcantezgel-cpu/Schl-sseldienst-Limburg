import { Metadata } from "next";
import { siteUrl } from "./schema";
import { BUSINESS } from "./constants";

interface GenerateMetadataProps {
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
}

export const generateSharedMetadata = ({
    title,
    description,
    path,
    noindex = false,
}: GenerateMetadataProps): Metadata => {
    const url = `${siteUrl}${path}`;

    return {
        title: title,
        description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: url,
            languages: {
                "de-DE": url,
            },
        },
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: BUSINESS.name,
            locale: "de_DE",
            type: "website",
            images: [
                {
                    url: `${siteUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: `${BUSINESS.name} – 24/7 Notdienst mit Festpreisen`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${siteUrl}/og-image.png`],
        },
        other: {
            "geo.region": "DE-HE",
            "geo.placename": "Limburg an der Lahn",
            "geo.position": "50.3833;8.0667",
            "ICBM": "50.3833, 8.0667",
        },
    };
};
