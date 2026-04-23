"use client";

import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";
import { companyInfo } from "@/lib/data";

export function ProjectsCTA() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-gradient-to-br from-accent to-accent2 rounded-3xl p-8 lg:p-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  Wilt u ook zo&apos;n resultaat?
                </h2>
                <p className="text-black/80 mb-6 text-lg">
                  Vraag vandaag nog een gratis offerte aan en ontdek wat wij 
                  voor uw woning kunnen betekenen. Vrijblijvend advies en 
                  inmeting inbegrepen.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-black">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-medium">Snelle levering</span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm font-medium">5 jaar garantie</span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm font-medium">Persoonlijk advies</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteFormModal>
                    <Button 
                      size="lg" 
                      className="bg-black text-white hover:bg-black/90 group"
                    >
                      Gratis offerte aanvragen
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </QuoteFormModal>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-black text-black hover:bg-black/10"
                    asChild
                  >
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Bel {companyInfo.phone}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-black mb-2">4.8</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-black text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-black/80 text-sm">
                    Gemiddelde klantbeoordeling
                  </p>
                  <p className="text-black font-semibold mt-2">
                    500+ tevreden klanten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
