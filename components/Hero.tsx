"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 md:hidden" aria-hidden>
          <Image
            src="/heromobile.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden md:block" aria-hidden>
          <Image
            src="/herodesktop.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Eén duidelijk verloop: beeld zichtbaar, tekst in paneel leesbaar */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-zinc-950/30"
          aria-hidden
        />
      </div>

      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl min-h-svh flex-col justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20"
      >
        <div
          className={cn(
            "w-full max-w-[min(100%,32rem)] md:max-w-lg",
            "rounded-2xl sm:rounded-3xl",
            "border border-white/10",
            "bg-zinc-950/65 backdrop-blur-xl",
            "p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          )}
        >
          <p className="hero-reveal animate-delay-100 text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
            u vraagt, wij plaatsen
          </p>
          <h1 className="hero-reveal animate-delay-200 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight text-balance mb-4">
            Comfort, stijl en bescherming —{" "}
            <span className="text-accent">op maat</span>
          </h1>
          <p className="hero-reveal animate-delay-300 text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 sm:mb-7 font-light">
            Rolluiken, screens en zonneschermen. Reparaties en ombouw naar
            elektrisch of solar. Snel geleverd, strak gemonteerd.
          </p>
          <div className="hero-reveal animate-delay-400 flex flex-col sm:flex-row gap-3 sm:gap-3">
            <QuoteFormModal>
              <Button
                size="lg"
                className={cn(
                  "w-full sm:w-auto h-12 sm:min-h-[3.25rem] px-6 sm:px-8",
                  "rounded-full bg-accent text-black font-bold",
                  "hover:bg-accent2 transition-all duration-300 hover:scale-[1.03]"
                )}
              >
                Gratis offerte
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </QuoteFormModal>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className={cn(
                "w-full sm:w-auto h-12 sm:min-h-[3.25rem] px-6 sm:px-8",
                "rounded-full border border-white/25 bg-white/5 text-white",
                "hover:bg-white/10 hover:text-white transition-all duration-300"
              )}
            >
              <Link href="/producten">Onze producten</Link>
            </Button>
          </div>
          <p className="hero-reveal animate-delay-500 mt-5 sm:mt-6 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-0.5 text-accent" aria-label="4,8 van 5 sterren">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={0}
                />
              ))}
            </span>
            <span className="text-zinc-500" aria-hidden>·</span>
            <span>4,8/5</span>
            <span className="text-zinc-500" aria-hidden>·</span>
            <span>500+ klanten</span>
          </p>
        </div>
      </div>
    </section>
  );
}
