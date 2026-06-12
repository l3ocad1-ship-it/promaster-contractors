/**
 * AirDuctSection — Pro Master Contractors
 * Two-column layout: text + benefits left, premium HVAC image right.
 * Design: Navy #0B1F3A, Emerald #22A05A, Cream #F8F5EF background.
 * Roboto headings, DM Sans body.
 */
import { CheckCircle, Wind, Flame, ArrowRight } from "lucide-react";
import type { Lang } from "@/pages/Home";

const AIRDUCT_IMG = `${import.meta.env.BASE_URL}images/air-duct-cleaning-before-dfw.webp`;

const COPY = {
  en: {
    eyebrow: "Home Health & Safety",
    title: "Breathe Cleaner Air.\nLower Your Bills.\nProtect What Matters.",
    desc: "Most homeowners don't realize their air ducts and dryer vents are silently working against them — circulating dust, allergens, and even fire hazards through their home every single day. Pro Master Contractors eliminates the problem at the source with a thorough, professional cleaning that makes a difference you can actually feel.",
    col1Title: "Air Duct Cleaning",
    col1Points: [
      "Remove years of accumulated dust & debris",
      "Improve HVAC efficiency and lower energy bills",
      "Reduce allergens, mold spores & bacteria",
      "Extend the life of your HVAC system",
    ],
    col2Title: "Dryer Vent Cleaning",
    col2Points: [
      "Eliminate dangerous lint buildup",
      "Reduce dryer cycle times",
      "Prevent dryer fires — a leading home hazard",
      "Improve appliance performance & lifespan",
    ],
    whyTitle: "Why Choose Pro Master",
    badges: [
      "Honest pricing — no hidden fees",
      "Professional-grade equipment",
      "On-time, reliable service",
      "100% satisfaction guaranteed",
    ],
    cta: "Schedule Your Cleaning Today",
    ctaSub: "Free assessment — we'll get back to you within 24 hours",
  },
  es: {
    eyebrow: "Salud y Seguridad del Hogar",
    title: "Respira Aire Limpio.\nReduce tu Factura.\nProtege lo que Importa.",
    desc: "La mayoría de los propietarios no se dan cuenta de que sus ductos de aire y ventilaciones de secadora trabajan silenciosamente en su contra — circulando polvo, alérgenos e incluso riesgos de incendio por su hogar cada día. Pro Master Contractors elimina el problema desde la raíz con una limpieza profesional y exhaustiva que hace una diferencia que realmente se siente.",
    col1Title: "Limpieza de Ductos de Aire",
    col1Points: [
      "Elimina años de polvo y suciedad acumulada",
      "Mejora la eficiencia del HVAC y reduce facturas",
      "Reduce alérgenos, esporas de moho y bacterias",
      "Extiende la vida útil de tu sistema HVAC",
    ],
    col2Title: "Limpieza de Ducto de Secadora",
    col2Points: [
      "Elimina la peligrosa acumulación de pelusa",
      "Reduce los tiempos de secado",
      "Previene incendios — un riesgo principal en el hogar",
      "Mejora el rendimiento y vida útil del aparato",
    ],
    whyTitle: "Por Qué Elegir Pro Master",
    badges: [
      "Precios honestos — sin cargos ocultos",
      "Equipo de grado profesional",
      "Servicio puntual y confiable",
      "100% de satisfacción garantizada",
    ],
    cta: "Programa tu Limpieza Hoy",
    ctaSub: "Evaluación gratuita — te contactamos en menos de 24 horas",
  },
};

interface AirDuctProps { lang: Lang; }

export default function AirDuctSection({ lang }: AirDuctProps) {
  const c = COPY[lang];

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="airduct"
      style={{
        backgroundColor: "#0B1F3A",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(34,160,90,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
          className="airduct-grid"
        >
          {/* LEFT — Text Content */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Wind size={16} color="#22A05A" />
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#22A05A",
              }}>{c.eyebrow}</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: "'Roboto', sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 3.5vw, 46px)",
              color: "#FFFFFF", lineHeight: 1.15,
              marginBottom: 24, whiteSpace: "pre-line",
            }}>{c.title}</h2>

            {/* Accent line */}
            <div style={{
              width: 52, height: 3,
              background: "linear-gradient(90deg, #22A05A, #16C96A)",
              borderRadius: 2, marginBottom: 24,
            }} />

            {/* Description */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: 15.5, color: "rgba(255,255,255,0.72)",
              lineHeight: 1.75, marginBottom: 36,
            }}>{c.desc}</p>

            {/* Two benefit columns */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 24, marginBottom: 36,
            }}
              className="benefit-cols"
            >
              {/* Air Duct column */}
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(34,160,90,0.25)",
                borderRadius: 8, padding: "20px 18px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <Wind size={16} color="#22A05A" />
                  <span style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                    fontSize: 13, color: "#22A05A", textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}>{c.col1Title}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.col1Points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="#22A05A" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                        fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.5,
                      }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dryer Vent column */}
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(34,160,90,0.25)",
                borderRadius: 8, padding: "20px 18px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <Flame size={16} color="#E67E22" />
                  <span style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                    fontSize: 13, color: "#E67E22", textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}>{c.col2Title}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {c.col2Points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="#E67E22" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                        fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.5,
                      }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Choose Us badges */}
            <div style={{ marginBottom: 36 }}>
              <p style={{
                fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)", marginBottom: 14,
              }}>{c.whyTitle}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {c.badges.map((badge) => (
                  <span key={badge} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(34,160,90,0.12)",
                    border: "1px solid rgba(34,160,90,0.3)",
                    borderRadius: 4, padding: "6px 12px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: 12.5, color: "rgba(255,255,255,0.85)",
                  }}>
                    <CheckCircle size={11} color="#22A05A" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={scrollToContact}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "15px 30px",
                  background: "#22A05A",
                  border: "none", borderRadius: 4,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: 15, color: "white",
                  cursor: "pointer",
                  transition: "all 160ms ease",
                  boxShadow: "0 4px 20px rgba(34,160,90,0.35)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1a8a4a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#22A05A"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {c.cta}
                <ArrowRight size={16} />
              </button>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                fontSize: 12.5, color: "rgba(255,255,255,0.45)",
                marginTop: 12,
              }}>{c.ctaSub}</p>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div style={{ position: "relative" }} className="airduct-img-wrap">
            {/* Decorative border accent */}
            <div style={{
              position: "absolute", top: -16, right: -16,
              width: "100%", height: "100%",
              border: "2px solid rgba(34,160,90,0.3)",
              borderRadius: 10, zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: 10, overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
            }}>
              <img
                src={AIRDUCT_IMG}
                alt="Professional air duct cleaning service"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay badge */}
              <div style={{
                position: "absolute", bottom: 24, left: 24,
                background: "rgba(11,31,58,0.88)", backdropFilter: "blur(12px)",
                borderRadius: 8, padding: "14px 20px",
                border: "1px solid rgba(34,160,90,0.3)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 40, height: 40,
                    background: "rgba(34,160,90,0.2)",
                    borderRadius: 6,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Wind size={20} color="#22A05A" />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                      fontSize: 14, color: "white", margin: 0, lineHeight: 1.2,
                    }}>Professional Grade</p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                      fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0,
                    }}>HVAC & Vent Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .airduct-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .airduct-img-wrap {
            order: -1;
          }
          .benefit-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
