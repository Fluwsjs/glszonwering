"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { companyInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MessageCircle, Phone, FileText } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    // Toon direct als de gebruiker al gescrolld heeft (bijv. na navigatie)
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = companyInfo.phone.replace(/\s/g, "").replace(/^0/, "31");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hallo, ik heb interesse in zonwering en zou graag meer informatie willen."
  )}`;

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
          "bg-bg/95 backdrop-blur-md border-t border-border",
          "transition-transform duration-300",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex gap-2 p-2.5">
          <QuoteFormModal>
            <Button className="flex-1 h-12 text-sm rounded-xl gap-2">
              <FileText className="h-4 w-4 shrink-0" />
              Gratis offerte
            </Button>
          </QuoteFormModal>
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
            aria-label={`Bel ${companyInfo.phone}`}
            className={cn(
              "inline-flex items-center justify-center h-12 w-14 rounded-xl",
              "border border-border bg-panel2 text-text",
              "hover:border-accent/40 hover:text-accent transition-colors"
            )}
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
              "inline-flex items-center justify-center h-12 w-14 rounded-xl",
              "bg-[#25D366] text-white",
              "hover:bg-[#20BD5A] transition-colors"
            )}
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-40 hidden lg:flex items-center justify-center",
          "w-14 h-14 rounded-full bg-[#25D366] text-white",
          "shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
