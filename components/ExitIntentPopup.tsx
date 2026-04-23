"use client";

import { useExitIntent } from "@/hooks/useExitIntent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { Gift, ArrowRight, X } from "lucide-react";

export function ExitIntentPopup() {
  const { showPopup, closePopup } = useExitIntent();

  return (
    <Dialog open={showPopup} onOpenChange={(open) => !open && closePopup()}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-lg p-1 text-muted hover:text-text transition-colors"
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center pt-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
            <Gift className="h-8 w-8 text-accent" />
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl text-center">
              Wacht even!
            </DialogTitle>
            <DialogDescription className="text-center text-base mt-2">
              Ontvang een <span className="text-accent font-semibold">gratis adviesgesprek</span> en
              ontdek welke zonwering het beste bij uw woning past.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 p-4 bg-panel rounded-xl border border-border">
            <p className="text-sm text-muted mb-1">Exclusief aanbod</p>
            <p className="text-lg font-bold text-text">
              Gratis inmeting t.w.v. €75,-
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <QuoteFormModal>
              <Button className="w-full group" size="lg" onClick={closePopup}>
                Ja, ik wil gratis advies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </QuoteFormModal>
            <button
              onClick={closePopup}
              className="w-full py-2 text-sm text-muted hover:text-text transition-colors"
            >
              Nee bedankt, ik heb geen interesse
            </button>
          </div>

          <p className="text-xs text-muted mt-4">
            * Geldig voor aanvragen in Gelderland en Brabant
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
