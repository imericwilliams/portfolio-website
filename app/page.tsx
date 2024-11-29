import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 mx-auto px-4 sm:px-6">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      </main>
  );
}

