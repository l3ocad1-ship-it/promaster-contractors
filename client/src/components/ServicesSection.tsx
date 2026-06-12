/**
 * ServicesSection — Pro Master Contractors
 * 4 premium service cards on cream background.
 * Roboto headings, DM Sans body. Navy + Emerald palette.
 */
import { Droplets, Layers, Home, Wind, CheckCircle, ArrowRight } from "lucide-react";
import type { Lang } from "@/pages/Home";

const WATER_IMG = `${import.meta.env.BASE_URL}images/water-extraction-dfw.webp`;
const CARPET_IMG = `${import.meta.env.BASE_URL}images/carpet-cleaning-hallway-dfw.webp`;
const REMODEL_IMG = `${import.meta.env.BASE_URL}images/commercial-restoration-dallas-fort-worth.webp`;
const AIRDUCT_IMG = `${import.meta.env.BASE_URL}images/air-duct-cleaning-after-dfw.webp`;

const COPY = {
  en: {
    label: "What We Do",
    title: "Complete Property Care,\nUnder One Roof.",
    sub: "From emergency water extraction to full kitchen remodels — Pro Master handles it all with certified technicians and a satisfaction guarantee.",
    services: [
      {
        icon: Droplets,
        img: WATER_IMG,
        color: "#1A4B84",
        tag: "Emergency Available",
        title: "Water Damage & Restoration",
        desc: "Rapid response water extraction, structural drying, mold prevention, and full restoration. We work directly with your insurance company.",
        points: ["24/7 Water Extraction", "Structural Drying", "Mold Prevention", "Insurance Claim Assistance"],
        cta: "Get Emergency Help",
        anchor: "#emergency",
      },
      {
        icon: Layers,
        img: CARPET_IMG,
        color: "#1B6B3A",
        tag: "Most Popular",
        title: "Professional Carpet Care",
        desc: "Deep soil extraction, pet stain & odor removal, carpet repair and restretching. Commercial and residential.",
        points: ["Deep Soil Extraction", "Pet Stain & Odor Removal", "Carpet Repair & Restretching", "Commercial Cleaning"],
        cta: "Schedule Cleaning",
        anchor: "#contact",
      },
      {
        icon: Home,
        img: REMODEL_IMG,
        color: "#C9A84C",
        tag: "Full Service",
        title: "Interior & Exterior Remodeling",
        desc: "Kitchen and bathroom remodels, flooring installation, interior and exterior painting, and full property make-ready services.",
        points: ["Kitchen & Bathroom Remodel", "Flooring Installation", "Interior & Exterior Painting", "Property Make-Ready"],
        cta: "Request a Quote",
        anchor: "#contact",
      },
      {
        icon: Wind,
        img: AIRDUCT_IMG,
        color: "#22A05A",
        tag: "Home Health",
        title: "Air Duct & Dryer Vent Cleaning",
        desc: "Breathe cleaner air and protect your home. We remove dust, allergens, and lint buildup from your HVAC system and dryer vents.",
        points: ["Air Duct Deep Cleaning", "Dryer Vent Cleaning", "Allergen & Dust Removal", "Fire Hazard Prevention"],
        cta: "Schedule Service",
        anchor: "#contact",
      },
    ],
  },
  es: {
    label: "Lo Que Hacemos",
    title: "Cuidado Completo\nde tu Propiedad.",
    sub: "Desde extracción de agua de emergencia hasta remodelaciones completas — Pro Master lo maneja todo con técnicos certificados y garantía de satisfacción.",
    services: [
      {
        icon: Droplets,
        img: WATER_IMG,
        color: "#1A4B84",
        tag: "Emergencias Disponibles",
        title: "Daño por Agua y Restauración",
        desc: "Extracción de agua de respuesta rápida, secado estructural, prevención de moho y restauración completa. Trabajamos con tu aseguradora.",
        points: ["Extracción de Agua 24/7", "Secado Estructural", "Prevención de Moho", "Asistencia con Seguro"],
        cta: "Ayuda de Emergencia",
        anchor: "#emergency",
      },
      {
        icon: Layers,
        img: CARPET_IMG,
        color: "#1B6B3A",
        tag: "Más Popular",
        title: "Limpieza Profesional de Alfombras",
        desc: "Extracción profunda, eliminación de manchas y olores de mascotas, reparación y estiramiento de alfombras.",
        points: ["Extracción Profunda", "Eliminación de Manchas y Olores", "Reparación y Estiramiento", "Limpieza Comercial"],
        cta: "Programar Limpieza",
        anchor: "#contact",
      },
      {
        icon: Home,
        img: REMODEL_IMG,
        color: "#C9A84C",
        tag: "Servicio Completo",
        title: "Remodelación Interior y Exterior",
        desc: "Remodelación de cocinas y baños, instalación de pisos, pintura interior y exterior, y preparación completa de propiedades.",
        points: ["Remodelación de Cocina y Baño", "Instalación de Pisos", "Pintura Interior y Exterior", "Preparación de Propiedad"],
        cta: "Solicitar Cotización",
        anchor: "#contact",
      },
      {
        icon: Wind,
        img: AIRDUCT_IMG,
        color: "#22A05A",
        tag: "Salud del Hogar",
        title: "Limpieza de Ductos y Secadora",
        desc: "Respira aire más limpio y protege tu hogar. Eliminamos polvo, alérgenos y pelusa de tu sistema HVAC y ductos de secadora.",
        points: ["Limpieza Profunda de Ductos", "Limpieza de Ducto de Secadora", "Eliminación de Alérgenos y Polvo", "Prevención de Incendios"],
        cta: "Programar Servicio",
        anchor: "#contact",
      },
    ],
  },
};

interface ServicesProps { lang: Lang; }

export default function ServicesSection({ lang }: ServicesProps) {
  const c = COPY[lang];

  const scrollTo = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="services" style={{ backgroundColor: "#F8F5EF", padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ display: "block", marginBottom: 14 }}>{c.label}</span>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 52px)",
            color: "#0B1F3A", lineHeight: 1.15, marginBottom: 20,
            whiteSpace: "pre-line",
          }}>{c.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <span className="gold-line" />
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            fontSize: 16.5, color: "#5A6B7A", lineHeight: 1.7,
            maxWidth: 580, margin: "0 auto",
          }}>{c.sub}</p>
        </div>

        {/* Cards — 4-column grid on large screens */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 28,
        }}>
          {c.services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="service-card"
                style={{
                  background: "white", borderRadius: 8, overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(11,31,58,0.07)",
                  border: "1px solid rgba(11,31,58,0.06)",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img
                    src={svc.img}
                    alt={`${svc.title} — Pro Master Contractors, Dallas-Fort Worth, TX`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 400ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 30%, rgba(11,31,58,0.75) 100%)",
                  }} />
                  {/* Tag badge top-left */}
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    background: svc.color, color: "white",
                    padding: "4px 10px", borderRadius: 3,
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10.5,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>{svc.tag}</div>
                  {/* Service name bottom-left */}
                  <div style={{
                    position: "absolute", bottom: 14, left: 14,
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 14,
                    color: "white", lineHeight: 1.2,
                    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                    maxWidth: "calc(100% - 70px)",
                  }}>{svc.title}</div>
                  {/* Icon bottom-right */}
                  <div style={{
                    position: "absolute", bottom: 14, right: 14,
                    width: 36, height: 36,
                    background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                    borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}>
                    <Icon size={18} color="white" />
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700,
                    fontSize: 20, color: "#0B1F3A", marginBottom: 10, lineHeight: 1.25,
                  }}>{svc.title}</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                    fontSize: 14.5, color: "#5A6B7A", lineHeight: 1.65, marginBottom: 18,
                  }}>{svc.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 7 }}>
                    {svc.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <CheckCircle size={13} color={svc.color} style={{ flexShrink: 0 }} />
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                          fontSize: 13.5, color: "#3D4F5E",
                        }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo(svc.anchor)}
                    style={{
                      marginTop: "auto",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%", padding: "12px 18px",
                      background: "transparent", border: `2px solid ${svc.color}`,
                      borderRadius: 4, color: svc.color,
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13.5,
                      cursor: "pointer", transition: "all 160ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = svc.color; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = svc.color; }}
                  >
                    {svc.cta}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
