import { BackgroundSection } from "./BackgroundSection";
import { CertsSection } from "./CertsSection";
import { Hero } from "./Hero";
import { ProjectsSection } from "./ProjectsSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function HomePage() {
  return (
    <div className="bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <BackgroundSection />
        <ProjectsSection />
        <CertsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
