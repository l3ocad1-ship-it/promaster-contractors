/**
 * EmergencySection — Pro Master Contractors
 * Deep navy urgent section. Large phone CTA. Emerald accent.
 * Roboto + DM Sans. Navy + Emerald palette.
 */
import { Phone, Clock, Shield, Zap } from "lucide-react";
import type { Lang } from "@/pages/Home";

const COPY = {
  en: {
    label: "Always Available",
    title: "Water Damage Doesn't\nWait. Neither Do We.",
    sub: "Every minute counts when water damage strikes. Our certified technicians are dispatched within 60 minutes — 24 hours a day, 7 days a week, 365 days a year.",
    cta: "Call Emergency Line Now",
    phone: "(214) 882-5483",
    note: "Free assessment — No obligation",
    features: [
      { icon: Zap, title: "60-Min Response", desc: "Technicians on-site within 60 minutes of your call" },
      { icon: Clock, title: "24/7/365 Availability", desc: "Nights, weekends, and holidays — we're always on" },
      { icon: Shield, title: "Insurance Approved", desc: "We work directly with all major insurance carriers" },
    ],
  },
  es: {
    label: "Siempre Disponibles",
    title: "El Daño por Agua\nNo Espera. Nosotros Tampoco.",
    sub: "Cada minuto cuenta cuando el agua daña tu propiedad. Nuestros técnicos certificados son despachados en 60 minutos — 24 horas al día, 7 días a la semana.",
    cta: "Llamar Línea de Emergencia",
    phone: "(214) 882-5483",
    note: "Evaluación gratuita — Sin compromiso",
    features: [
      { icon: Zap, title: "Respuesta en 60 Min", desc: "Técnicos en sitio dentro de 60 minutos de tu llamada" },
      { icon: Clock, title: "Disponibilidad 24/7/365", desc: "Noches, fines de semana y feriados — siempre disponibles" },
      { icon: Shield, title: "Aprobado por Seguros", desc: "Trabajamos directamente con todas las aseguradoras principales" },
    ],
  },
};

interface EmergencyProps { lang: Lang; }

export default function EmergencySection({ lang }: EmergencyProps) {
  const c = COPY[lang];

  return (
    <section
      id="emergency"
      style={{
        background: "linear-gradient(135deg, #0B1F3A 0%, #112D4E 60%, #0D3320 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      {/* Emerald glow */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(27,107,58,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gap: 64,
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}>
          {/* Left */}
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: 16, color: "#22A05A" }}>{c.label}</span>
            <h2 style={{
              fontFamily: "'Roboto', sans-serif", fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "white", lineHeight: 1.1, marginBottom: 24,
              whiteSpace: "pre-line",
            }}>{c.title}</h2>
            <span className="gold-line" style={{ display: "block", marginBottom: 24 }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: 16.5, color: "rgba(255,255,255,0.62)", lineHeight: 1.75,
              marginBottom: 40,
            }}>{c.sub}</p>

            {/* Big phone CTA */}
            <a
              href="tel:+12148825483"
              style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                padding: "18px 32px",
                background: "#22A05A", color: "white",
                borderRadius: 5, textDecoration: "none",
                transition: "all 160ms ease",
                border: "2px solid #22A05A",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1B6B3A";
                e.currentTarget.style.borderColor = "#1B6B3A";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(34,160,90,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#22A05A";
                e.currentTarget.style.borderColor = "#22A05A";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 44, height: 44,
                background: "rgba(255,255,255,0.15)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Phone size={20} color="white" />
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 20, color: "white", lineHeight: 1.1 }}>{c.phone}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 12, color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}>{c.cta}</div>
              </div>
            </a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "rgba(255,255,255,0.38)", marginTop: 12 }}>{c.note}</p>
          </div>

          {/* Right — Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {c.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 18,
                    padding: "24px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 6,
                    transition: "background 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: "rgba(34,160,90,0.15)",
                    border: "1px solid rgba(34,160,90,0.25)",
                    borderRadius: 6,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color="#22A05A" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 13.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.55 }}>{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
