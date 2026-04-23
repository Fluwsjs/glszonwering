import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { Check, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  showFullDescription?: boolean;
}

export function ProductCard({ product, showFullDescription = false }: ProductCardProps) {
  return (
    <>
      {/* ── Mobile: compact horizontal card ─────────────────────────────── */}
      <div
        className={cn(
          "sm:hidden group flex flex-row h-36 rounded-2xl overflow-hidden border border-border bg-panel2",
          "hover:border-accent/30 transition-all duration-300"
        )}
      >
        <div className="relative w-32 shrink-0 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="128px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-panel2/60" />
        </div>
        <div className="flex flex-1 flex-col p-3 min-w-0">
          <h3 className="text-base font-bold text-text mb-0.5 leading-tight">{product.title}</h3>
          <p className="text-xs text-muted line-clamp-2 mb-auto">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <QuoteFormModal defaultProduct={product.slug}>
              <Button size="sm" className="h-8 px-3 text-xs rounded-full btn-shimmer">
                Offerte
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </QuoteFormModal>
            <Button variant="ghost" size="sm" asChild className="h-8 px-3 text-xs rounded-full text-muted">
              <Link href={`/producten/${product.slug}`}>Info</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Desktop: editorial full-bleed card ──────────────────────────── */}
      <div
        className={cn(
          "hidden sm:flex group relative flex-col rounded-2xl overflow-hidden border border-border",
          "hover:border-accent/40 transition-all duration-500 hover:-translate-y-1",
          "shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
        )}
        style={{ aspectRatio: "3/4" }}
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Dark scrim — heavy at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/10" />

        {/* Category tag — top left */}
        <div className="relative z-10 p-5">
          <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-accent/90 bg-black/30 backdrop-blur-sm border border-accent/20 rounded-full px-3 py-1">
            {product.category === "solar" ? "Solar" : "Zonwering"}
          </span>
        </div>

        {/* Content floating at the bottom */}
        <div className="relative z-10 mt-auto p-5">
          <h3
            className="text-xl lg:text-2xl font-bold text-white mb-1.5 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {product.title}
          </h3>
          <p className="text-sm text-zinc-300/80 mb-4 line-clamp-2 font-light leading-relaxed">
            {showFullDescription ? product.description : product.shortDescription}
          </p>

          {/* Features — animated reveal on hover */}
          <ul className="mb-4 space-y-1.5 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                <Check className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <QuoteFormModal defaultProduct={product.slug}>
              <Button
                size="sm"
                className="h-9 px-4 text-xs rounded-full btn-shimmer"
              >
                Gratis offerte
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </QuoteFormModal>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-9 px-4 text-xs rounded-full text-white/70 hover:text-white hover:bg-white/10"
            >
              <Link href={`/producten/${product.slug}`}>Meer info</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
