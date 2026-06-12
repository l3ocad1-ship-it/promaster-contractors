/**
 * PortfolioSection — Pro Master Contractors
 * Clean masonry gallery — no filter tabs, just a service badge on each photo.
 * TO REPLACE WITH REAL CLIENT PHOTOS: update the `src` URLs in the PHOTOS array.
 * Cream background, navy + emerald palette. Roboto headings, DM Sans body.
 */
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { Lang } from "@/pages/Home";

const BADGE_COLORS: Record<string, string> = {
  water:   "#1A4B84",
  carpet:  "#1B6B3A",
  remodel: "#7A4F1E",
  airduct: "#2E5F6E",
};

const BADGE_LABELS = {
  en: { water: "Water Damage", carpet: "Carpet Care", remodel: "Remodeling", airduct: "Air Ducts" },
  es: { water: "Daño por Agua", carpet: "Alfombras", remodel: "Remodelación", airduct: "Ductos" },
};

const PHOTOS = [
  {
    id: 1, cat: "water",
    src: `${import.meta.env.BASE_URL}images/water-damage-restoration-dallas-fort-worth.webp`,
    caption: { en: "Water Damage Restoration", es: "Restauración por Daño de Agua" },
  },
  {
    id: 2, cat: "remodel",
    src: `${import.meta.env.BASE_URL}images/commercial-remodeling-dfw.webp`,
    caption: { en: "Commercial Remodeling", es: "Remodelación Comercial" },
  },
  {
    id: 3, cat: "remodel",
    src: `${import.meta.env.BASE_URL}images/kitchen-restoration-dfw.webp`,
    caption: { en: "Kitchen Restoration", es: "Restauración de Cocina" },
  },
  {
    id: 4, cat: "carpet",
    src: `${import.meta.env.BASE_URL}images/professional-carpet-cleaning-dfw.webp`,
    caption: { en: "Carpet Cleaning — Bedroom", es: "Limpieza de Alfombra — Recámara" },
  },
  {
    id: 5, cat: "carpet",
    src: `${import.meta.env.BASE_URL}images/deep-carpet-cleaning-dallas-fort-worth.webp`,
    caption: { en: "Carpet Cleaning — Hallway", es: "Limpieza de Alfombra — Pasillo" },
  },
  {
    id: 6, cat: "airduct",
    src: `${import.meta.env.BASE_URL}images/air-duct-cleaning-before-dfw.webp`,
    caption: { en: "Air Duct Inspection", es: "Inspección de Ductos" },
  },
  {
    id: 7, cat: "water",
    src: `${import.meta.env.BASE_URL}images/water-mold-damage-repair-dfw.webp`,
    caption: { en: "Water & Mold Damage Repair", es: "Reparación por Agua y Moho" },
  },
  {
    id: 8, cat: "remodel",
    src: `${import.meta.env.BASE_URL}images/commercial-restoration-dallas-fort-worth.webp`,
    caption: { en: "Commercial Restoration", es: "Restauración Comercial" },
  },
  {
    id: 9, cat: "airduct",
    src: `${import.meta.env.BASE_URL}images/air-duct-cleaning-after-dfw.webp`,
    caption: { en: "Clean HVAC Ductwork", es: "Ductos Limpios" },
  },
];

const COPY = {
  en: {
    label: "Our Work",
    title: "Real Projects. Real Results.",
    sub: "Every photo is a job completed by our team — this is the quality you can expect.",
    cta: "Request a Free Estimate",
  },
  es: {
    label: "Nuestro Trabajo",
    title: "Proyectos Reales. Resultados Reales.",
    sub: "Cada foto es un trabajo completado por nuestro equipo — esta es la calidad que puedes esperar.",
    cta: "Solicitar Estimado Gratis",
  },
};

interface PortfolioProps { lang: Lang; }

export default function PortfolioSection({ lang }: PortfolioProps) {
  const c = COPY[lang];
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null);

  const scrollTo = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="portfolio" style={{ backgroundColor: "#F8F5EF", padding: "80px 0" }}>
      <div className="container">

        {/* Header — compact */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-label" style={{ display: "block", marginBottom: 12 }}>{c.label}</span>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: "clamp(26px, 3.5vw, 44px)",
            color: "#0B1F3A", lineHeight: 1.2, marginBottom: 16,
          }}>{c.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <span className="gold-line" />
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            fontSize: 15.5, color: "#5A6B7A", lineHeight: 1.65,
            maxWidth: 480, margin: "0 auto",
          }}>{c.sub}</p>
        </div>

        {/* Masonry grid — 3 columns, no filters */}
        <div style={{ columns: "3 240px", columnGap: 14 }}>
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightbox(photo)}
              className="gallery-item"
              style={{
                breakInside: "avoid",
                marginBottom: 14,
                borderRadius: 6,
                overflow: "hidden",
                position: "relative",
                cursor: "zoom-in",
                boxShadow: "0 3px 16px rgba(11,31,58,0.08)",
                background: "#ddd",
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption[lang]}
                className="gallery-img"
                style={{ width: "100%", display: "block", transition: "transform 380ms cubic-bezier(0.23,1,0.32,1)" }}
              />

              {/* Service badge — always visible, top-left */}
              <div style={{
                position: "absolute", top: 10, left: 10,
                background: BADGE_COLORS[photo.cat],
                color: "white",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 9px", borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}>
                {BADGE_LABELS[lang][photo.cat as keyof typeof BADGE_LABELS.en]}
              </div>

              {/* Zoom icon + caption on hover */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(11,31,58,0.72) 0%, transparent 52%)",
                  opacity: 0,
                  transition: "opacity 220ms ease",
                  display: "flex", alignItems: "flex-end",
                  padding: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: 12.5, color: "white",
                  }}>{photo.caption[lang]}</span>
                  <ZoomIn size={16} color="white" style={{ flexShrink: 0, marginLeft: 8 }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-emerald"
            style={{ fontSize: 15, padding: "13px 30px" }}
          >
            {c.cta}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(7,22,40,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
            animation: "fadeInLb 180ms ease",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: 20, right: 20,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%", width: 42, height: 42,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "white",
              transition: "background 160ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <X size={18} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 860, width: "100%" }}>
            <img
              src={lightbox.src}
              alt={lightbox.caption[lang]}
              style={{
                width: "100%", maxHeight: "80vh",
                objectFit: "contain", borderRadius: 6,
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 14 }}>
              <span style={{
                background: BADGE_COLORS[lightbox.cat],
                color: "white",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "3px 8px", borderRadius: 3,
              }}>
                {BADGE_LABELS[lang][lightbox.cat as keyof typeof BADGE_LABELS.en]}
              </span>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                fontSize: 13.5, color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}>{lightbox.caption[lang]}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.05); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        @keyframes fadeInLb { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </section>
  );
}
