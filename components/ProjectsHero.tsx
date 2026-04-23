"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { projects } from "@/lib/data";
import { useMemo } from "react";
import { MapPin, Award, Users, CheckCircle } from "lucide-react";

export function ProjectsHero() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  // Calculate stats
  const stats = useMemo(() => {
    const locations = new Set(projects.map(p => p.location));
    return {
      total: projects.length,
      locations: locations.size,
      satisfaction: 98,
    };
  }, []);

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-radial relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-accent2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-6">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <span className="text-text">Projecten</span>
          </nav>

          <div className="divider-accent mb-4" />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text mb-6">
            Onze <span className="text-accent">projecten</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted mb-8 max-w-2xl">
            Een selectie van recent uitgevoerde projecten in Gelderland en
            Brabant. Bekijk onze vakkundige installaties en laat u inspireren 
            voor uw eigen project.
          </p>

          {/* Stats */}
          <div 
            ref={ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12"
          >
            <StatCard
              icon={CheckCircle}
              value={stats.total}
              suffix="+"
              label="Projecten"
              isInView={isInView}
              delay={0}
            />
            <StatCard
              icon={MapPin}
              value={stats.locations}
              suffix="+"
              label="Locaties"
              isInView={isInView}
              delay={100}
            />
            <StatCard
              icon={Users}
              value={stats.satisfaction}
              suffix="%"
              label="Tevreden"
              isInView={isInView}
              delay={200}
            />
            <StatCard
              icon={Award}
              value={5}
              suffix=" jaar"
              label="Garantie"
              isInView={isInView}
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}

function StatCard({ icon: Icon, value, suffix, label, isInView, delay }: StatCardProps) {
  const count = useCountUp({
    end: value,
    duration: 2000,
    enabled: isInView,
  });

  return (
    <div 
      className="bg-panel border border-border rounded-2xl p-4 lg:p-6 text-center transition-all duration-500"
      style={{ 
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div className="text-2xl lg:text-3xl font-bold text-text">
        {count}{suffix}
      </div>
      <div className="text-xs lg:text-sm text-muted">{label}</div>
    </div>
  );
}
