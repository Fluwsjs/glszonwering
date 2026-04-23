import type { Metadata } from "next";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { ContactBlock } from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Producten",
  description:
    "Bekijk ons complete assortiment zonweringsproducten: rolluiken, screens, zonneschermen en solar motoren. Allemaal op maat gemaakt voor uw woning.",
  openGraph: {
    title: "Producten | GLS Zonwering & Rolluiken",
    description:
      "Bekijk ons complete assortiment: rolluiken, screens, zonneschermen en solar motoren.",
  },
};

export default function ProductenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-radial">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="divider-accent mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6">
              Onze <span className="text-accent">producten</span>
            </h1>
            <p className="text-lg text-muted">
              Van rolluiken voor extra beveiliging tot screens voor een strak
              design. Ontdek ons complete assortiment en vind de perfecte
              zonwering voor uw woning.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} showFullDescription />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactBlock />
    </>
  );
}
