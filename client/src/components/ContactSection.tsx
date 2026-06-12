/**
 * ContactSection — Pro Master Contractors
 * Cream background. Left: info + phone. Right: form. Roboto + DM Sans. Navy + Emerald.
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Lang } from "@/pages/Home";

const COPY = {
  en: {
    label: "Get In Touch",
    title: "Request Your\nFree Estimate.",
    sub: "Fill out the form and we'll get back to you within 2 hours. For emergencies, call us directly.",
    phone: "(214) 555-1234",
    email: "info@promastercontractors.com",
    address: "Dallas-Fort Worth Metroplex, TX",
    hours: "Mon–Fri 8am–6pm | Emergency 24/7",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Service Needed",
      message: "Describe your project or issue",
      submit: "Send My Request",
      services: ["Water Damage Restoration", "Carpet Cleaning", "Interior Remodeling", "Emergency Service", "Property Management", "Other"],
    },
    success: "Thank you! We'll contact you within 2 hours.",
  },
  es: {
    label: "Contáctanos",
    title: "Solicita Tu\nEstimado Gratis.",
    sub: "Llena el formulario y te respondemos en 2 horas. Para emergencias, llámanos directamente.",
    phone: "(214) 555-1234",
    email: "info@promastercontractors.com",
    address: "Área Metropolitana de Dallas-Fort Worth, TX",
    hours: "Lun–Vie 8am–6pm | Emergencias 24/7",
    form: {
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      service: "Servicio Necesario",
      message: "Describe tu proyecto o problema",
      submit: "Enviar Mi Solicitud",
      services: ["Restauración por Daño de Agua", "Limpieza de Alfombras", "Remodelación Interior", "Servicio de Emergencia", "Administración de Propiedades", "Otro"],
    },
    success: "¡Gracias! Te contactaremos en 2 horas.",
  },
};

interface ContactProps { lang: Lang; }

export default function ContactSection({ lang }: ContactProps) {
  const c = COPY[lang];
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("service", form.service);
      data.append("message", form.message);

      const res = await fetch("/enviar.php", { method: "POST", body: data });
      const result = await res.json();

      if (result.success) {
        setSent(true);
      } else {
        setError(lang === "es" ? "No se pudo enviar. Intenta de nuevo o llámanos." : "Could not send. Please try again or call us.");
      }
    } catch {
      setError(lang === "es" ? "No se pudo enviar. Intenta de nuevo o llámanos." : "Could not send. Please try again or call us.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 14.5,
    color: "#0B1F3A", background: "white",
    border: "1.5px solid rgba(11,31,58,0.15)",
    borderRadius: 5, outline: "none",
    transition: "border-color 150ms ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 12,
    color: "#0B1F3A", letterSpacing: "0.06em", textTransform: "uppercase",
    display: "block", marginBottom: 6,
  };

  const contactItems = [
    { icon: Phone, text: c.phone, href: "tel:+12145551234" },
    { icon: Mail, text: c.email, href: `mailto:${c.email}` },
    { icon: MapPin, text: c.address, href: undefined },
    { icon: Clock, text: c.hours, href: undefined },
  ];

  return (
    <section id="contact" style={{ background: "#F8F5EF", padding: "100px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>

          {/* Left — Info */}
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: 14 }}>{c.label}</span>
            <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#0B1F3A", lineHeight: 1.15, marginBottom: 20, whiteSpace: "pre-line" }}>{c.title}</h2>
            <span className="gold-line" style={{ display: "block", marginBottom: 20 }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 16, color: "#5A6B7A", lineHeight: 1.75, marginBottom: 40 }}>{c.sub}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 40, height: 40, flexShrink: 0, background: "rgba(27,107,58,0.1)", border: "1px solid rgba(27,107,58,0.2)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={17} color="#1B6B3A" />
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15, color: "#0B1F3A", lineHeight: 1.5, paddingTop: 10 }}>{item.text}</div>
                  </div>
                );
                return item.href
                  ? <a key={i} href={item.href} style={{ textDecoration: "none" }}>{inner}</a>
                  : <div key={i}>{inner}</div>;
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: "white", borderRadius: 8, padding: "40px 36px", boxShadow: "0 8px 40px rgba(11,31,58,0.1)", border: "1px solid rgba(11,31,58,0.06)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, background: "rgba(27,107,58,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#1B6B3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 22, color: "#0B1F3A", marginBottom: 12 }}>{c.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>{c.form.name}</label>
                    <input required style={inputStyle} placeholder={c.form.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#1B6B3A")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>{c.form.phone}</label>
                    <input style={inputStyle} placeholder={c.form.phone} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#1B6B3A")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>{c.form.email}</label>
                  <input required type="email" style={inputStyle} placeholder={c.form.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#1B6B3A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")} />
                </div>
                <div>
                  <label style={labelStyle}>{c.form.service}</label>
                  <select required style={{ ...inputStyle, appearance: "none" }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#1B6B3A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")}>
                    <option value="">{c.form.service}</option>
                    {c.form.services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{c.form.message}</label>
                  <textarea required rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder={c.form.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#1B6B3A")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(11,31,58,0.15)")} />
                </div>
                {error && (
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 500,
                    color: "#B91C1C", background: "rgba(185,28,28,0.08)",
                    border: "1px solid rgba(185,28,28,0.2)", borderRadius: 5,
                    padding: "10px 14px",
                  }}>
                    {error}
                  </div>
                )}
                <button type="submit" disabled={sending} className="btn-primary" style={{ fontSize: 15, marginTop: 4, opacity: sending ? 0.7 : 1 }}>
                  {sending ? (lang === "es" ? "Enviando..." : "Sending...") : `${c.form.submit} →`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
