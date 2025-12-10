import ServicesSection from "@/components/home/services-section";
import HeroCarousel from "@/components/home/hero-carousal";
import AboutSection from "@/components/home/about-section";
import ProductsSection from "@/components/home/product-section";
import CTA from "@/components/home/cta";
import ProductSpotlight from "@/components/home/product-spotlight";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main>
        <HeroCarousel />
        <AboutSection />
        <ProductSpotlight />
        <ProductsSection />
        <ServicesSection />
        <CTA />
      </main>
    </div>
  );
}
