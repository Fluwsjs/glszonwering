"use client";

import { steps } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Ruler, FileText, Wrench, ShieldCheck } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Ruler,
  FileText,
  Wrench,
  ShieldCheck,
};

export function Steps() {
  return (
    <section id="werkwijze" className="py-10 sm:py-20 lg:py-28 bg-bg relative overflow-hidden bg-diagonal-lines">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-6 sm:mb-16">
          <div className="divider-accent mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-2 sm:mb-4">
            U vraagt, <span className="text-accent">wij plaatsen</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted">
            Van eerste contact tot nazorg — wij begeleiden u door het hele
            proces met persoonlijke aandacht.
          </p>
        </AnimatedSection>

        {/* Mobile: verticale tijdlijn — Desktop: 4-koloms grid */}
        <div className="flex flex-col gap-0 sm:hidden">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Ruler;
            const isLast = index === steps.length - 1;
            return (
              <AnimatedSection key={step.id} delay={index * 80} className="flex gap-4">
                {/* Tijdlijn kolom */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-black text-sm font-bold shrink-0">
                    {step.id}
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-border mt-1 mb-1 min-h-[2rem]" />
                  )}
                </div>
                {/* Content */}
                <div className={`pb-5 flex-1 ${isLast ? "" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4 text-accent shrink-0" />
                    <h3 className="text-sm font-bold text-text">{step.title}</h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Desktop: 4-koloms grid met connector */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Ruler;
            return (
              <AnimatedSection
                key={step.id}
                delay={index * 100}
                className="relative group"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+44px)] w-[calc(100%-88px)] h-px bg-border" />
                )}
                <div className="bg-panel2 border border-border rounded-2xl p-6 text-center hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden">
                  {/* Large ghost number as decorative background element */}
                  <span
                    aria-hidden
                    className="absolute -top-3 -right-1 font-display font-800 text-8xl leading-none text-white/[0.03] select-none pointer-events-none"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
                  >
                    {step.id}
                  </span>
                  {/* Step badge */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-black text-xs font-bold mb-4">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
