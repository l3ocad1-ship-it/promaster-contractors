/**
 * CarpetSection — Pro Master Contractors
 * Two-column layout: image LEFT, text + benefits RIGHT.
 * Background: Cream #F8F5EF — alternates with RemodelingSection (white) for visual rhythm.
 * Roboto headings, DM Sans body. Emerald green accent.
 */
import { CheckCircle, Layers, ArrowRight, Star } from "lucide-react";
import type { Lang } from "@/pages/Home";

const CARPET_IMG = `${import.meta.env.BASE_URL}images/carpet-1.jpg`;

const COPY = {
  en: {
    eyebrow: "Most Popular Service",
    title: "Deep Clean That\nActually Lasts.",
    desc: "Store-bought carpet cleaners only treat the surface. Pro Master's truck-mounted hot water extraction system reaches deep into the fiber — pulling out embedded soil, allergens, and odors that regular vacuuming and rental machines simply can't touch.",
    col1Title: "Residential Cleaning",
    col1Points: [
      "Hot water extraction (steam cleaning)",
      "Pet stain & odor elimination",
      "Pre-treatment for tough spots",
      "Carpet repair & restretching",
    ],
    col2Title: "Commercial Cleaning",
    col2Points: [
      "Office buildings & retail spaces",
      "Multi-unit apartment complexes",
      "Flexible scheduling — nights & weekends",
      "High-traffic area specialists",
    ],
    badges: [
      "Honest pricing — no hidden fees",
      "Truck-mounted equipment",
      "Fast dry times",
      "100% satisfaction guaranteed",
    ],
    cta: "Schedule Your Carpet Cleaning",
    ctaSub: "Free quote — response within 24 hours",
    tag: "Most Popular",
  },
  es: {
    eyebrow: "Servicio Más Popular",
    title: "Limpieza Profunda\nque Realmente Dura.",
    desc: "Los limpiadores de alfombras de tienda solo tratan la superficie. El sistema de extracción de agua caliente de Pro Master llega profundo en la fibra — extrayendo suciedad incrustada, alérgenos y olores que la aspiradora regular y las máquinas de alquiler simplemente no pueden alcanzar.",
    col1Title: "Limpieza Residencial",
    col1Points: [
      "Extracción de agua caliente (vapor)",
      "Eliminación de manchas y olores de mascotas",
      "Pre-tratamiento para manchas difíciles",
      "Reparación y estiramiento de alfombras",
    ],
    col2Title: "Limpieza Comercial",
    col2Points: [
      "Edificios de oficinas y espacios comerciales",
      "Complejos de apartamentos multifamiliares",
      "Horarios flexibles — noches y fines de semana",
      "Especialistas en áreas de alto tráfico",
    ],
    badges: [
      "Precios honestos — sin cargos ocultos",
      "Equipo montado en camión",
      "Tiempos de secado rápidos",
      "100% de satisfacción garantizada",
    ],
    cta: "Programa tu Limpieza de Alfombras",
    ctaSub: "Cotización gratuita — respuesta en 24 horas",
    tag: "Más Popular",
  },
};

interface CarpetProps { lang: Lang; }

export default function CarpetSection({ lang }: CarpetProps) {
  const c = COPY[lang];

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="carpet"
      style={{
        backgroundColor: "#F8F5EF",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="carpet-grid"
        >
          {/* LEFT — Image */}
          <div style={{ position: "relative" }} className="carpet-img-wrap">
            {/* Decorative accent block */}
            <div style={{
              position: "absolute", bottom: -16, left: -16,
              width: "100%", height: "100%",
              border: "2px solid rgba(27,107,58,0.2)",
              borderRadius: 10, zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: 10, overflow: "hidden",
              boxShadow: "0 24px 64px rgba(11,31,58,0.15)",
            }}>
              <img
                src={CARPET_IMG}
                alt="Professional carpet cleaning service"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay badge */}
              <div style={{
                position: "absolute", top: 24, left: 24,
                background: "rgba(11,31,58,0.88)", backdropFilter: "blur(12px)",
                borderRadius: 8, padding: "12px 18px",
                border: "1px solid rgba(27,107,58,0.35)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <div style={{
                  width: 36, height: 36,
                  background: "rgba(27,107,58,0.25)",
                  borderRadius: 6,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Star size={18} color="#22A05A" fill="#22A05A" />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                    fontSize: 13, color: "white", margin: 0, lineHeight: 1.2,
                  }}>{c.tag}</p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                    fontSize: 11.5, color: "rgba(255,255,255,0.6)", margin: 0,
                  }}>Carpet Care Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Text Content */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Layers size={16} color="#1B6B3A" />
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#1B6B3A",
              }}>{c.eyebrow}</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: "'Roboto', sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 3.5vw, 46px)",
              color: "#0B1F3A", lineHeight: 1.15,
              marginBottom: 24, whiteSpace: "pre-line",
            }}>{c.title}</h2>

            {/* Accent line */}
            <div style={{
              width: 52, height: 3,
              background: "linear-gradient(90deg, #1B6B3A, #22A05A)",
              borderRadius: 2, marginBottom: 24,
            }} />

            {/* Description */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: 15.5, color: "#5A6B7A",
              lineHeight: 1.75, marginBottom: 36,
            }}>{c.desc}</p>

            {/* Two benefit columns */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 20, marginBottom: 32,
            }}
              className="carpet-benefit-cols"
            >
              {/* Residential */}
              <div style={{
                background: "white",
                border: "1px solid rgba(27,107,58,0.18)",
                borderRadius: 8, padding: "18px 16px",
                boxShadow: "0 2px 12px rgba(11,31,58,0.05)",
              }}>
                <p style={{
                  fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                  fontSize: 12, color: "#1B6B3A", textTransform: "uppercase",
                  letterSpacing: "0.07em", marginBottom: 12,
                }}>{c.col1Title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.col1Points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="#1B6B3A" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                        fontSize: 13, color: "#3D4F5E", lineHeight: 1.5,
                      }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial */}
              <div style={{
                background: "white",
                border: "1px solid rgba(27,107,58,0.18)",
                borderRadius: 8, padding: "18px 16px",
                boxShadow: "0 2px 12px rgba(11,31,58,0.05)",
              }}>
                <p style={{
                  fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                  fontSize: 12, color: "#1B6B3A", textTransform: "uppercase",
                  letterSpacing: "0.07em", marginBottom: 12,
                }}>{c.col2Title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.col2Points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="#1B6B3A" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                        fontSize: 13, color: "#3D4F5E", lineHeight: 1.5,
                      }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Choose Us badges */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {c.badges.map((badge) => (
                  <span key={badge} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(27,107,58,0.08)",
                    border: "1px solid rgba(27,107,58,0.2)",
                    borderRadius: 4, padding: "6px 12px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: 12.5, color: "#2D4A35",
                  }}>
                    <CheckCircle size={11} color="#1B6B3A" />
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
                  background: "#1B6B3A",
                  border: "none", borderRadius: 4,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: 15, color: "white",
                  cursor: "pointer",
                  transition: "all 160ms ease",
                  boxShadow: "0 4px 20px rgba(27,107,58,0.3)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#145530"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1B6B3A"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {c.cta}
                <ArrowRight size={16} />
              </button>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                fontSize: 12.5, color: "#8A9BAA",
                marginTop: 12,
              }}>{c.ctaSub}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .carpet-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .carpet-benefit-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
