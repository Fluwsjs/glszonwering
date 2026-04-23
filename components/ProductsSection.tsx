"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ProductsSection() {
  // Show main 3 products (not solar motors)
  const mainProducts = products.filter((p) => p.category !== "solar");

  return (
    <section className="py-10 sm:py-20 lg:py-28 bg-panel relative overflow-hidden bg-dot-grid">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <div className="divider-accent mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-2 sm:mb-4">
            Onze <span className="text-accent">producten</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted">
            Kwaliteitszonwering voor elk type woning. Van rolluiken tot screens
            en zonneschermen — allemaal op maat gemaakt.
          </p>
        </AnimatedSection>

        {/* Products: lijst op mobiel, grid op desktop */}
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {mainProducts.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
