"use client";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { AnimatedSection } from "@/components/AnimatedSection";

export function BeforeAfterSection() {
  return (
    <section className="py-10 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection className="order-2 lg:order-1">
            <div className="divider-accent mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3 sm:mb-4">
              Het verschil <span className="text-accent">zien</span>
            </h2>
            <p className="text-base sm:text-lg text-muted mb-4 sm:mb-6">
              Ontdek hoe zonwering uw woning transformeert. Sleep de slider om
              het verschil te zien tussen een woning zonder en met professionele
              zonwering.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Verhoogde privacy en veiligheid",
                "Betere temperatuurregulatie",
                "Lagere energiekosten",
                "Moderne uitstraling",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-text">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Slider */}
          <AnimatedSection delay={100} animation="fade-left" className="order-1 lg:order-2">
            <BeforeAfterSlider
              beforeImage="/placeholders/before.svg"
              afterImage="/placeholders/after.svg"
              beforeLabel="Zonder zonwering"
              afterLabel="Met zonwering"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
