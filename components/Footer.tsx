import Image from "next/image";
import Link from "next/link";
import { companyInfo, navigation, products } from "@/lib/data";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-panel border-t border-border overflow-hidden">
      {/* Mega brand wordmark — gives the footer scale and presence */}
      <div
        aria-hidden
        className="relative w-full overflow-hidden select-none pointer-events-none"
        style={{ lineHeight: 0.85 }}
      >
        <span
          className="block w-full text-right pr-4 sm:pr-8 text-white/[0.028]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(5rem, 22vw, 18rem)",
            letterSpacing: "-0.04em",
          }}
        >
          GLS.
        </span>
      </div>

      <div className="container mx-auto px-4 pb-8 sm:pb-12 lg:pb-16 -mt-4 sm:-mt-8 lg:-mt-16">

        {/* Mobile: gestapeld — Desktop: 4 kolommen */}
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:gap-12">

          {/* Merk + slogan + social */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="GLS Zonwering & Rolluiken - home">
              <Image
                src="/logogls.png"
                alt="GLS Zonwering & Rolluiken"
                width={300}
                height={90}
                className="h-10 w-auto max-w-[180px] object-contain object-left"
                sizes="180px"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">{companyInfo.slogan}</p>
            <div className="flex gap-3">
              <a
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-panel2 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-panel2 text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Producten + Navigatie naast elkaar op mobiel */}
          <div className="grid grid-cols-2 gap-6 sm:contents">
            <div>
              <h3 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">Producten</h3>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/producten/${product.slug}`}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">Navigatie</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>
                  {companyInfo.address.street}<br />
                  {companyInfo.address.postalCode} {companyInfo.address.city}
                </span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted">
                <strong className="text-text/70">Werkgebied:</strong>{" "}
                {companyInfo.region}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 pb-24 lg:pb-0">
          <p className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} {companyInfo.name}. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4 text-xs text-muted">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="hover:text-accent transition-colors">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
