import type { Metadata } from "next";
import { romeData } from "@/data/tour-rome";

const d = romeData;

export const metadata: Metadata = {
  title: d.seo.title,
  description: d.seo.description,
  openGraph: {
    title: d.seo.ogTitle,
    description: d.seo.ogDescription,
    images: [d.seo.ogImage],
    type: "website",
    locale: "ka_GE",
    siteName: "AviaTours.ge",
  },
  twitter: {
    card: "summary_large_image",
    title: d.seo.ogTitle,
    description: d.seo.ogDescription,
    images: [d.seo.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      name: `${d.seo.tourName} ტური`,
      description: d.seo.description,
      touristType: d.seo.tourType,
      offers: {
        "@type": "Offer",
        price: String(d.budgetBasePrice),
        priceCurrency: "GEL",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: d.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "მთავარი", item: "https://aviatours.ge" },
        { "@type": "ListItem", position: 2, name: d.seo.breadcrumbName, item: `https://aviatours.ge/${d.seo.slug}` },
      ],
    },
  ],
};

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
