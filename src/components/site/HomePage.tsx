import { BackgroundSection } from "./BackgroundSection";
import { CertsSection } from "./CertsSection";
import { CodexBackdrop } from "./CodexBackdrop";
import { DraftingRail } from "./DraftingRail";
import { Hero } from "./Hero";
import { ProjectsSection } from "./ProjectsSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function HomePage() {
  return (
    <div className="relative min-h-screen text-ink">
      <CodexBackdrop />
      <DraftingRail />
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
