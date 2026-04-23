"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { id: "customers", value: 500,  suffix: "+",    label: "Tevreden klanten" },
  { id: "projects",  value: 1200, suffix: "+",    label: "Projecten afgerond" },
  { id: "rating",    value: 4.8,  suffix: "/5",   label: "Gemiddelde beoordeling" },
  { id: "years",     value: 15,   suffix: " jaar", label: "Vakmanschap & ervaring" },
];

function StatItem({ stat, isInView, index }: { stat: Stat; isInView: boolean; index: number }) {
  const count = useCountUp({ end: stat.value, duration: 1800, enabled: isInView });
  const isDecimal = stat.value % 1 !== 0;
  const display = isDecimal ? stat.value.toFixed(1) : count;

  return (
    <div
      className={cn(
        "flex flex-col gap-1 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{
        transitionDelay: `${index * 120}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Number */}
      <div
        className="leading-none text-text tracking-tight"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        <span>{display}</span>
        <span className="text-accent">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-xs sm:text-sm text-muted uppercase tracking-[0.1em] font-medium">
        {stat.label}
      </p>

      {/* Accent line */}
      <div
        className={cn(
          "h-px bg-accent/40 transition-all duration-700 delay-300",
          isInView ? "w-8" : "w-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      />
    </div>
  );
}

export function StatsCounter() {
  const { ref, isInView } = useInView({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="py-10 sm:py-16 lg:py-20 border-b border-border bg-bg relative overflow-hidden"
    >
      {/* Subtle radial accent glow behind the numbers */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(244,124,32,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0 lg:divide-x lg:divide-border">
          {stats.map((stat, i) => (
            <div key={stat.id} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <StatItem stat={stat} isInView={isInView} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
