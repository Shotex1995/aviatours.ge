import ScrollReveal from "@/components/ui/ScrollReveal";
import MobileStickyBar from "@/components/MobileStickyBar";
import type { TourLandingData } from "@/data/tour-landing.types";

import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import AirlineLogos from "./AirlineLogos";
import HowItWorksSection from "./HowItWorksSection";
import AboutSection from "./AboutSection";
import IncludedSection from "./IncludedSection";
import PricingSection from "./PricingSection";
import ComparisonTable from "./ComparisonTable";
import EarlyBookingSection from "./EarlyBookingSection";
import TestimonialsSection from "./TestimonialsSection";
import FinalCtaSection from "./FinalCtaSection";
import BlogSection from "./BlogSection";
import InteractiveMap from "./InteractiveMap";
import GoogleReviews from "./GoogleReviews";

import VideoSection from "./VideoSection";
import GallerySection from "./GallerySection";
import FaqSection from "./FaqSection";
import LeadFormSection from "./LeadFormSection";
import PriceCalculator from "./PriceCalculator";
import AvailableDatesCalendar from "./AvailableDatesCalendar";
import HotelCarousel from "./HotelCarousel";
import SocialProofPopup from "./SocialProofPopup";
import ExitIntentPopup from "./ExitIntentPopup";

export default function TourLandingPage({ data }: { data: TourLandingData }) {
  return (
    <>
      <HeroSection hero={data.hero} slug={data.seo.slug} />
      <TrustBar />
      <AirlineLogos airlines={data.airlines} />

      <ScrollReveal><HowItWorksSection /></ScrollReveal>
      <ScrollReveal><AboutSection about={data.about} /></ScrollReveal>
      <ScrollReveal><IncludedSection includedItems={data.includedItems} /></ScrollReveal>
      <ScrollReveal><VideoSection video={data.video} /></ScrollReveal>
      <ScrollReveal><InteractiveMap map={data.map} /></ScrollReveal>
      <ScrollReveal><HotelCarousel hotels={data.hotels} subheading={data.hotelSubheading} /></ScrollReveal>
      <ScrollReveal><GallerySection galleryImages={data.galleryImages} subheading={data.gallerySubheading} /></ScrollReveal>
      <ScrollReveal><AvailableDatesCalendar departureDates={data.departureDates} /></ScrollReveal>
      <ScrollReveal><PricingSection pricing={data.pricing} /></ScrollReveal>
      <ScrollReveal><ComparisonTable comparisonFeatures={data.comparisonFeatures} budgetPrice={`${data.budgetBasePrice.toLocaleString()}₾`} premiumPrice={`${data.premiumBasePrice.toLocaleString()}₾`} /></ScrollReveal>
      <ScrollReveal><PriceCalculator departureDates={data.departureDates} budgetBasePrice={data.budgetBasePrice} premiumBasePrice={data.premiumBasePrice} tourName={data.seo.tourName} /></ScrollReveal>
      <ScrollReveal><EarlyBookingSection earlyBooking={data.earlyBooking} /></ScrollReveal>
      <ScrollReveal><TestimonialsSection testimonials={data.testimonials} /></ScrollReveal>
      <ScrollReveal><GoogleReviews googleReviews={data.googleReviews} /></ScrollReveal>
      <ScrollReveal><LeadFormSection leadForm={data.leadForm} /></ScrollReveal>
      <ScrollReveal><FaqSection faqs={data.faqs} subheading={data.faqSubheading} /></ScrollReveal>
      <ScrollReveal><BlogSection blogPlaces={data.blogPlaces} heading={data.blogHeading} subheading={data.blogSubheading} /></ScrollReveal>

      <FinalCtaSection finalCta={data.finalCta} />

      <SocialProofPopup messages={data.socialProofMessages} />
      <ExitIntentPopup exitIntent={data.exitIntent} />
      <MobileStickyBar price={data.mobileStickyBar.price} label="დაჯავშნე" href={data.mobileStickyBar.bookingUrl} />
    </>
  );
}
