"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectModal } from "@/components/ProjectModal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MapPin, ArrowRight, Search, SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectsGridProps {
  showAll?: boolean;
  showFilters?: boolean;
  showHeader?: boolean;
}

const categories = [
  { id: "all", label: "Alles", icon: "🏠" },
  { id: "rolluiken", label: "Rolluiken", icon: "🔒" },
  { id: "screens", label: "Screens", icon: "🪟" },
  { id: "zonneschermen", label: "Zonneschermen", icon: "☀️" },
  { id: "solar", label: "Solar", icon: "⚡" },
];

const categoryLabels: Record<string, string> = {
  rolluiken: "Rolluik",
  screens: "Screen",
  zonneschermen: "Zonnescherm",
  solar: "Solar",
};

export function ProjectsGrid({ 
  showAll = false, 
  showFilters = false,
  showHeader = true 
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "all" || project.category === activeFilter;
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFeatured = showAll ? true : project.featured;
      
      return matchesFilter && matchesSearch && matchesFeatured;
    });
  }, [activeFilter, searchQuery, showAll]);

  const displayedProjects = showAll 
    ? filteredProjects.slice(0, visibleCount) 
    : filteredProjects.slice(0, 6);

  const hasMore = showAll && visibleCount < filteredProjects.length;

  // Count projects per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <section id="projecten" className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Header */}
          {showHeader && (
            <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <div className="divider-accent mb-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3 sm:mb-4">
                  Onze <span className="text-accent">projecten</span>
                </h2>
                <p className="text-base sm:text-lg text-muted max-w-2xl">
                  Bekijk een selectie van onze recent uitgevoerde projecten in
                  Gelderland en Brabant.
                </p>
              </div>
              {!showAll && (
                <Button variant="secondary" asChild>
                  <Link href="/projecten">
                    Alle projecten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </AnimatedSection>
          )}

          {/* Filters & Search */}
          {showFilters && (
            <AnimatedSection delay={50} className="mb-6 sm:mb-8 space-y-4">
              {/* Search and View Toggle */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
                {/* Search */}
                <div className="relative flex-1 sm:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                  <input
                    type="text"
                    placeholder="Zoek op locatie of type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 sm:h-12 pl-11 pr-4 rounded-xl bg-panel border border-border text-text text-sm sm:text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* View Toggle - hidden on small mobile */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm text-muted hidden lg:inline">Weergave:</span>
                  <div className="flex bg-panel border border-border rounded-xl p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={cn(
                        "p-2 rounded-lg transition-colors touch-manipulation",
                        viewMode === "grid" 
                          ? "bg-accent text-black" 
                          : "text-muted hover:text-text"
                      )}
                      aria-label="Grid weergave"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("large")}
                      className={cn(
                        "p-2 rounded-lg transition-colors touch-manipulation",
                        viewMode === "large" 
                          ? "bg-accent text-black" 
                          : "text-muted hover:text-text"
                      )}
                      aria-label="Grote weergave"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filters - horizontally scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveFilter(category.id);
                      setVisibleCount(6);
                    }}
                    className={cn(
                      "px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 touch-manipulation",
                      activeFilter === category.id
                        ? "bg-accent text-black shadow-glow"
                        : "bg-panel border border-border text-muted hover:text-text hover:border-accent/30"
                    )}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                    <span className={cn(
                      "px-1.5 sm:px-2 py-0.5 rounded-full text-xs",
                      activeFilter === category.id
                        ? "bg-black/20"
                        : "bg-panel2"
                    )}>
                      {categoryCounts[category.id] || 0}
                    </span>
                  </button>
                ))}
              </div>

              {/* Results count */}
              <div className="flex items-center justify-between text-sm text-muted">
                <span>
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? "en" : ""} gevonden
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-accent hover:underline"
                  >
                    Wis zoekopdracht
                  </button>
                )}
              </div>
            </AnimatedSection>
          )}

          {/* Grid */}
          <div className={cn(
            "grid gap-4 sm:gap-6",
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 lg:grid-cols-2"
          )}>
            {displayedProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 75}>
                <ProjectCard 
                  project={project} 
                  viewMode={viewMode}
                  onClick={() => setSelectedProject(project)}
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Empty State */}
          {displayedProjects.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-panel2 flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  Geen projecten gevonden
                </h3>
                <p className="text-muted mb-6 max-w-md mx-auto">
                  We hebben geen projecten gevonden die aan uw zoekcriteria voldoen. 
                  Probeer een andere zoekterm of filter.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                >
                  Toon alle projecten
                </Button>
              </div>
            </AnimatedSection>
          )}

          {/* Load More */}
          {hasMore && (
            <AnimatedSection className="text-center mt-12">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleLoadMore}
              >
                Meer projecten laden
                <span className="ml-2 px-2 py-0.5 rounded-full bg-panel2 text-xs">
                  +{Math.min(6, filteredProjects.length - visibleCount)}
                </span>
              </Button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  viewMode: "grid" | "large";
  onClick: () => void;
}

function ProjectCard({ project, viewMode, onClick }: ProjectCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden group cursor-pointer h-full touch-manipulation",
        viewMode === "large" && "flex flex-col sm:flex-row"
      )}
      onClick={onClick}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden",
        viewMode === "grid" ? "aspect-[4/3]" : "aspect-[4/3] sm:aspect-auto sm:w-2/5"
      )}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={viewMode === "grid" 
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            : "(max-width: 768px) 100vw, 40vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />

        {/* Category tag */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 sm:px-3 py-1 rounded-full bg-accent/90 text-black text-xs font-semibold">
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Hover overlay - hidden on mobile */}
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
          <span className="px-4 py-2 rounded-xl bg-black/70 text-white text-sm font-medium">
            Bekijk project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        "p-4 sm:p-6",
        viewMode === "large" && "sm:flex-1 sm:flex sm:flex-col sm:justify-center"
      )}>
        <h3 className="text-base sm:text-lg font-bold text-text mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className={cn(
          "text-xs sm:text-sm text-muted mb-2 sm:mb-3",
          viewMode === "grid" ? "line-clamp-2" : "line-clamp-3"
        )}>
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted">
          <MapPin className="h-3 w-3 text-accent flex-shrink-0" />
          {project.location}
        </div>
        
        {viewMode === "large" && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
            <span className="inline-flex items-center text-sm text-accent font-medium group-hover:gap-2 transition-all">
              Bekijk details
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}
