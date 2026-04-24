import { SITE } from "./constants";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Digital Marketing Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "digital marketing agency",
    "SEO services",
    "website development",
    "Google Ads management",
    "social media management",
    "graphic design",
    "PPC agency",
    "online marketing",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Digital Marketing Agency`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} Digital Marketing Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Digital Marketing Agency`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${SITE.url}${path}`,
    },
    twitter: {
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}
