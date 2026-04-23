import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { ContactBlock } from "@/components/ContactBlock";
import { Check, ArrowRight, ArrowLeft, MapPin } from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product niet gevonden",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | GLS Zonwering & Rolluiken`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.category === product.category)
    .slice(0, 3);

  // Get other products
  const otherProducts = products.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-24 lg:pt-28">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/producten" className="hover:text-accent transition-colors">
              Producten
            </Link>
            <span>/</span>
            <span className="text-text">{product.title}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${product.title} foto ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 17vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="divider-accent mb-4" />
              <h1 className="text-3xl lg:text-4xl font-bold text-accent mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-muted mb-8">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-text mb-4">
                  Kenmerken
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-text"
                    >
                      <div className="p-1 rounded-full bg-accent/20 mt-0.5">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8 p-6 bg-panel rounded-2xl border border-border">
                <h2 className="text-lg font-semibold text-text mb-4">
                  Voordelen
                </h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted"
                    >
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteFormModal defaultProduct={product.slug}>
                  <Button size="lg" className="group">
                    Offerte aanvragen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </QuoteFormModal>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Contact opnemen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-20 bg-panel">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="divider-accent mb-4" />
                <h2 className="text-2xl lg:text-3xl font-bold text-text">
                  Gerelateerde projecten
                </h2>
              </div>
              <Button variant="ghost" asChild>
                <Link href="/projecten">
                  Alle projecten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <MapPin className="h-3 w-3 text-accent" />
                      {project.location}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Products */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="divider-accent mb-4" />
              <h2 className="text-2xl lg:text-3xl font-bold text-text">
                Andere producten
              </h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/producten">
                Alle producten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((otherProduct) => (
              <Card key={otherProduct.id} className="overflow-hidden group">
                <Link href={`/producten/${otherProduct.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={otherProduct.image}
                      alt={otherProduct.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-accent mb-2 group-hover:text-accent2 transition-colors">
                      {otherProduct.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {otherProduct.shortDescription}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back button */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild>
            <Link href="/producten">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar producten
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <ContactBlock />
    </>
  );
}
