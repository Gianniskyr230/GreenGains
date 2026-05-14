/*
 * GREEN GAINS — Home Page
 * Assembles all sections: Navbar, Hero, Products, Services, Impact, Community, Footer
 * Design: Biophilic Gradient Organism — deep forest dark theme with glowing green accents
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProductsSection /> 
      <ServicesSection />
      <ImpactSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
