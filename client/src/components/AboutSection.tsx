/**
 * AboutSection — Pro Master Contractors
 * White background. Asymmetric layout. Roboto + DM Sans. Navy + Emerald.
 */
import { Award, Users, MapPin, ThumbsUp } from "lucide-react";
import type { Lang } from "@/pages/Home";

const TEAM_IMG = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80";

const COPY = {
  en: {
    label: "Our Story",
    title: "16 Years Building\nTrust in DFW.",
    sub: "Pro Master Contractors was founded on a simple principle: treat every property like it's your own.",
    body: "We serve homeowners, property managers, HOAs, and multi-family communities across the entire DFW metroplex. Our team of certified technicians brings the same level of care and professionalism to every job — whether it's a single carpet cleaning or a full property renovation.",
    cta: "Get Your Free Estimate",
    pillars: [
      { icon: Award, title: "16+ Years Experience", desc: "Trusted by homeowners and property managers across DFW" },
      { icon: Users, title: "Expert Team", desc: "Trained, background-checked technicians on every job" },
      { icon: MapPin, title: "Serving All DFW", desc: "Dallas, Fort Worth, Plano, Frisco, Arlington and beyond" },
      { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We don't leave until you're 100% satisfied" },
    ],
  },
  es: {
    label: "Nuestra Historia",
    title: "16 Años Construyendo\nConfianza en DFW.",
    sub: "Pro Master Contractors fue fundada con un principio simple: tratar cada propiedad como si fuera la tuya.",
    body: "Servimos a propietarios, administradores de propiedades, HOAs y comunidades multifamiliares en todo el área metropolitana de DFW. Nuestro equipo aporta el mismo nivel de cuidado y profesionalismo en cada trabajo.",
    cta: "Obtener Estimado Gratis",
    pillars: [
      { icon: Award, title: "16+ Años de Experiencia", desc: "De confianza para propietarios y administradores en DFW" },
      { icon: Users, title: "Equipo Experto", desc: "Técnicos capacitados y verificados en cada trabajo" },
      { icon: MapPin, title: "Servimos Todo DFW", desc: "Dallas, Fort Worth, Plano, Frisco, Arlington y más" },
      { icon: ThumbsUp, title: "Satisfacción Garantizada", desc: "No nos vamos hasta que estés 100% satisfecho" },
    ],
  },
};

interface AboutProps { lang: Lang; }

export default function AboutSection({ lang }: AboutProps) {
  const c = COPY[lang];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="about" style={{ background: "white", padding: "100px 0" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 72, alignItems: "center",
        }}>
          {/* Left — Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: -20, left: -20,
              width: "100%", height: "100%",
              background: "#1B6B3A", borderRadius: 8, opacity: 0.1,
            }} />
            <img
              src={TEAM_IMG}
              alt="Pro Master Contractors team"
              style={{
                width: "100%", height: 440, objectFit: "cover",
                borderRadius: 8, position: "relative", zIndex: 1,
                boxShadow: "0 24px 64px rgba(11,31,58,0.18)",
              }}
            />

          </div>

          {/* Right — Content */}
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: 14 }}>{c.label}</span>
            <h2 style={{
              fontFamily: "'Roboto', sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 3.5vw, 48px)",
              color: "#0B1F3A", lineHeight: 1.15, marginBottom: 20,
              whiteSpace: "pre-line",
            }}>{c.title}</h2>
            <span className="gold-line" style={{ display: "block", marginBottom: 20 }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, color: "#0B1F3A", lineHeight: 1.7, marginBottom: 14 }}>{c.sub}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 15, color: "#5A6B7A", lineHeight: 1.75, marginBottom: 36 }}>{c.body}</p>

            {/* Pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 36 }}>
              {c.pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} style={{ padding: "16px", background: "#F8F5EF", borderRadius: 6, border: "1px solid rgba(11,31,58,0.06)" }}>
                    <div style={{ width: 36, height: 36, background: "rgba(27,107,58,0.1)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                      <Icon size={17} color="#1B6B3A" />
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13.5, color: "#0B1F3A", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12.5, color: "#5A6B7A", lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                );
              })}
            </div>

            <button onClick={() => scrollTo("#contact")} className="btn-primary" style={{ fontSize: 14.5 }}>
              {c.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
