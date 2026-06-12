/**
 * PromoPopup — Pro Master Contractors
 * Appears after 5 seconds. Premium navy/emerald design. Self-managed state.
 */
import { useEffect, useState } from "react";
import { X, Tag } from "lucide-react";
import type { Lang } from "@/pages/Home";

const COPY = {
  en: {
    badge: "Limited Time Offer",
    title: "Get 15% OFF Your First Service",
    sub: "New customers only. Valid for Carpet Cleaning or Water Extraction.",
    code: "PROMASTER15",
    codeLabel: "Use code at checkout:",
    cta: "Claim My Discount",
    dismiss: "No thanks, I'll pay full price",
  },
  es: {
    badge: "Oferta por Tiempo Limitado",
    title: "Obtén 15% de Descuento en Tu Primer Servicio",
    sub: "Solo para nuevos clientes. Válido para Limpieza de Alfombras o Extracción de Agua.",
    code: "PROMASTER15",
    codeLabel: "Usa el código al reservar:",
    cta: "Reclamar Mi Descuento",
    dismiss: "No gracias, pagaré el precio completo",
  },
};

interface PromoPopupProps { lang: Lang; }

export default function PromoPopup({ lang }: PromoPopupProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const c = COPY[lang];

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("promoSeen");
    if (alreadySeen) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("promoSeen", "1");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(c.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    dismiss();
    setTimeout(() => {
      const el = document.querySelector("#contact");
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    }, 200);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0, zIndex: 9998,
          background: "rgba(11,31,58,0.65)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed", zIndex: 9999,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(480px, calc(100vw - 32px))",
        background: "white",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(11,31,58,0.35)",
        animation: "popIn 250ms cubic-bezier(0.23,1,0.32,1)",
      }}>
        {/* Top accent bar */}
        <div style={{ height: 4, background: "linear-gradient(90deg, #1A4B84 0%, #22A05A 100%)" }} />

        {/* Close button */}
        <button
          onClick={dismiss}
          style={{
            position: "absolute", top: 16, right: 16,
            width: 32, height: 32,
            background: "rgba(11,31,58,0.07)", border: "none",
            borderRadius: "50%", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 150ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(11,31,58,0.14)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(11,31,58,0.07)")}
        >
          <X size={16} color="#0B1F3A" />
        </button>

        <div style={{ padding: "32px 36px 28px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 12px",
            background: "rgba(34,160,90,0.1)",
            border: "1px solid rgba(34,160,90,0.25)",
            borderRadius: 3, marginBottom: 20,
          }}>
            <Tag size={12} color="#1B6B3A" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 11, color: "#1B6B3A", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.badge}</span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: "clamp(20px, 4vw, 26px)",
            color: "#0B1F3A", lineHeight: 1.2, marginBottom: 12,
          }}>{c.title}</h2>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 14.5, color: "#5A6B7A", lineHeight: 1.65, marginBottom: 24 }}>{c.sub}</p>

          {/* Code box */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 11.5, color: "#5A6B7A", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>{c.codeLabel}</div>
            <button
              onClick={copyCode}
              style={{
                width: "100%", padding: "14px 20px",
                background: "#F8F5EF",
                border: "2px dashed rgba(27,107,58,0.4)",
                borderRadius: 6, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "border-color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#22A05A")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(27,107,58,0.4)")}
            >
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 22, color: "#1A4B84", letterSpacing: "0.12em" }}>{c.code}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 12, color: copied ? "#1B6B3A" : "#5A6B7A" }}>
                {copied ? "✓ Copied!" : "Click to copy"}
              </span>
            </button>
          </div>

          {/* CTA */}
          <button onClick={scrollToContact} className="btn-primary" style={{ width: "100%", fontSize: 15, justifyContent: "center" }}>
            {c.cta} →
          </button>

          {/* Dismiss */}
          <button
            onClick={dismiss}
            style={{
              display: "block", width: "100%", marginTop: 12,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 12.5,
              color: "#9AA5B1", background: "none", border: "none", cursor: "pointer",
              textAlign: "center",
            }}
          >{c.dismiss}</button>
        </div>
      </div>
    </>
  );
}
