/**
 * ReviewsSection — Pro Master Contractors
 * White background. 3 testimonial cards + Google badge. Roboto + DM Sans. Navy + Emerald.
 */
import { Star, Quote } from "lucide-react";
import type { Lang } from "@/pages/Home";

const REVIEWS = {
  en: [
    { name: "Jennifer M.", location: "Plano, TX", rating: 5, text: "Pro Master responded within 45 minutes of my call after a pipe burst. They extracted all the water, set up drying equipment, and handled everything with my insurance. Absolutely professional.", service: "Water Damage Restoration" },
    { name: "Robert T.", location: "Dallas, TX", rating: 5, text: "Our carpets look brand new. They removed stains that I thought were permanent. The team was punctual, respectful of our home, and the price was very fair. Highly recommend.", service: "Carpet Deep Cleaning" },
    { name: "Sandra L.", location: "Fort Worth, TX", rating: 5, text: "We hired Pro Master for a full kitchen and bathroom remodel. The quality of the work is outstanding. They finished on time and on budget. We couldn't be happier.", service: "Interior Remodeling" },
  ],
  es: [
    { name: "Jennifer M.", location: "Plano, TX", rating: 5, text: "Pro Master respondió en 45 minutos después de que reventó una tubería. Extrajeron toda el agua, instalaron equipos de secado y manejaron todo con mi aseguradora. Absolutamente profesionales.", service: "Restauración por Daño de Agua" },
    { name: "Robert T.", location: "Dallas, TX", rating: 5, text: "Nuestras alfombras parecen nuevas. Eliminaron manchas que creía permanentes. El equipo fue puntual, respetuoso con nuestro hogar y el precio fue muy justo. Muy recomendado.", service: "Limpieza Profunda de Alfombra" },
    { name: "Sandra L.", location: "Fort Worth, TX", rating: 5, text: "Contratamos a Pro Master para una remodelación completa de cocina y baño. La calidad del trabajo es excepcional. Terminaron a tiempo y dentro del presupuesto.", service: "Remodelación Interior" },
  ],
};

const COPY = {
  en: { label: "Client Testimonials", title: "What Our Customers\nSay About Us.", sub: "Don't take our word for it — here's what real customers across DFW have to say.", badge: "4.9 out of 5", badgeSub: "Based on 200+ Google Reviews", cta: "Read All Reviews on Google" },
  es: { label: "Testimonios de Clientes", title: "Lo Que Dicen\nNuestros Clientes.", sub: "No lo decimos nosotros — esto es lo que dicen clientes reales de todo DFW.", badge: "4.9 de 5", badgeSub: "Basado en 200+ Reseñas de Google", cta: "Ver Todas las Reseñas en Google" },
};

interface ReviewsProps { lang: Lang; }

export default function ReviewsSection({ lang }: ReviewsProps) {
  const c = COPY[lang];
  const reviews = REVIEWS[lang];

  return (
    <section id="reviews" style={{ background: "white", padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ display: "block", marginBottom: 14 }}>{c.label}</span>
          <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 52px)", color: "#0B1F3A", lineHeight: 1.15, marginBottom: 20, whiteSpace: "pre-line" }}>{c.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}><span className="gold-line" /></div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 16.5, color: "#5A6B7A", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>{c.sub}</p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginBottom: 52 }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                background: "#F8F5EF", borderRadius: 8, padding: "32px 28px",
                border: "1px solid rgba(11,31,58,0.06)",
                boxShadow: "0 4px 24px rgba(11,31,58,0.05)",
                display: "flex", flexDirection: "column", position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: 20, right: 24, opacity: 0.07 }}>
                <Quote size={48} color="#1A4B84" />
              </div>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={15} color="#C9A84C" fill="#C9A84C" />)}
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 15, color: "#3D4F5E", lineHeight: 1.7, marginBottom: 24, flex: 1, fontStyle: "italic" }}>"{r.text}"</p>
              <div style={{ height: 1, background: "rgba(11,31,58,0.08)", marginBottom: 18 }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#0B1F3A" }}>{r.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12.5, color: "#5A6B7A" }}>{r.location}</div>
                </div>
                <div style={{ padding: "4px 10px", background: "rgba(27,107,58,0.1)", border: "1px solid rgba(27,107,58,0.2)", borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 10.5, color: "#1B6B3A", letterSpacing: "0.06em" }}>{r.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 16, padding: "20px 32px", background: "#F8F5EF", border: "1px solid rgba(11,31,58,0.08)", borderRadius: 8, boxShadow: "0 4px 16px rgba(11,31,58,0.06)" }}>
            <div style={{ width: 44, height: 44, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", fontWeight: 800, fontSize: 22, color: "#4285F4", fontFamily: "serif" }}>G</div>
            <div>
              <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} color="#C9A84C" fill="#C9A84C" />)}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 18, color: "#0B1F3A", lineHeight: 1 }}>{c.badge}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12.5, color: "#5A6B7A", marginTop: 2 }}>{c.badgeSub}</div>
            </div>
          </div>
          <a href="https://www.google.com/search?q=Pro+Master+Contractors+Dallas" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14 }}>
            {c.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
