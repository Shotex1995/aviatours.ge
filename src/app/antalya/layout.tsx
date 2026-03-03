import type { Metadata } from "next";
import { faqs, BUDGET_BASE_PRICE } from "@/data/antalya";

export const metadata: Metadata = {
  title: "ანტალიის ტური — AviaTours.ge | All Inclusive 1550₾-დან",
  description:
    "ანტალიის ტური All Inclusive — 5 დღე, 4 ღამე, ავიაბილეთი, სასტუმრო, კვება, დაზღვევა და ტრანსფერი. დაჯავშნეთ წინასწარ და დაზოგეთ.",
  openGraph: {
    title: "ანტალიის ტური — AviaTours.ge",
    description: "All Inclusive | 5 დღე, 4 ღამე | 1,550₾-დან",
    images: ["https://avia.ge/wp-content/uploads/2025/08/avia-tours-6.jpg"],
    type: "website",
    locale: "ka_GE",
    siteName: "AviaTours.ge",
  },
  twitter: {
    card: "summary_large_image",
    title: "ანტალიის ტური — AviaTours.ge",
    description: "All Inclusive | 5 დღე, 4 ღამე | 1,550₾-დან",
    images: ["https://avia.ge/wp-content/uploads/2025/08/avia-tours-6.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      name: "ანტალიის ტური — All Inclusive",
      description:
        "ანტალიის ტური All Inclusive — 5 დღე, 4 ღამე, ავიაბილეთი, სასტუმრო, კვება, დაზღვევა და ტრანსფერი.",
      touristType: "Beach",
      offers: {
        "@type": "Offer",
        price: String(BUDGET_BASE_PRICE),
        priceCurrency: "GEL",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "მთავარი", item: "https://aviatours.ge" },
        { "@type": "ListItem", position: 2, name: "ანტალიის ტური", item: "https://aviatours.ge/antalya" },
      ],
    },
  ],
};

export default function AntalyaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
