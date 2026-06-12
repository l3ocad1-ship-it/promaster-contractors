/**
 * WaterDamageSection — Pro Master Contractors
 * Dark navy background (contrasts with cream sections around it).
 * Layout: text LEFT, image RIGHT — mirrors CarpetSection for visual rhythm.
 * Palette: Navy #0B1F3A, Blue accent #1A4B84, Emerald #22A05A
 * Roboto headings, DM Sans body.
 */
import { CheckCircle, Droplets, ArrowRight, Clock } from "lucide-react";
import type { Lang } from "@/pages/Home";

const WATER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/service_water_damage-GhASdmCZbQyjgJsCfPEHTZ.webp";

const COPY = {
  en: {
    eyebrow: "24/7 Emergency Service",
    title: "Water Damage?\nWe're There in\n60 Minutes.",
    desc: "Every minute water sits in your property, the damage gets worse — and the repair bill grows. Pro Master's emergency response team is dispatched within 60 minutes of your call, equipped with industrial-grade extraction and drying equipment to stop the damage before it spreads.",
    col1Title: "Emergency Response",
    col1Points: [
      "24/7 water extraction — nights & weekends",
      "Industrial dehumidifiers & air movers",
      "Moisture mapping & thermal imaging",
      "Structural drying documentation",
    ],
    col2Title: "Full Restoration",
    col2Points: [
      "Mold prevention & remediation",
      "Flooring, drywall & ceiling repair",
      "Direct insurance billing",
      "Final walkthrough & sign-off",
    ],
    badges: [
      "60-min response time",
      "Works with all insurances",
      "No hidden fees",
      "Free damage assessment",
    ],
    cta: "Call Emergency Line Now",
    ctaSub: "Available 24 hours — 7 days a week",
    tag: "Emergency Available",
  },
  es: {
    eyebrow: "Servicio de Emergencia 24/7",
    title: "¿Daño por Agua?\nLlegamos en\n60 Minutos.",
    desc: "Cada minuto que el agua permanece en tu propiedad, el daño empeora y el costo de reparación aumenta. El equipo de respuesta de emergencia de Pro Master es despachado en 60 minutos, equipado con extracción industrial y secado para detener el daño antes de que se extienda.",
    col1Title: "Respuesta de Emergencia",
    col1Points: [
      "Extracción de agua 24/7 — noches y fines de semana",
      "Deshumidificadores industriales y ventiladores",
      "Mapeo de humedad e imagen térmica",
      "Documentación de secado estructural",
    ],
    col2Title: "Restauración Completa",
    col2Points: [
      "Prevención y remediación de moho",
      "Reparación de pisos, paredes y techos",
      "Facturación directa al seguro",
      "Revisión final y aprobación",
    ],
    badges: [
      "Respuesta en 60 minutos",
      "Trabaja con todos los seguros",
      "Sin cargos ocultos",
      "Evaluación de daños gratis",
    ],
    cta: "Llamar Línea de Emergencia",
    ctaSub: "Disponible 24 horas — 7 días a la semana",
    tag: "Emergencias Disponibles",
  },
};

interface WaterProps { lang: Lang; }

export default function WaterDamageSection({ lang }: WaterProps) {
  const c = COPY[lang];

  const callNow = () => {
    window.location.href = "tel:+12145551234";
  };

  return (
    <section
      id="water"
      style={{
        background: "linear-gradient(135deg, #071628 0%, #0B1F3A 60%, #0D2A4A 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />
      {/* Blue glow top-right */}
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 360, height: 360,
        background: "radial-gradient(circle, rgba(26,75,132,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="water-grid"
        >
          {/* LEFT — Text Content */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Clock size={15} color="#22A05A" />
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
              color: "white", lineHeight: 1.15,
              marginBottom: 24, whiteSpace: "pre-line",
            }}>{c.title}</h2>

            {/* Accent line */}
            <div style={{
              width: 52, height: 3,
              background: "linear-gradient(90deg, #1A4B84, #22A05A)",
              borderRadius: 2, marginBottom: 24,
            }} />

            {/* Description */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: 15.5, color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75, marginBottom: 36,
            }}>{c.desc}</p>

            {/* Two benefit columns */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 16, marginBottom: 32,
            }}
              className="water-benefit-cols"
            >
              {/* Emergency Response */}
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(26,75,132,0.4)",
                borderRadius: 8, padding: "18px 16px",
              }}>
                <p style={{
                  fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                  fontSize: 12, color: "#5B9BD5", textTransform: "uppercase",
                  letterSpacing: "0.07em", marginBottom: 12,
                }}>{c.col1Title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.col1Points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="#22A05A" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                        fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.5,
                      }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Restoration */}
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(26,75,132,0.4)",
                borderRadius: 8, padding: "18px 16px",
              }}>
                <p style={{
                  fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                  fontSize: 12, color: "#5B9BD5", textTransform: "uppercase",
                  letterSpacing: "0.07em", marginBottom: 12,
                }}>{c.col2Title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.col2Points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={13} color="#22A05A" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                        fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.5,
                      }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Badges */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {c.badges.map((badge) => (
                  <span key={badge} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(26,75,132,0.2)",
                    border: "1px solid rgba(91,155,213,0.25)",
                    borderRadius: 4, padding: "6px 12px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: 12.5, color: "rgba(255,255,255,0.8)",
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
                onClick={callNow}
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
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1B8A4C"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#22A05A"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <ArrowRight size={16} />
                {c.cta}
              </button>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                fontSize: 12.5, color: "rgba(255,255,255,0.4)",
                marginTop: 12,
              }}>{c.ctaSub}</p>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div style={{ position: "relative" }} className="water-img-wrap">
            {/* Decorative accent */}
            <div style={{
              position: "absolute", top: -16, right: -16,
              width: "100%", height: "100%",
              border: "2px solid rgba(26,75,132,0.3)",
              borderRadius: 10, zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: 10, overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}>
              <img
                src={WATER_IMG}
                alt="Water damage restoration technician"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay badge */}
              <div style={{
                position: "absolute", bottom: 24, left: 24,
                background: "rgba(11,31,58,0.92)", backdropFilter: "blur(12px)",
                borderRadius: 8, padding: "12px 18px",
                border: "1px solid rgba(26,75,132,0.4)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <div style={{
                  width: 36, height: 36,
                  background: "rgba(26,75,132,0.3)",
                  borderRadius: 6,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Droplets size={18} color="#5B9BD5" />
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                    fontSize: 13, color: "white", margin: 0, lineHeight: 1.2,
                  }}>{c.tag}</p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                    fontSize: 11.5, color: "rgba(255,255,255,0.55)", margin: 0,
                  }}>Water Damage Restoration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .water-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .water-grid .water-img-wrap {
            order: -1;
          }
          .water-benefit-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
