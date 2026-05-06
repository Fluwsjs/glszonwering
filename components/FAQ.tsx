"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Wat kost een rolluik, screen of zonnescherm?",
    answer:
      "De prijs hangt af van het type product, de afmetingen en gekozen opties (bijv. elektrische bediening). Gemiddeld ligt de prijs voor een rolluik tussen €400 en €1200, screens tussen €300 en €800, en zonneschermen tussen €800 en €2500. Vraag een gratis offerte aan voor een exacte prijs.",
  },
  {
    id: "2",
    question: "Hoe lang duurt de montage?",
    answer:
      "De montage van een enkel rolluik of screen duurt gemiddeld 2-3 uur. Een zonnescherm neemt iets meer tijd in beslag, ongeveer 3-4 uur. Bij meerdere producten plannen we een volledige dag in. De exacte duur bespreken we bij de offerte.",
  },
  {
    id: "3",
    question: "Kan ik mijn bestaande rolluiken ombouwen naar elektrisch?",
    answer:
      "Ja, in de meeste gevallen is dit mogelijk. We kunnen uw handbediende rolluiken voorzien van een elektrische motor of zelfs een solar motor. Hiervoor is geen hak- of breekwerk nodig. Onze monteur bekijkt ter plaatse of ombouw mogelijk is.",
  },
  {
    id: "4",
    question: "Wat is het voordeel van een solar motor?",
    answer:
      "Een solar motor werkt volledig op zonne-energie en heeft geen bekabeling nodig. Dit betekent geen hak- of breekwerk, snelle montage, en geen extra elektriciteitskosten. De motor werkt ook bij bewolkt weer en heeft voldoende reserve voor weken zonder zon.",
  },
  {
    id: "5",
    question: "Welke garantie geven jullie?",
    answer:
      "Wij geven 5 jaar garantie op onze producten en 2 jaar op de montage. Voor elektrische motoren geldt de fabrieksgarantie van minimaal 5 jaar. Bij problemen komen we kosteloos langs om dit op te lossen.",
  },
  {
    id: "6",
    question: "Komen jullie ook bij mij in de buurt?",
    answer:
      "Wij zijn actief in heel Gelderland en Noord-Brabant. Steden waar we regelmatig komen zijn onder andere Nijmegen, Arnhem, Eindhoven, Den Bosch, Apeldoorn en omstreken. Twijfelt u? Neem contact op en we laten weten of we bij u kunnen komen.",
  },
  {
    id: "8",
    question: "Kan ik zonwering ook huren of leasen?",
    answer:
      "Op dit moment bieden wij geen huur- of lease-opties aan. Wel kunnen we u informeren over financieringsmogelijkheden bij grotere projecten. Neem contact op om de mogelijkheden te bespreken.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-10 sm:py-20 lg:py-28 bg-panel relative overflow-hidden bg-dot-grid">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <div className="divider-accent mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-2 sm:mb-4">
            Veelgestelde <span className="text-accent">vragen</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted">
            Antwoorden op de meest gestelde vragen over onze producten en
            diensten.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-panel2 border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium py-3.5 sm:py-5 hover:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted pb-3.5 sm:pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
