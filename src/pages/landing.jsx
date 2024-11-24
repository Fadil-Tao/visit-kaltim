import AnimatedLayout from "@/layout/animated-layout";
import AboutSection from "../components/landing/about";
import GallerySection from "../components/landing/gallery";
import HeroSection from "../components/landing/hero-section/hero-section";
import PopularDestSection from "../components/landing/popular-destination";
import TestimonialSection from "../components/landing/testimonial";

export default function Landing() {
  return (
    <>
      <AnimatedLayout>
        <HeroSection />
        <AboutSection />
        <div className="px-5 sm:px-24">
          <PopularDestSection />
          <TestimonialSection />
          <GallerySection />
        </div>
      </AnimatedLayout>
    </>
  );
}
