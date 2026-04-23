"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/lib/data";
import { validateEmail, validatePhone } from "@/lib/utils";
import { CheckCircle, Loader2 } from "lucide-react";

interface QuoteFormModalProps {
  children: React.ReactNode;
  defaultProduct?: string;
}

interface FormData {
  naam: string;
  telefoon: string;
  email: string;
  plaats: string;
  product: string;
  bericht: string;
  honeypot: string; // Spam protection
}

interface FormErrors {
  naam?: string;
  telefoon?: string;
  email?: string;
  plaats?: string;
  product?: string;
  bericht?: string;
}

export function QuoteFormModal({
  children,
  defaultProduct = "",
}: QuoteFormModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    telefoon: "",
    email: "",
    plaats: "",
    product: defaultProduct,
    bericht: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.naam.trim()) {
      newErrors.naam = "Vul uw naam in";
    }

    if (!formData.telefoon.trim()) {
      newErrors.telefoon = "Vul uw telefoonnummer in";
    } else if (!validatePhone(formData.telefoon)) {
      newErrors.telefoon = "Vul een geldig telefoonnummer in";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vul uw e-mailadres in";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in";
    }

    if (!formData.plaats.trim()) {
      newErrors.plaats = "Vul uw plaats in";
    }

    if (!formData.product) {
      newErrors.product = "Selecteer een product";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log form data (replace with actual API call)
    console.log("Form submitted:", {
      naam: formData.naam,
      telefoon: formData.telefoon,
      email: formData.email,
      plaats: formData.plaats,
      product: formData.product,
      bericht: formData.bericht,
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setOpen(false);
      setFormData({
        naam: "",
        telefoon: "",
        email: "",
        plaats: "",
        product: defaultProduct,
        bericht: "",
        honeypot: "",
      });
    }, 3000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto mx-3 sm:mx-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 sm:py-8 text-center">
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-accent mb-3 sm:mb-4" />
            <DialogTitle className="text-xl sm:text-2xl mb-2">Bedankt!</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Wij nemen zo snel mogelijk contact met u op.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl">Gratis offerte aanvragen</DialogTitle>
              <DialogDescription className="text-sm">
                Vul het formulier in en wij nemen binnen 24 uur contact met u op.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => handleChange("honeypot", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="naam" className="text-sm">
                  Naam <span className="text-accent">*</span>
                </Label>
                <Input
                  id="naam"
                  placeholder="Uw volledige naam"
                  value={formData.naam}
                  onChange={(e) => handleChange("naam", e.target.value)}
                  aria-invalid={!!errors.naam}
                  aria-describedby={errors.naam ? "naam-error" : undefined}
                />
                {errors.naam && (
                  <p id="naam-error" className="text-xs sm:text-sm text-red-500">
                    {errors.naam}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="telefoon" className="text-sm">
                    Telefoon <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="telefoon"
                    type="tel"
                    placeholder="06 12345678"
                    value={formData.telefoon}
                    onChange={(e) => handleChange("telefoon", e.target.value)}
                    aria-invalid={!!errors.telefoon}
                    aria-describedby={errors.telefoon ? "telefoon-error" : undefined}
                  />
                  {errors.telefoon && (
                    <p id="telefoon-error" className="text-xs sm:text-sm text-red-500">
                      {errors.telefoon}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    E-mail <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="uw@email.nl"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs sm:text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="plaats" className="text-sm">
                    Plaats <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="plaats"
                    placeholder="Uw woonplaats"
                    value={formData.plaats}
                    onChange={(e) => handleChange("plaats", e.target.value)}
                    aria-invalid={!!errors.plaats}
                    aria-describedby={errors.plaats ? "plaats-error" : undefined}
                  />
                  {errors.plaats && (
                    <p id="plaats-error" className="text-xs sm:text-sm text-red-500">
                      {errors.plaats}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="product" className="text-sm">
                    Product <span className="text-accent">*</span>
                  </Label>
                  <Select
                    value={formData.product}
                    onValueChange={(value) => handleChange("product", value)}
                  >
                    <SelectTrigger
                      id="product"
                      aria-invalid={!!errors.product}
                      aria-describedby={errors.product ? "product-error" : undefined}
                    >
                      <SelectValue placeholder="Kies een product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.slug}>
                          {product.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="anders">Anders / Weet ik niet</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.product && (
                    <p id="product-error" className="text-xs sm:text-sm text-red-500">
                      {errors.product}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="bericht" className="text-sm">Bericht (optioneel)</Label>
                <Textarea
                  id="bericht"
                  placeholder="Vertel ons meer over uw wensen..."
                  value={formData.bericht}
                  onChange={(e) => handleChange("bericht", e.target.value)}
                  rows={3}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 sm:h-12"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verzenden...
                  </>
                ) : (
                  "Offerte aanvragen"
                )}
              </Button>

              <p className="text-xs text-muted text-center px-4">
                Door dit formulier te verzenden gaat u akkoord met onze
                privacyverklaring.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
