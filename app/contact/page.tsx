import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met GLS Zonwering & Rolluiken voor een vrijblijvende offerte of advies. Wij zijn actief in Gelderland en Brabant.",
  openGraph: {
    title: "Contact | GLS Zonwering & Rolluiken",
    description:
      "Neem contact op voor een vrijblijvende offerte of advies.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-radial">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="divider-accent mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-text mb-6">
              <span className="text-accent">Contact</span> opnemen
            </h1>
            <p className="text-lg text-muted">
              Heeft u vragen of wilt u een vrijblijvende offerte? Neem gerust
              contact met ons op. Wij staan u graag te woord.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">
                Offerte aanvragen
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">
                Contactgegevens
              </h2>

              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 p-4 bg-panel border border-border rounded-2xl hover:border-accent/30 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Telefoon</p>
                    <p className="font-semibold text-text group-hover:text-accent transition-colors">
                      {companyInfo.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-panel border border-border rounded-2xl hover:border-accent/30 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">E-mail</p>
                    <p className="font-semibold text-text group-hover:text-accent transition-colors">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-panel border border-border rounded-2xl">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Adres</p>
                    <p className="font-semibold text-text">
                      {companyInfo.address.street}
                    </p>
                    <p className="text-sm text-muted">
                      {companyInfo.address.postalCode} {companyInfo.address.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-panel border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-text">Openingstijden</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-muted">Maandag - Vrijdag</span>
                    <span className="text-text font-medium">
                      {companyInfo.openingHours.weekdays}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted">Zaterdag</span>
                    <span className="text-text font-medium">
                      {companyInfo.openingHours.saturday}
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-muted">Zondag</span>
                    <span className="text-text font-medium">
                      {companyInfo.openingHours.sunday}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Region */}
              <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-2xl">
                <p className="text-sm text-accent font-semibold">
                  Werkgebied: {companyInfo.region}
                </p>
                <p className="text-xs text-muted mt-1">
                  Wij komen graag vrijblijvend bij u langs voor een inmeting en
                  advies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-panel border border-border rounded-2xl h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-muted">
                Hier kan een Google Maps integratie worden toegevoegd
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
