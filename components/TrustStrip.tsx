/**
 * Infinite-scroll marquee strip — signals credibility and regional authority
 * at a glance. Used by every premium brand site worth its salt.
 */

const items = [
  "500+ tevreden klanten",
  "Gelderland & Brabant",
  "15 jaar ervaring",
  "Gratis inmeting",
  "Vakkundige montage",
  "Solar motoren",
  "Nijmegen · Arnhem · Eindhoven",
  "Gratis offerte",
  "Rolluiken op maat",
  "Snel geleverd",
];

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block w-1 h-1 rounded-full bg-accent mx-6 sm:mx-8 shrink-0 translate-y-px"
    />
  );
}

function Track() {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center shrink-0 text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-muted whitespace-nowrap"
        >
          {item}
          <Dot />
        </span>
      ))}
    </>
  );
}

export function TrustStrip() {
  return (
    <div
      className="relative border-y border-border bg-panel overflow-hidden py-3.5"
      aria-label="Kenmerken van GLS Zonwering"
    >
      {/* Left + right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-panel to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-panel to-transparent pointer-events-none" />

      {/* The track is duplicated so the loop is seamless */}
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
