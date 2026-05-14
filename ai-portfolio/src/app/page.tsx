import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import AIChatAssistant from "@/components/AIChatAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-primary/30">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Floating AI Chat Assistant */}
      <AIChatAssistant />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Rachana. Built with Next.js, Framer Motion, and AI.</p>
      </footer>
    </main>
  );
}
