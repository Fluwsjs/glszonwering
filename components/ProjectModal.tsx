"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/QuoteFormModal";
import { MapPin, Calendar, ArrowRight, X } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryLabels: Record<string, string> = {
  rolluiken: "Rolluiken",
  screens: "Screens",
  zonneschermen: "Zonneschermen",
  solar: "Solar Motoren",
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 mx-3 sm:mx-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-manipulation"
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent text-black text-xs sm:text-sm font-semibold">
              {categoryLabels[project.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <DialogHeader className="text-left mb-4 sm:mb-6">
            <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-text">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Recent uitgevoerd</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-text mb-2 sm:mb-3">
              Over dit project
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mt-3 sm:mt-4">
              Dit project is uitgevoerd in {project.location} en omvatte de levering 
              en montage van hoogwaardige {categoryLabels[project.category].toLowerCase()}. 
              Onze monteurs hebben het werk vakkundig en netjes afgerond, met oog voor 
              detail en de wensen van de klant.
            </p>
          </div>

          {/* Features */}
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-panel2 rounded-xl">
            <h4 className="text-sm font-semibold text-text mb-2 sm:mb-3">
              Uitgevoerde werkzaamheden
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {[
                "Gratis inmeting ter plaatse",
                "Advies op maat",
                "Vakkundige montage",
                "Uitleg bediening",
                "Garantie op product en montage",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <QuoteFormModal defaultProduct={project.category}>
              <Button className="flex-1 group" size="lg">
                Vergelijkbaar project aanvragen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </QuoteFormModal>
            <Button variant="secondary" size="lg" onClick={onClose}>
              Sluiten
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
