/**
 * HeroSection — Pro Master Contractors
 * Full-viewport hero. Deep navy overlay on premium AI image.
 * Roboto headline, DM Sans body. Emerald + Navy CTAs.
 */
import { Phone, AlertTriangle, CheckCircle, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Lang } from "@/pages/Home";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/hero_premium-bGPsVQPVhHo4TJrinr4Lpv.webp";

const COPY = {
  en: {
    eyebrow: "Dallas-Fort Worth's Trusted Experts",
    headline1: "Restoration &",
    headline2: "Remodeling",
    headline3: "Excellence.",
    sub: "Professional water damage restoration, carpet cleaning, and complete remodeling services — available 24/7 across the DFW metroplex.",
    cta1: "Get a Free Estimate",
    cta2: "24/7 Emergency Line",
    trust: ["Free Estimates", "5-Star Rated", "16+ Years Experience"],
    stats: [
      { num: "16+", label: "Years in Business" },

      { num: "24/7", label: "Emergency Response" },
      { num: "5★", label: "Google Rating" },
    ],
  },
  es: {
    eyebrow: "Los Expertos de Confianza en Dallas-Fort Worth",
    headline1: "Restauración y",
    headline2: "Remodelación",
    headline3: "de Excelencia.",
    sub: "Servicios profesionales de restauración por daño de agua, limpieza de alfombras y remodelación completa — disponibles 24/7 en todo DFW.",
    cta1: "Obtener Estimado Gratis",
    cta2: "Línea de Emergencias 24/7",
    trust: ["Estimados Gratis", "Calificación 5 Estrellas", "16+ Años de Experiencia"],
    stats: [
      { num: "16+", label: "Años en el Negocio" },

      { num: "24/7", label: "Respuesta de Emergencia" },
      { num: "5★", label: "Calificación Google" },
    ],
  },
};

interface HeroProps { lang: Lang; }

export default function HeroSection({ lang }: HeroProps) {
  const c = COPY[lang];
  const videoRef = useRef<HTMLVideoElement>(null);

  // Forzar autoplay: React no aplica bien "muted", así que lo seteamos manualmente
  // y pedimos reproducir. Los navegadores solo permiten autoplay si está silenciado.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={`${import.meta.env.BASE_URL}hero-video-compressed.mp4`} type="video/mp4" />
      </video>

      {/* Deep navy gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.85) 50%, rgba(11,31,58,0.5) 100%)",
      }} />

      {/* Emerald accent top line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, #1B6B3A 0%, #22A05A 60%, transparent 100%)",
      }} />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 130, paddingBottom: 90 }}>
        <div style={{ maxWidth: 660 }}>

          {/* Eyebrow pill */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
              padding: "6px 14px",
              background: "rgba(27,107,58,0.22)",
              border: "1px solid rgba(34,160,90,0.35)",
              borderRadius: 3,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22A05A" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11.5,
              color: "#6EE7A0", letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              {c.eyebrow}
            </span>
          </div>

          {/* Headline — Roboto */}
          <h1 className="animate-fade-up" style={{ animationDelay: "80ms", marginBottom: 24 }}>
            <span style={{
              display: "block",
              fontFamily: "'Roboto', sans-serif", fontWeight: 900,
              fontSize: "clamp(42px, 6.5vw, 80px)",
              color: "white", lineHeight: 1.06,
            }}>{c.headline1}</span>
            <span style={{
              display: "block",
              fontFamily: "'Roboto', sans-serif", fontWeight: 900,
              fontSize: "clamp(42px, 6.5vw, 80px)",
              color: "#22A05A", lineHeight: 1.06,
            }}>{c.headline2}</span>
            <span style={{
              display: "block",
              fontFamily: "'Roboto', sans-serif", fontWeight: 900,
              fontSize: "clamp(42px, 6.5vw, 80px)",
              color: "white", lineHeight: 1.06,
            }}>{c.headline3}</span>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              fontSize: "clamp(15px, 1.8vw, 17.5px)",
              color: "rgba(255,255,255,0.68)", lineHeight: 1.75,
              marginBottom: 32, maxWidth: 540,
              animationDelay: "160ms",
            }}
          >
            {c.sub}
          </p>

          {/* Trust row */}
          <div
            className="animate-fade-up"
            style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", marginBottom: 36, animationDelay: "220ms" }}
          >
            {c.trust.map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <CheckCircle size={13} color="#22A05A" />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 12.5,
                  color: "rgba(255,255,255,0.65)",
                }}>{t}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-up"
            style={{ display: "flex", flexWrap: "wrap", gap: 12, animationDelay: "280ms" }}
          >
            <button onClick={() => scrollTo("#contact")} className="btn-emerald" style={{ fontSize: 15, padding: "14px 28px" }}>
              <Phone size={16} />
              {c.cta1}
            </button>
            <button onClick={() => scrollTo("#emergency")} className="btn-outline-white" style={{ fontSize: 15, padding: "14px 28px" }}>
              <AlertTriangle size={16} />
              {c.cta2}
            </button>
          </div>
        </div>


      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#services")}
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", color: "rgba(255,255,255,0.35)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          cursor: "pointer", zIndex: 2,
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase" }}>Scroll</span>
        <ChevronDown size={15} />
      </button>
    </section>
  );
}
