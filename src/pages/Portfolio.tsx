
import ProfileHeader from "@/components/portfolio/ProfileHeader";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import PortfolioFooter from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-[#15192a]">
      <ProfileHeader />
      
      <main className="container mx-auto py-20 px-4 md:px-6">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <PortfolioFooter />
    </div>
  );
};

export default Portfolio;
