import { Hero } from "./Hero";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function HomePage() {
  return (
    <div className="bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
      </main>
      <SiteFooter />
    </div>
  );
}
