"use client";

/**
 * Film grain overlay — renders a fixed SVG feTurbulence noise filter over the
 * entire page at low opacity. This single effect is responsible for the
 * "printed / tactile" quality seen on high-end agency and luxury brand sites.
 */
export function GrainOverlay() {
  return (
    <>
      {/* Hidden SVG that defines the noise filter — referenced by id */}
      <svg
        aria-hidden
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter id="gls-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" />
          </filter>
        </defs>
      </svg>

      {/* The visible grain layer — covers everything, never blocks interaction */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9997,
          pointerEvents: "none",
          background: "white",
          filter: "url(#gls-grain)",
          opacity: 0.048,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
