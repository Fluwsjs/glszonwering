"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cookie, X } from "lucide-react";

const COOKIE_NAME = "cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_NAME);
    if (!consent) {
      // Small delay before showing
      const timeout = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, "accepted");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_NAME, "declined");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50 p-4 transition-all duration-300",
        "bottom-[72px] lg:bottom-0",
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
    >
      <div className="container mx-auto">
        <div className="bg-panel border border-border rounded-2xl p-4 lg:p-6 shadow-card">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Icon and text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="p-2 rounded-xl bg-accent/20 flex-shrink-0">
                <Cookie className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">
                  Wij gebruiken cookies
                </h3>
                <p className="text-sm text-muted">
                  Deze website gebruikt cookies om uw ervaring te verbeteren en om
                  websiteverkeer te analyseren. Door op &quot;Accepteren&quot; te
                  klikken, gaat u akkoord met het gebruik van alle cookies.{" "}
                  <a
                    href="/privacy"
                    className="text-accent hover:underline"
                  >
                    Meer informatie
                  </a>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDecline}
                className="text-muted hover:text-text"
              >
                Weigeren
              </Button>
              <Button size="sm" onClick={handleAccept}>
                Accepteren
              </Button>
            </div>

            {/* Close button (mobile) */}
            <button
              onClick={handleDecline}
              className="absolute top-2 right-2 lg:hidden p-2 text-muted hover:text-text transition-colors"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
