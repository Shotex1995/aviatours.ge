// ===== SUB-TYPES =====
export interface DepartureDate {
  date: string;
  price: number;
  seatsLeft: number;
  tier: "budget" | "premium";
}

export interface HotelInfo {
  name: string;
  stars: 4 | 5;
  imageUrl: string;
  features: string[];
}

export interface ReviewData {
  name: string;
  text: string;
  rating: number;
  source: string;
  date: string;
}

export interface ComparisonFeature {
  feature: string;
  budget: string | boolean;
  premium: string | boolean;
}

export interface BlogPlace {
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface IncludedItem {
  d: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

// ===== SECTION-SPECIFIC DATA =====
export interface HeroData {
  backgroundImage: string;
  backgroundAlt: string;
  badge: string;
  title: string;
  subtitle: string;
  oldPrice: string;
  currentPrice: string;
  bookingUrl: string;
  whatsappMessage: string;
}

export interface AboutData {
  tagline: string;
  heading: string;
  paragraphs: string[];
  images: { src: string; alt: string }[];
}

export interface VideoData {
  heading: string;
  subheading: string;
  youtubeId: string;
}

export interface MapData {
  heading: string;
  subheading: string;
  embedUrl: string;
  mapTitle: string;
}

export interface PricingData {
  budgetPrice: number;
  budgetOldPrice: string;
  premiumPrice: number;
  premiumOldPrice: string;
  budgetFeatures: string[];
  premiumFeatures: string[];
  bookingUrl: string;
}

export interface EarlyBookingData {
  benefits: { emoji: string; title: string; desc: string }[];
  ctaText: string;
  bookingUrl: string;
}

export interface FinalCtaData {
  heading: string;
  subheading: string;
  ctaText: string;
  bookingUrl: string;
}

export interface ExitIntentData {
  tourName: string;
  promoCode: string;
  whatsappMessage: string;
}

export interface LeadFormData {
  whatsappMessage: string;
}

export interface MobileStickyBarData {
  price: string;
  oldPrice: string;
  bookingUrl: string;
}

export interface SeoData {
  title: string;
  description: string;
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  tourName: string;
  tourType: string;
  slug: string;
  breadcrumbName: string;
}

export interface AirlineInfo {
  name: string;
  abbr: string;
}

// ===== MASTER INTERFACE =====
export interface TourLandingData {
  seo: SeoData;
  budgetBasePrice: number;
  premiumBasePrice: number;
  childDiscount: number;

  hero: HeroData;
  about: AboutData;
  video: VideoData;
  map: MapData;
  pricing: PricingData;
  earlyBooking: EarlyBookingData;
  finalCta: FinalCtaData;
  exitIntent: ExitIntentData;
  leadForm: LeadFormData;
  mobileStickyBar: MobileStickyBarData;

  hotelSubheading: string;
  gallerySubheading: string;
  faqSubheading: string;
  blogHeading: string;
  blogSubheading: string;

  departureDates: DepartureDate[];
  hotels: HotelInfo[];
  googleReviews: ReviewData[];
  comparisonFeatures: ComparisonFeature[];
  blogPlaces: BlogPlace[];
  testimonials: Testimonial[];
  galleryImages: GalleryImage[];
  includedItems: IncludedItem[];
  faqs: Faq[];
  socialProofMessages: string[];
  airlines: AirlineInfo[];
}

// ===== SHARED CONSTANTS =====
export const georgianMonths = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი",
];

export const georgianDays = ["ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ", "კვი"];

export function calculateTotalPrice(
  basePrice: number,
  adults: number,
  children: number,
  childDiscount: number = 0.5
): number {
  return basePrice * adults + Math.round(basePrice * childDiscount) * children;
}
