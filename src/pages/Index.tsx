import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/sections/ContactSection";
import Industry from "./Industry";

const Index = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="min-h-screen">
      <Header  />
      <main>
        {isAuthenticated && (
          <div className="flex justify-end p-4">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        )}
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection isAuthenticated={isAuthenticated} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;