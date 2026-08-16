import { portfolio } from "@/data/portfolio";
import { BinaryMap } from "./BinaryMap";
import { SplitCta } from "./SplitCta";

export function Hero() {
  const headline = portfolio.headline.split("\n");

  return (
    <section id="top" className="relative min-h-svh lg:h-svh">
      <div className="grid min-h-svh lg:h-full lg:grid-cols-12">
        <div className="flex flex-col justify-center px-6 pb-14 pt-28 lg:col-span-6 lg:px-16 lg:pb-8 lg:pt-8 xl:px-20">
          <p
            className="rise mb-5 font-mono text-[13px] uppercase tracking-[0.14em] text-fg/60"
            style={{ animationDelay: "60ms" }}
          >
            {portfolio.eyebrow}
          </p>
          <h1
            className="rise mb-7 text-balance text-[40px] font-medium leading-[1.02] tracking-tight lg:text-[52px]"
            style={{ animationDelay: "140ms" }}
          >
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p
            className="rise mb-10 max-w-[30rem] text-[17px] leading-[1.6] text-fg/70 lg:text-[18px]"
            style={{ animationDelay: "220ms" }}
          >
            {portfolio.bio}
          </p>
          <div className="rise" style={{ animationDelay: "300ms" }}>
            <SplitCta
              href={`mailto:${portfolio.email}`}
              left="Email"
              right="me"
            />
          </div>
        </div>

        <div className="relative h-[62vh] min-h-[340px] overflow-hidden lg:col-span-6 lg:col-start-7 lg:h-full lg:min-h-0">
          <BinaryMap />
        </div>
      </div>
    </section>
  );
}
