/**
 * Navbar — Pro Master Contractors
 * Desktop: Services dropdown with 4 sub-links + rest of nav + lang toggle + CTA.
 * Mobile: logo + lang + hamburger; drawer with expandable Services sub-menu.
 * Roboto / DM Sans. Navy #0B1F3A + Emerald #22A05A palette.
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, Phone, ChevronDown, Droplets, Layers, Home, Wind } from "lucide-react";
import type { Lang } from "@/pages/Home";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const SERVICE_ITEMS = {
  en: [
    { label: "Water Damage & Restoration", anchor: "#water", icon: Droplets, color: "#1A4B84" },
    { label: "Professional Carpet Care",   anchor: "#carpet",  icon: Layers,   color: "#1B6B3A" },
    { label: "Interior & Exterior Remodeling", anchor: "#remodeling", icon: Home, color: "#C9A84C" },
    { label: "Air Duct & Dryer Vent Cleaning", anchor: "#airduct", icon: Wind, color: "#22A05A" },
  ],
  es: [
    { label: "Daño por Agua y Restauración", anchor: "#water", icon: Droplets, color: "#1A4B84" },
    { label: "Limpieza de Alfombras",         anchor: "#carpet",  icon: Layers,   color: "#1B6B3A" },
    { label: "Remodelación Interior y Exterior", anchor: "#remodeling", icon: Home, color: "#C9A84C" },
    { label: "Limpieza de Ductos y Secadora", anchor: "#airduct", icon: Wind, color: "#22A05A" },
  ],
};

const OTHER_LINKS = {
  en: ["Emergency", "About", "Our Work", "Reviews", "Contact"],
  es: ["Emergencias", "Nosotros", "Nuestro Trabajo", "Reseñas", "Contacto"],
};
const OTHER_ANCHORS = ["#emergency", "#about", "#portfolio", "#reviews", "#contact"];

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    setDropOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 80);
  }, []);

  const services  = SERVICE_ITEMS[lang];
  const otherLinks = OTHER_LINKS[lang];
  const servicesLabel = lang === "en" ? "Services" : "Servicios";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(11,31,58,0.97)" : "rgba(11,31,58,0.6)",
          boxShadow: scrolled ? "0 2px 32px rgba(0,0,0,0.35)" : "none",
          backdropFilter: "blur(14px)",
          transition: "background 300ms ease, box-shadow 300ms ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 16px",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none", border: "none", padding: 0,
              cursor: "pointer", flexShrink: 0,
              display: "flex", alignItems: "center",
            }}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663460319800/iFrgACYRTTGqAJcI.png"
              alt="Pro Master Contractors"
              style={{
                width: "clamp(130px, 28vw, 180px)",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}
          >
            {/* Services dropdown */}
            <div ref={dropRef} style={{ position: "relative" }}>
              <button
                onClick={() => setDropOpen(!dropOpen)}
                style={{
                  background: dropOpen ? "rgba(255,255,255,0.1)" : "none",
                  border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13.5,
                  color: dropOpen ? "white" : "rgba(255,255,255,0.82)",
                  padding: "6px 13px", borderRadius: 4,
                  display: "flex", alignItems: "center", gap: 5,
                  transition: "color 150ms, background 150ms",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => {
                  if (!dropOpen) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                    e.currentTarget.style.background = "none";
                  }
                }}
              >
                {servicesLabel}
                <ChevronDown
                  size={13}
                  style={{
                    transition: "transform 200ms ease",
                    transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Dropdown panel */}
              {dropOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 280,
                    background: "rgba(9,24,45,0.98)",
                    backdropFilter: "blur(20px)",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                    padding: "8px",
                    zIndex: 100,
                    animation: "dropFadeIn 150ms ease forwards",
                  }}
                >
                  {services.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <button
                        key={svc.anchor}
                        onClick={() => scrollTo(svc.anchor)}
                        style={{
                          display: "flex", alignItems: "center", gap: 12,
                          width: "100%", padding: "11px 12px",
                          background: "none", border: "none", cursor: "pointer",
                          borderRadius: 6,
                          transition: "background 130ms",
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                      >
                        <div style={{
                          width: 32, height: 32, borderRadius: 6, flexShrink: 0,
                          background: `${svc.color}22`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon size={15} color={svc.color} />
                        </div>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13,
                          color: "rgba(255,255,255,0.88)", lineHeight: 1.3,
                        }}>{svc.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other nav links */}
            {otherLinks.map((link, i) => (
              <button
                key={link}
                onClick={() => scrollTo(OTHER_ANCHORS[i])}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13.5,
                  color: "rgba(255,255,255,0.82)",
                  padding: "6px 13px", borderRadius: 4,
                  transition: "color 150ms, background 150ms",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.82)"; e.currentTarget.style.background = "none"; }}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 8, flexShrink: 0 }}>
            <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: 2 }}>
              {(["en", "es"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? "white" : "transparent",
                    color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.65)",
                    border: "none", borderRadius: 16,
                    padding: "3px 10px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10.5,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    transition: "all 150ms ease", cursor: "pointer",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="tel:+12148825483"
              className="btn-emerald"
              style={{ padding: "8px 16px", fontSize: 13, gap: 6, borderRadius: 4, whiteSpace: "nowrap" }}
            >
              <Phone size={13} />
              (214) 882-5483
            </a>
          </div>

          {/* Mobile right: lang pill + hamburger */}
          <div className="flex lg:hidden" style={{ alignItems: "center", gap: 6, flexShrink: 0 }}>
            <div style={{ display: "flex", background: "rgba(255,255,255,0.12)", borderRadius: 20, padding: "2px" }}>
              {(["en", "es"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? "white" : "transparent",
                    color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.7)",
                    border: "none", borderRadius: 16,
                    padding: "3px 9px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    transition: "all 150ms ease", cursor: "pointer",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                background: mobileOpen ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                width: 42, height: 42,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", cursor: "pointer",
                transition: "background 150ms",
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 80, left: 0, right: 0,
          zIndex: 49,
          background: "rgba(9,24,45,0.99)",
          backdropFilter: "blur(20px)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 300ms cubic-bezier(0.23,1,0.32,1)",
          borderBottom: "1px solid rgba(74,222,128,0.15)",
          paddingBottom: 24,
          maxHeight: "calc(100vh - 80px)",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 20px 0" }}>
          <nav style={{ display: "flex", flexDirection: "column" }}>

            {/* Services expandable */}
            <div>
              <button
                onClick={() => setMobileServOpen(!mobileServOpen)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17,
                  color: "rgba(255,255,255,0.88)",
                  padding: "15px 0", textAlign: "left",
                  borderBottom: mobileServOpen ? "none" : "1px solid rgba(255,255,255,0.06)",
                  transition: "color 150ms",
                  width: "100%",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                {servicesLabel}
                <ChevronDown
                  size={16}
                  color="rgba(255,255,255,0.6)"
                  style={{
                    transition: "transform 200ms ease",
                    transform: mobileServOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {/* Sub-items */}
              {mobileServOpen && (
                <div style={{
                  paddingLeft: 12,
                  paddingBottom: 8,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  {services.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <button
                        key={svc.anchor}
                        onClick={() => scrollTo(svc.anchor)}
                        style={{
                          display: "flex", alignItems: "center", gap: 12,
                          width: "100%", padding: "12px 8px",
                          background: "none", border: "none", cursor: "pointer",
                          borderRadius: 6,
                          transition: "background 130ms",
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                      >
                        <div style={{
                          width: 30, height: 30, borderRadius: 6, flexShrink: 0,
                          background: `${svc.color}22`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon size={14} color={svc.color} />
                        </div>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14.5,
                          color: "rgba(255,255,255,0.78)", lineHeight: 1.3,
                        }}>{svc.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other links */}
            {otherLinks.map((link, i) => (
              <button
                key={link}
                onClick={() => scrollTo(OTHER_ANCHORS[i])}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17,
                  color: "rgba(255,255,255,0.88)",
                  padding: "15px 0", textAlign: "left",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  transition: "color 150ms, padding-left 150ms",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.paddingLeft = "8px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.88)"; e.currentTarget.style.paddingLeft = "0"; }}
              >
                {link}
              </button>
            ))}
          </nav>

          <a
            href="tel:+12148825483"
            className="btn-emerald"
            style={{
              marginTop: 20,
              display: "flex", width: "100%",
              justifyContent: "center", alignItems: "center",
              gap: 8, borderRadius: 8,
              padding: "15px 20px", fontSize: 16,
              fontWeight: 700,
            }}
          >
            <Phone size={18} />
            {lang === "en" ? "Call Now — Free Estimate" : "Llamar Ahora — Estimado Gratis"}
          </a>
        </div>
      </div>

      {/* Dropdown animation */}
      <style>{`
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}
