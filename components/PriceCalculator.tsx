"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Calculator, ArrowRight, Info } from "lucide-react";

interface PriceRange {
  min: number;
  max: number;
}

type ProductType = "rolluiken" | "screens" | "zonneschermen";
type OperationType = "handmatig" | "elektrisch" | "solar";

const basePrices: Record<ProductType, PriceRange> = {
  rolluiken: { min: 350, max: 450 },
  screens: { min: 280, max: 380 },
  zonneschermen: { min: 600, max: 900 },
};

const operationPrices: Record<OperationType, number> = {
  handmatig: 0,
  elektrisch: 150,
  solar: 250,
};

const sizeMultipliers = {
  small: 0.8, // < 1.5m²
  medium: 1, // 1.5-3m²
  large: 1.3, // 3-5m²
  xlarge: 1.6, // > 5m²
};

export function PriceCalculator() {
  const [product, setProduct] = useState<ProductType | "">("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [operation, setOperation] = useState<OperationType | "">("");
  const [quantity, setQuantity] = useState<string>("1");

  const priceEstimate = useMemo(() => {
    if (!product || !width || !height || !operation) return null;

    const w = parseFloat(width) / 100; // cm to m
    const h = parseFloat(height) / 100;
    const area = w * h;
    const qty = parseInt(quantity) || 1;

    // Determine size category
    let sizeMultiplier = sizeMultipliers.medium;
    if (area < 1.5) sizeMultiplier = sizeMultipliers.small;
    else if (area > 5) sizeMultiplier = sizeMultipliers.xlarge;
    else if (area > 3) sizeMultiplier = sizeMultipliers.large;

    const basePrice = basePrices[product];
    const opPrice = operationPrices[operation];

    // Calculate per unit
    const minPerUnit = Math.round(
      (basePrice.min * sizeMultiplier + opPrice) * (area > 1 ? area * 0.7 : 1)
    );
    const maxPerUnit = Math.round(
      (basePrice.max * sizeMultiplier + opPrice) * (area > 1 ? area * 0.7 : 1)
    );

    // Apply quantity discount
    const discount = qty >= 5 ? 0.9 : qty >= 3 ? 0.95 : 1;

    return {
      min: Math.round(minPerUnit * qty * discount),
      max: Math.round(maxPerUnit * qty * discount),
      perUnit: { min: minPerUnit, max: maxPerUnit },
      area: area.toFixed(2),
      hasDiscount: discount < 1,
    };
  }, [product, width, height, operation, quantity]);

  const isComplete = product && width && height && operation;

  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Form */}
          <AnimatedSection>
            <div className="divider-accent mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3 sm:mb-4">
              Prijs <span className="text-accent">calculator</span>
            </h2>
            <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8">
              Krijg direct een indicatie van de kosten. Vul de gegevens in en
              zie de geschatte prijs.
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="calc-product">Product type</Label>
                <Select
                  value={product}
                  onValueChange={(v) => setProduct(v as ProductType)}
                >
                  <SelectTrigger id="calc-product">
                    <SelectValue placeholder="Kies een product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rolluiken">Rolluiken</SelectItem>
                    <SelectItem value="screens">Screens</SelectItem>
                    <SelectItem value="zonneschermen">Zonneschermen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calc-width">Breedte (cm)</Label>
                  <Input
                    id="calc-width"
                    type="number"
                    placeholder="bijv. 150"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    min="50"
                    max="600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calc-height">Hoogte (cm)</Label>
                  <Input
                    id="calc-height"
                    type="number"
                    placeholder="bijv. 200"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    min="50"
                    max="400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calc-operation">Bediening</Label>
                <Select
                  value={operation}
                  onValueChange={(v) => setOperation(v as OperationType)}
                >
                  <SelectTrigger id="calc-operation">
                    <SelectValue placeholder="Kies bediening" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="handmatig">Handbediend</SelectItem>
                    <SelectItem value="elektrisch">Elektrisch</SelectItem>
                    <SelectItem value="solar">Solar motor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calc-quantity">Aantal</Label>
                <Input
                  id="calc-quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  max="20"
                />
                {parseInt(quantity) >= 3 && (
                  <p className="text-xs text-accent">
                    Korting bij {parseInt(quantity) >= 5 ? "5+" : "3+"} stuks inbegrepen!
                  </p>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Result */}
          <AnimatedSection delay={100}>
            <div className="bg-panel border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/20">
                  <Calculator className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    Prijsindicatie
                  </h3>
                  <p className="text-sm text-muted">Excl. montage</p>
                </div>
              </div>

              {priceEstimate ? (
                <>
                  <div className="text-center py-4 sm:py-6 border-y border-border">
                    <p className="text-sm text-muted mb-2">Geschatte prijs</p>
                    <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-accent">
                      €{priceEstimate.min.toLocaleString()} - €
                      {priceEstimate.max.toLocaleString()}
                    </p>
                    {parseInt(quantity) > 1 && (
                      <p className="text-sm text-muted mt-2">
                        (€{priceEstimate.perUnit.min} - €{priceEstimate.perUnit.max}{" "}
                        per stuk)
                      </p>
                    )}
                    {priceEstimate.hasDiscount && (
                      <p className="text-sm text-accent mt-1">
                        Inclusief kwantumkorting
                      </p>
                    )}
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Oppervlakte</span>
                      <span className="text-text">{priceEstimate.area} m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Aantal</span>
                      <span className="text-text">{quantity}x</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-panel2 rounded-xl flex items-start gap-3">
                    <Info className="h-5 w-5 text-muted flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted">
                      Dit is een indicatie. De exacte prijs hangt af van de
                      situatie ter plaatse, kleurkeuze en extra opties. Vraag
                      een gratis offerte aan voor een nauwkeurige prijs.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted">
                    Vul alle velden in om een prijsindicatie te zien
                  </p>
                </div>
              )}

              <div className="mt-6">
                <QuoteFormModal defaultProduct={product || undefined}>
                  <Button
                    className="w-full group"
                    size="lg"
                    disabled={!isComplete}
                  >
                    Exacte offerte aanvragen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </QuoteFormModal>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
