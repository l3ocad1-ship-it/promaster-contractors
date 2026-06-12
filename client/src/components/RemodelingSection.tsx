/**
 * RemodelingSection — Interior & Exterior Remodeling
 * Design: Two-column layout. Left: eyebrow + title + description + 4 feature cards + CTA.
 * Right: premium kitchen image. Background: light cream (#F8F5EF) for contrast with dark sections.
 * Palette: Navy #0B1F3A, Emerald #22A05A, Cream #F8F5EF
 */

import { useEffect, useRef, useState } from "react";
import {
  Home,
  Layers,
  Paintbrush,
  KeyRound,
  ArrowRight,
} from "lucide-react";

const REMODELING_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/remodeling_section-5J3rvuPHHDBzmokwAWe5tw.webp";

const features = [
  {
    icon: Home,
    title: "Kitchen & Bathroom Remodel",
    desc: "Custom cabinetry, countertops, tile work, and full gut renovations",
  },
  {
    icon: Layers,
    title: "Flooring Installation",
    desc: "Hardwood, luxury vinyl, tile, and carpet — installed to perfection",
  },
  {
    icon: Paintbrush,
    title: "Interior & Exterior Painting",
    desc: "Clean, durable finishes that protect and beautify every surface",
  },
  {
    icon: KeyRound,
    title: "Property Make-Ready",
    desc: "Full unit turnover services for landlords and property managers",
  },
];

export default function RemodelingSection({ lang = "en" }: { lang?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleQuote = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="remodeling"
      ref={sectionRef}
      style={{ backgroundColor: "#F8F5EF" }}
      className="py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN — Content */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "#22A05A" }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "#22A05A" }}
              >
                Full Service Remodeling
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-4"
              style={{ color: "#0B1F3A", fontFamily: "'Roboto', sans-serif" }}
            >
              Your Space,{" "}
              <span style={{ color: "#22A05A" }}>Completely</span>{" "}
              Transformed.
            </h2>

            {/* Description */}
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "#4A5568" }}
            >
              Whether you're updating a single room or preparing an entire
              property for new tenants, Pro Master Contractors delivers
              high-quality remodeling with zero stress. From design to final
              walkthrough — we handle it all.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-700"
                  style={{
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 12px rgba(11,31,58,0.07)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(34,160,90,0.12)" }}
                  >
                    <f.icon
                      size={20}
                      style={{ color: "#22A05A" }}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm mb-1"
                      style={{ color: "#0B1F3A" }}
                    >
                      {f.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#718096" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleQuote}
                className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: "#0B1F3A",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(11,31,58,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#22A05A";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(34,160,90,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0B1F3A";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(11,31,58,0.25)";
                }}
              >
                Request a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
              <span className="text-sm" style={{ color: "#718096" }}>
                No obligation — response within 24 hours
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN — Image */}
          <div
            className="relative transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "150ms",
            }}
          >
            {/* Badge */}
            <div
              className="absolute top-5 left-5 z-10 px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase"
              style={{
                backgroundColor: "rgba(11,31,58,0.85)",
                color: "#fff",
                backdropFilter: "blur(6px)",
              }}
            >
              Full Service
            </div>

            {/* Image */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(11,31,58,0.18)" }}
            >
              <img
                src={REMODELING_IMAGE}
                alt="Premium kitchen remodel by Pro Master Contractors"
                className="w-full h-full object-cover"
                style={{ maxHeight: "600px" }}
                loading="lazy"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -right-4 sm:-right-6 px-5 py-4 rounded-xl"
              style={{
                backgroundColor: "#22A05A",
                boxShadow: "0 8px 30px rgba(34,160,90,0.4)",
              }}
            >
              <p className="text-2xl font-black text-white leading-none">500+</p>
              <p className="text-xs text-white/80 mt-1 font-medium">
                Projects Completed
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
