"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { companyInfo } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactBlock() {
  return (
    <section className="py-10 sm:py-20 lg:py-28 relative overflow-hidden bg-diagonal-lines">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="bg-panel2 border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                <div className="divider-accent mb-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-3 sm:mb-4">
                  Contact
                </h2>
                <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8">
                  Interesse in zonwering? Neem gerust contact op voor een
                  vrijblijvend adviesgesprek of offerte. Wij helpen u graag.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Button asChild size="lg">
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Bel direct
                    </a>
                  </Button>
                  <Button variant="secondary" asChild size="lg">
                    <a href={`mailto:${companyInfo.email}`}>
                      <Mail className="mr-2 h-5 w-5" />
                      Mail ons
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-accent" />
                  Werkgebied: {companyInfo.region}
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-panel border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-text mb-6">
                  Contactgegevens
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-panel2 hover:bg-accent/10 transition-colors group"
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
                  </li>
                  <li>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-panel2 hover:bg-accent/10 transition-colors group"
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
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-xl bg-panel2">
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
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-text mb-3">
                    Openingstijden
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted">Ma - Vr</span>
                      <span className="text-text">{companyInfo.openingHours.weekdays}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted">Zaterdag</span>
                      <span className="text-text">{companyInfo.openingHours.saturday}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted">Zondag</span>
                      <span className="text-text">{companyInfo.openingHours.sunday}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
