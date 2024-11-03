import AboutSection from "../components/landing/about";
import GallerySection from "../components/landing/gallery";
import HeroSection from "../components/landing/hero-section/hero-section";
import PopularDestSection from "../components/landing/popular-destination";
import TestimonialSection from "../components/landing/testimonial";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="px-24">
        <PopularDestSection />
        <TestimonialSection/>
        <GallerySection/>
      </div>
    </>
  );
}
