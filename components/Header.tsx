"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { navigation, companyInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const onHomeHero = pathname === "/" && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}
    >
      {/* Gradient accent hairline — only visible when scrolled */}
      <div
        aria-hidden
        className={cn(
          "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: "linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent2) 70%, transparent 100%)",
          opacity: isScrolled ? 0.35 : 0,
        }}
      />
      <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
          {/* Logo — merk in header, hero zonder tweede logo; schaduw op foto leesbaar */}
          <Link
            href="/"
            className="flex items-center shrink-0 -my-1"
            aria-label="GLS Zonwering & Rolluiken - home"
          >
            <Image
              src="/logogls.png"
              alt="GLS Zonwering & Rolluiken"
              width={2508}
              height={627}
              className="h-16 w-auto sm:h-20 lg:h-24 object-contain object-left max-w-[min(60vw,16rem)] sm:max-w-[22rem] lg:max-w-[30rem]"
              style={{
                filter: onHomeHero
                  ? "drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 2px 8px rgba(0,0,0,0.9))"
                  : "drop-shadow(0 1px 3px rgba(0,0,0,0.25))",
              }}
              priority
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 22rem, 30rem"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hoofdnavigatie">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide relative py-2 nav-link transition-colors",
                    isActive
                      ? "text-accent"
                      : onHomeHero
                        ? "text-white/90 hover:text-white"
                        : "text-text hover:text-accent"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm transition-colors hover:text-accent",
                onHomeHero ? "text-white/85" : "text-muted"
              )}
              aria-label={`Bel ons: ${companyInfo.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span>{companyInfo.phone}</span>
            </a>
            <QuoteFormModal>
              <Button>Gratis offerte</Button>
            </QuoteFormModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-3 -mr-2 transition-colors touch-manipulation hover:text-accent",
              onHomeHero ? "text-white" : "text-text"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 sm:top-24 z-40 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-panel border-b border-border transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2" aria-label="Mobiele navigatie">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "bg-panel2 text-accent"
                    : "text-text hover:bg-panel2 hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-panel2 text-text hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{companyInfo.phone}</span>
              </a>
              <QuoteFormModal>
                <Button className="w-full" size="lg">
                  Gratis offerte
                </Button>
              </QuoteFormModal>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
