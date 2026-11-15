import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FreeEstimationCtaSection from "@/components/sections/FreeEstimationCtaSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageLoader />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <FreeEstimationCtaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
