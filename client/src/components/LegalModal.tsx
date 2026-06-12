/**
 * LegalModal — Pro Master Contractors
 * Ventana emergente para Terms & Conditions y Privacy Policy. Bilingüe (en/es).
 * NOTA: Texto de plantilla. Debe ser revisado por un abogado antes de uso final.
 */
import { useEffect } from "react";
import { X } from "lucide-react";
import type { Lang } from "@/pages/Home";

export type LegalType = "terms" | "privacy" | null;

interface LegalModalProps {
  type: LegalType;
  lang: Lang;
  onClose: () => void;
}

const CONTENT = {
  terms: {
    en: {
      title: "Terms & Conditions",
      updated: "Last updated: June 2026",
      sections: [
        { h: "1. Acceptance of Terms", p: "By accessing this website or requesting services from Pro Master Contractors, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services." },
        { h: "2. Services", p: "Pro Master Contractors provides water damage restoration, carpet cleaning, interior and exterior remodeling, property make-ready, and related emergency services throughout the Dallas-Fort Worth metroplex. The scope of any project will be defined in a written estimate or service agreement." },
        { h: "3. Estimates & Pricing", p: "All estimates are provided free of charge and are valid for 30 days unless otherwise stated. Final pricing may vary based on site conditions, materials, and the actual scope of work discovered during the project. Any change in scope will be communicated and approved before additional work proceeds." },
        { h: "4. Scheduling & Cancellations", p: "Service appointments are scheduled based on availability. We ask for at least 24 hours' notice for cancellations or rescheduling. Emergency services are available 24/7 and may be subject to additional fees." },
        { h: "5. Workmanship & Warranty", p: "We stand behind our work. Warranty terms for labor and materials will be specified in your service agreement. Warranties do not cover damage caused by misuse, neglect, or events outside our control." },
        { h: "6. Insurance Claims", p: "We work with most major insurance carriers for restoration projects. The customer remains responsible for their deductible and for any amounts not covered by their insurance policy." },
        { h: "7. Payment", p: "Payment terms will be outlined in your estimate or agreement. We accept standard payment methods. Late payments may be subject to fees as permitted by Texas law." },
        { h: "8. Limitation of Liability", p: "To the fullest extent permitted by law, Pro Master Contractors shall not be liable for indirect, incidental, or consequential damages arising from the use of our website or services." },
        { h: "9. Governing Law", p: "These Terms are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts located in the Dallas-Fort Worth area." },
        { h: "10. Contact", p: "Questions about these Terms? Contact us at mycarpetclean@promastercontractors.com." },
      ],
    },
    es: {
      title: "Términos y Condiciones",
      updated: "Última actualización: Junio 2026",
      sections: [
        { h: "1. Aceptación de los Términos", p: "Al acceder a este sitio web o solicitar servicios de Pro Master Contractors, usted acepta quedar sujeto a estos Términos y Condiciones. Si no está de acuerdo, por favor no utilice nuestro sitio web ni nuestros servicios." },
        { h: "2. Servicios", p: "Pro Master Contractors ofrece restauración por daño de agua, limpieza de alfombras, remodelación interior y exterior, preparación de propiedades y servicios de emergencia relacionados en toda el área metropolitana de Dallas-Fort Worth. El alcance de cada proyecto se definirá en un estimado escrito o acuerdo de servicio." },
        { h: "3. Estimados y Precios", p: "Todos los estimados se ofrecen sin costo y son válidos por 30 días salvo que se indique lo contrario. El precio final puede variar según las condiciones del lugar, los materiales y el alcance real del trabajo. Cualquier cambio en el alcance se comunicará y aprobará antes de continuar." },
        { h: "4. Citas y Cancelaciones", p: "Las citas se programan según disponibilidad. Solicitamos al menos 24 horas de aviso para cancelaciones o reprogramaciones. Los servicios de emergencia están disponibles 24/7 y pueden tener cargos adicionales." },
        { h: "5. Mano de Obra y Garantía", p: "Respaldamos nuestro trabajo. Los términos de garantía de mano de obra y materiales se especificarán en su acuerdo de servicio. Las garantías no cubren daños causados por mal uso, negligencia o eventos fuera de nuestro control." },
        { h: "6. Reclamos de Seguro", p: "Trabajamos con la mayoría de las aseguradoras para proyectos de restauración. El cliente sigue siendo responsable de su deducible y de cualquier monto no cubierto por su póliza de seguro." },
        { h: "7. Pago", p: "Los términos de pago se detallarán en su estimado o acuerdo. Aceptamos métodos de pago estándar. Los pagos atrasados pueden estar sujetos a cargos según lo permita la ley de Texas." },
        { h: "8. Limitación de Responsabilidad", p: "En la máxima medida permitida por la ley, Pro Master Contractors no será responsable de daños indirectos, incidentales o consecuentes derivados del uso de nuestro sitio web o servicios." },
        { h: "9. Ley Aplicable", p: "Estos Términos se rigen por las leyes del Estado de Texas. Cualquier disputa se resolverá en los tribunales ubicados en el área de Dallas-Fort Worth." },
        { h: "10. Contacto", p: "¿Preguntas sobre estos Términos? Contáctenos en mycarpetclean@promastercontractors.com." },
      ],
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "Last updated: June 2026",
      sections: [
        { h: "1. Information We Collect", p: "We collect information you provide directly, such as your name, email, phone number, address, and project details when you fill out our contact form or request an estimate. We may also collect basic usage data through your browser." },
        { h: "2. How We Use Your Information", p: "We use your information to respond to inquiries, provide estimates, schedule and perform services, process payments, and communicate with you about your project. We do not sell your personal information." },
        { h: "3. Sharing of Information", p: "We may share your information with trusted service providers (such as subcontractors or insurance carriers) only as needed to complete your project, and with authorities when required by law." },
        { h: "4. Cookies", p: "Our website may use basic cookies to improve your browsing experience. You can disable cookies through your browser settings, though some features may not work as intended." },
        { h: "5. Data Security", p: "We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security." },
        { h: "6. Your Rights", p: "You may request to access, correct, or delete the personal information we hold about you by contacting us. We will respond in accordance with applicable Texas and federal law." },
        { h: "7. Third-Party Links", p: "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites." },
        { h: "8. Changes to This Policy", p: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date." },
        { h: "9. Contact", p: "Questions about your privacy? Contact us at mycarpetclean@promastercontractors.com." },
      ],
    },
    es: {
      title: "Política de Privacidad",
      updated: "Última actualización: Junio 2026",
      sections: [
        { h: "1. Información que Recopilamos", p: "Recopilamos la información que usted proporciona directamente, como su nombre, correo, teléfono, dirección y detalles del proyecto cuando completa nuestro formulario o solicita un estimado. También podemos recopilar datos básicos de uso a través de su navegador." },
        { h: "2. Cómo Usamos su Información", p: "Usamos su información para responder consultas, brindar estimados, programar y realizar servicios, procesar pagos y comunicarnos con usted sobre su proyecto. No vendemos su información personal." },
        { h: "3. Compartir Información", p: "Podemos compartir su información con proveedores de confianza (como subcontratistas o aseguradoras) solo cuando sea necesario para completar su proyecto, y con autoridades cuando la ley lo exija." },
        { h: "4. Cookies", p: "Nuestro sitio web puede usar cookies básicas para mejorar su experiencia de navegación. Puede desactivar las cookies en la configuración de su navegador, aunque algunas funciones podrían no operar correctamente." },
        { h: "5. Seguridad de los Datos", p: "Tomamos medidas razonables para proteger su información personal. Sin embargo, ningún método de transmisión por internet es 100% seguro, y no podemos garantizar una seguridad absoluta." },
        { h: "6. Sus Derechos", p: "Puede solicitar acceder, corregir o eliminar la información personal que tenemos sobre usted contactándonos. Responderemos conforme a la ley aplicable de Texas y federal." },
        { h: "7. Enlaces a Terceros", p: "Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad ni del contenido de esos sitios." },
        { h: "8. Cambios a esta Política", p: "Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios se publicarán en esta página con una fecha actualizada." },
        { h: "9. Contacto", p: "¿Preguntas sobre su privacidad? Contáctenos en mycarpetclean@promastercontractors.com." },
      ],
    },
  },
};

export default function LegalModal({ type, lang, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [type, onClose]);

  if (!type) return null;

  const data = CONTENT[type][lang];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(11,31,58,0.7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white", borderRadius: 10,
          maxWidth: 640, width: "100%", maxHeight: "85vh",
          display: "flex", flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 28px", borderBottom: "1px solid rgba(11,31,58,0.1)",
          flexShrink: 0,
        }}>
          <div>
            <h2 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, fontSize: 22, color: "#0B1F3A", margin: 0 }}>{data.title}</h2>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "#8A97A6" }}>{data.updated}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 36, height: 36, borderRadius: 6, border: "none",
              background: "rgba(11,31,58,0.06)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <X size={18} color="#0B1F3A" />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div style={{ padding: "24px 28px", overflowY: "auto" }}>
          {data.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#0B1F3A", marginBottom: 6 }}>{s.h}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 14, color: "#5A6B7A", lineHeight: 1.7, margin: 0 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
