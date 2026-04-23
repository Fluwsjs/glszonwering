"use client";

import { reviews, averageRating } from "@/lib/data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-10 sm:py-20 lg:py-28 bg-panel relative overflow-hidden bg-dot-grid">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-6 sm:mb-12 relative">
          {/* Ghost number for depth */}
          <span
            aria-hidden
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10rem] leading-none font-bold text-white/[0.025] select-none pointer-events-none"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
          >
            ★
          </span>
          <div className="divider-accent mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-2 sm:mb-4">
            Wat klanten <span className="text-accent">zeggen</span>
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 sm:h-6 sm:w-6 ${
                    star <= Math.round(averageRating)
                      ? "text-accent fill-accent"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg sm:text-2xl font-bold text-text" style={{ fontFamily: "var(--font-syne)" }}>
              {averageRating.toFixed(1)}
            </span>
            <span className="text-muted text-sm sm:text-base">/5</span>
          </div>
          <p className="text-xs sm:text-base text-muted">
            Gebaseerd op {reviews.length} beoordelingen
          </p>
        </AnimatedSection>

        {/* Mobile: horizontaal scroll — Desktop: grid */}
        <div className="-mx-4 sm:mx-0">
          <div className="flex gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-0 pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={review.id}
                className="snap-start shrink-0 w-[80vw] sm:w-auto sm:shrink"
              >
                <AnimatedSection delay={index * 100} className="h-full">
                  <div className="relative h-full flex flex-col bg-panel2 border border-border rounded-2xl p-4 sm:p-6">
                    <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 h-5 w-5 sm:h-8 sm:w-8 text-accent/20" />

                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                            star <= review.rating
                              ? "text-accent fill-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-text mb-4 line-clamp-4 sm:line-clamp-none flex-1">
                      {review.text}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-text leading-tight">
                          {review.name}
                        </p>
                        <p className="text-xs text-muted">{review.location}</p>
                      </div>
                      <span className="text-xs text-accent shrink-0 ml-2">
                        {review.product}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
          {/* Scroll indicatoren (mobile only) */}
          <div className="flex justify-center gap-1.5 mt-3 sm:hidden">
            {reviews.slice(0, 3).map((_, i) => (
              <span
                key={i}
                className="block h-1.5 w-1.5 rounded-full bg-border first:bg-accent"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
