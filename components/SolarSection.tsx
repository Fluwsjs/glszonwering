"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";

export function SolarSection() {
  const features = [
    "Snelle, schone montage zonder hak- of breekwerk",
    "Bediening met afstandsbediening of smartphone",
    "Energiezuinig en onderhoudsarm",
    "Smart home compatible",
  ];

  return (
    <section className="py-10 sm:py-20 lg:py-28 bg-bg relative overflow-hidden bg-diagonal-lines">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-right" className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-panel2">
              <Image
                src="/solarmotorset.jpg"
                alt="Solar motor met zonnepaneel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" className="order-1 lg:order-2">
            <div className="divider-accent mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4">
              Solar motoren:{" "}
              <span className="text-accent">draadloos gemak</span>
            </h2>
            <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8">
              Elektrische bediening van uw zonwering zonder bekabeling. Het
              ingebouwde zonnepaneel laadt de accu op, waardoor uw rolluik of
              screen volledig autonoom werkt. Ideaal voor renovatie of
              situaties waar bekabeling lastig is.
            </p>

            {/* Features */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base text-text"
                >
                  <div className="p-1 rounded-full bg-accent/20 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Callout */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-accent font-semibold">
                Geen bedrading nodig aan de binnenzijde
              </p>
              <p className="text-sm text-muted mt-1">
                Uw interieur blijft onaangetast. Geen kabels, geen
                wandcontactdozen, geen rommel.
              </p>
            </div>

            <QuoteFormModal defaultProduct="solar-motoren">
              <Button size="lg" className="group">
                Vraag offerte aan
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </QuoteFormModal>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
