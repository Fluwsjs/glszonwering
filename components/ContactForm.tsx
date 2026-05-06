"use client";

import { useState } from "react";
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

interface FormData {
  naam: string;
  telefoon: string;
  email: string;
  plaats: string;
  product: string;
  breedte: string;
  hoogte: string;
  bericht: string;
  honeypot: string;
}

interface FormErrors {
  naam?: string;
  telefoon?: string;
  email?: string;
  plaats?: string;
  product?: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    telefoon: "",
    email: "",
    plaats: "",
    product: "",
    breedte: "",
    hoogte: "",
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

    // Honeypot check
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, type: "contact" }),
    });

    setIsSubmitting(false);

    if (!res.ok) {
      alert("Er is iets misgegaan. Probeer het opnieuw of bel ons direct.");
      return;
    }

    setIsSuccess(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-panel border border-border rounded-2xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-text mb-2">Bedankt!</h3>
        <p className="text-muted">
          Wij hebben uw aanvraag ontvangen en nemen zo snel mogelijk contact met
          u op.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-panel border border-border rounded-2xl p-6 lg:p-8 space-y-6"
    >
      {/* Honeypot */}
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

      <div className="space-y-2">
        <Label htmlFor="naam">
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
          <p id="naam-error" className="text-sm text-red-500">
            {errors.naam}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telefoon">
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
            <p id="telefoon-error" className="text-sm text-red-500">
              {errors.telefoon}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
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
            <p id="email-error" className="text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="plaats">
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
            <p id="plaats-error" className="text-sm text-red-500">
              {errors.plaats}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="product">
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
            <p id="product-error" className="text-sm text-red-500">
              {errors.product}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Afmetingen (optioneel)</Label>
        <p className="text-xs text-muted">Heeft u al gemeten? Vul de breedte en hoogte in cm in.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="breedte" className="text-xs text-muted">Breedte (cm)</Label>
            <Input
              id="breedte"
              type="number"
              min="0"
              placeholder="bijv. 150"
              value={formData.breedte}
              onChange={(e) => handleChange("breedte", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hoogte" className="text-xs text-muted">Hoogte (cm)</Label>
            <Input
              id="hoogte"
              type="number"
              min="0"
              placeholder="bijv. 180"
              value={formData.hoogte}
              onChange={(e) => handleChange("hoogte", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bericht">Bericht (optioneel)</Label>
        <Textarea
          id="bericht"
          placeholder="Vertel ons meer over uw wensen, situatie of vragen..."
          value={formData.bericht}
          onChange={(e) => handleChange("bericht", e.target.value)}
          rows={5}
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verzenden...
          </>
        ) : (
          "Offerte aanvragen"
        )}
      </Button>

      <p className="text-xs text-muted text-center">
        Door dit formulier te verzenden gaat u akkoord met onze privacyverklaring.
      </p>
    </form>
  );
}
