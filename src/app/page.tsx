import { HomeSection } from "@/features/home/HomeSection";
import { SkillsSection } from "@/features/skills/SkillsSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { EducationSection } from "@/features/education/EducationSection";
import { AchievementsSection } from "@/features/achievements/AchievementsSection";
import { ContactSection } from "@/features/contact/ContactSection";

export default function Home() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
