import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ProjectsHero } from "@/components/ProjectsHero";
import { ProjectsCTA } from "@/components/ProjectsCTA";
import { ContactBlock } from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk onze recent uitgevoerde projecten in Gelderland en Brabant. Van rolluiken tot screens en zonneschermen - ontdek wat wij voor u kunnen betekenen.",
  openGraph: {
    title: "Projecten | GLS Zonwering & Rolluiken",
    description:
      "Bekijk onze recent uitgevoerde projecten in Gelderland en Brabant.",
  },
};

export default function ProjectenPage() {
  return (
    <>
      {/* Hero */}
      <ProjectsHero />

      {/* Projects Grid with Filters */}
      <ProjectsGrid showAll showFilters showHeader={false} />

      {/* Mid-page CTA */}
      <ProjectsCTA />

      {/* Contact */}
      <ContactBlock />
    </>
  );
}
