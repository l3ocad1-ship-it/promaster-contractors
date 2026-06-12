/**
 * FooterSection — Pro Master Contractors
 * Deep navy background. Clean columns. DM Sans. Emerald accents.
 */
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import type { Lang } from "@/pages/Home";

const COPY = {
  en: {
    tagline: "Trusted Restoration & Remodeling in Dallas-Fort Worth.",
    services: { title: "Services", items: ["Water Damage Restoration", "Carpet Cleaning", "Interior Remodeling", "Exterior Remodeling", "Property Make-Ready", "Emergency Services"] },
    nav: { title: "Company", items: [{ label: "About Us", id: "#about" }, { label: "Portfolio", id: "#portfolio" }, { label: "Reviews", id: "#reviews" }, { label: "Contact", id: "#contact" }] },
    contact: "Contact",
    legal: "© 2024 Pro Master Contractors. All rights reserved.",
    license: "Licensed & Insured | Serving Dallas-Fort Worth, TX",
  },
  es: {
    tagline: "Restauración y Remodelación de Confianza en Dallas-Fort Worth.",
    services: { title: "Servicios", items: ["Restauración por Daño de Agua", "Limpieza de Alfombras", "Remodelación Interior", "Remodelación Exterior", "Preparación de Propiedad", "Servicios de Emergencia"] },
    nav: { title: "Empresa", items: [{ label: "Nosotros", id: "#about" }, { label: "Portafolio", id: "#portfolio" }, { label: "Reseñas", id: "#reviews" }, { label: "Contacto", id: "#contact" }] },
    contact: "Contacto",
    legal: "© 2024 Pro Master Contractors. Todos los derechos reservados.",
    license: "Licenciados y Asegurados | Servimos Dallas-Fort Worth, TX",
  },
};

interface FooterProps { lang: Lang; }

export default function FooterSection({ lang }: FooterProps) {
  const c = COPY[lang];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 14,
    color: "rgba(255,255,255,0.45)", textDecoration: "none",
    transition: "color 150ms ease", display: "block", marginBottom: 10,
    cursor: "pointer", background: "none", border: "none", padding: 0, textAlign: "left",
  };

  const colTitle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10.5,
    color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase",
    marginBottom: 20,
  };

  return (
    <footer style={{ background: "#0B1F3A", padding: "72px 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, fontSize: 22, color: "white", marginBottom: 2 }}>Pro Master</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11, color: "#22A05A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Contractors</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 24, maxWidth: 260 }}>{c.tagline}</p>
            <div style={{ display: "flex", gap: 10 }}>
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 150ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(34,160,90,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                >
                  <Icon size={15} color="rgba(255,255,255,0.55)" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={colTitle}>{c.services.title}</div>
            {c.services.items.map((s, i) => (
              <button key={i} onClick={() => scrollTo("#services")} style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#22A05A")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >{s}</button>
            ))}
          </div>

          {/* Nav */}
          <div>
            <div style={colTitle}>{c.nav.title}</div>
            {c.nav.items.map((item, i) => (
              <button key={i} onClick={() => scrollTo(item.id)} style={linkStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#22A05A")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >{item.label}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={colTitle}>{c.contact}</div>
            {[
              { icon: Phone, text: "(214) 555-1234", href: "tel:+12145551234" },
              { icon: Mail, text: "info@promastercontractors.com", href: "mailto:info@promastercontractors.com" },
              { icon: MapPin, text: "Dallas-Fort Worth, TX", href: undefined },
            ].map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                  <Icon size={14} color="#22A05A" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 13.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{item.text}</span>
                </div>
              );
              return item.href ? <a key={i} href={item.href} style={{ textDecoration: "none" }}>{inner}</a> : <div key={i}>{inner}</div>;
            })}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "rgba(34,160,90,0.1)", border: "1px solid rgba(34,160,90,0.25)", borderRadius: 4, marginTop: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22A05A" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 11.5, color: "#22A05A", letterSpacing: "0.06em" }}>24/7 EMERGENCY</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12.5, color: "rgba(255,255,255,0.25)" }}>{c.legal}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12.5, color: "rgba(255,255,255,0.25)" }}>{c.license}</span>
        </div>
      </div>
    </footer>
  );
}
