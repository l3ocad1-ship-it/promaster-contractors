/**
 * Home.tsx — Pro Master Contractors
 * Premium single-page website. Navy + Emerald design system.
 * Fonts: Roboto (display) + DM Sans (body)
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WaterDamageSection from "@/components/WaterDamageSection";
import CarpetSection from "@/components/CarpetSection";
import RemodelingSection from "@/components/RemodelingSection";
import AirDuctSection from "@/components/AirDuctSection";
import EmergencySection from "@/components/EmergencySection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import PromoPopup from "@/components/PromoPopup";

export type Lang = "en" | "es";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <ServicesSection lang={lang} />
        <WaterDamageSection lang={lang} />
        <CarpetSection lang={lang} />
        <RemodelingSection lang={lang} />
        <AirDuctSection lang={lang} />
        <EmergencySection lang={lang} />
        <AboutSection lang={lang} />
        <PortfolioSection lang={lang} />
        <ReviewsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <FooterSection lang={lang} />
      <PromoPopup lang={lang} />
    </div>
  );
}
