import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { StatsCounter } from "@/components/StatsCounter";
import { ProductsSection } from "@/components/ProductsSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { SolarSection } from "@/components/SolarSection";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Steps } from "@/components/Steps";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ContactBlock } from "@/components/ContactBlock";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trust marquee strip */}
      <TrustStrip />

      {/* Stats */}
      <StatsCounter />

      {/* Products Section */}
      <ProductsSection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Solar Motors Section */}
      <SolarSection />

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Werkwijze / Steps Section */}
      <Steps />

      {/* Projects Section */}
      <ProjectsGrid />

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact CTA Section */}
      <ContactBlock />
    </>
  );
}
