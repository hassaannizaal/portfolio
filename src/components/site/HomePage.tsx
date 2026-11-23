import { BackgroundSection } from "./BackgroundSection";
import { CertsSection } from "./CertsSection";
import { Hero } from "./Hero";
import { ProjectsSection } from "./ProjectsSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function HomePage() {
  return (
    <div className="min-h-screen text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectsSection />
        <CertsSection />
        <BackgroundSection />
      </main>
      <SiteFooter />
    </div>
  );
}
