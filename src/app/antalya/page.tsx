import ScrollReveal from "@/components/ui/ScrollReveal";
import MobileStickyBar from "@/components/MobileStickyBar";

import HeroSection from "@/components/antalya/HeroSection";
import TrustBar from "@/components/antalya/TrustBar";
import AirlineLogos from "@/components/antalya/AirlineLogos";
import HowItWorksSection from "@/components/antalya/HowItWorksSection";
import AboutSection from "@/components/antalya/AboutSection";
import IncludedSection from "@/components/antalya/IncludedSection";
import PricingSection from "@/components/antalya/PricingSection";
import ComparisonTable from "@/components/antalya/ComparisonTable";
import EarlyBookingSection from "@/components/antalya/EarlyBookingSection";
import TestimonialsSection from "@/components/antalya/TestimonialsSection";
import FinalCtaSection from "@/components/antalya/FinalCtaSection";
import BlogSection from "@/components/antalya/BlogSection";
import InteractiveMap from "@/components/antalya/InteractiveMap";
import GoogleReviews from "@/components/antalya/GoogleReviews";

import VideoSection from "@/components/antalya/VideoSection";
import GallerySection from "@/components/antalya/GallerySection";
import FaqSection from "@/components/antalya/FaqSection";
import LeadFormSection from "@/components/antalya/LeadFormSection";
import PriceCalculator from "@/components/antalya/PriceCalculator";
import AvailableDatesCalendar from "@/components/antalya/AvailableDatesCalendar";
import HotelCarousel from "@/components/antalya/HotelCarousel";
import SocialProofPopup from "@/components/antalya/SocialProofPopup";
import ExitIntentPopup from "@/components/antalya/ExitIntentPopup";

export default function AntalyaLanding() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AirlineLogos />

      <ScrollReveal><HowItWorksSection /></ScrollReveal>
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><IncludedSection /></ScrollReveal>
      <ScrollReveal><VideoSection /></ScrollReveal>
      <ScrollReveal><InteractiveMap /></ScrollReveal>
      <ScrollReveal><HotelCarousel /></ScrollReveal>
      <ScrollReveal><GallerySection /></ScrollReveal>
      <ScrollReveal><AvailableDatesCalendar /></ScrollReveal>
      <ScrollReveal><PricingSection /></ScrollReveal>
      <ScrollReveal><ComparisonTable /></ScrollReveal>
      <ScrollReveal><PriceCalculator /></ScrollReveal>
      <ScrollReveal><EarlyBookingSection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><GoogleReviews /></ScrollReveal>
      <ScrollReveal><LeadFormSection /></ScrollReveal>
      <ScrollReveal><FaqSection /></ScrollReveal>
      <ScrollReveal><BlogSection /></ScrollReveal>

      <FinalCtaSection />

      <SocialProofPopup />
      <ExitIntentPopup />
      <MobileStickyBar price="1,550₾" label="დაჯავშნე" href="https://avia.ge/tours/antalya-tour/" />
    </>
  );
}
