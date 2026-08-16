import { portfolio } from "@/data/portfolio";
import { BinaryMap } from "./BinaryMap";
import { SplitCta } from "./SplitCta";

export function Hero() {
  const headline = portfolio.headline.split("\n");

  return (
    <section id="top" className="relative min-h-svh lg:h-svh">
      <div className="grid min-h-svh lg:h-full lg:grid-cols-12">
        <div className="flex flex-col justify-center px-6 pb-12 pt-28 lg:col-span-6 lg:px-16 lg:pt-8 xl:px-20">
          <p className="mb-5 font-mono text-[15px] uppercase">
            {portfolio.eyebrow}
          </p>
          <h1 className="mb-8 text-balance text-[40px] font-medium leading-none tracking-tight lg:text-[46px]">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mb-10 max-w-md text-[17px] leading-relaxed text-fg/70 lg:text-[18px]">
            {portfolio.bio}
          </p>
          <SplitCta href={`mailto:${portfolio.email}`} left="Email" right="me" />

          <div className="mt-16 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] uppercase tracking-wide text-fg/70">
            {portfolio.stack.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
            {portfolio.available && <span>Available</span>}
          </div>
        </div>

        <div className="relative h-[58vh] min-h-[320px] overflow-hidden lg:col-span-6 lg:col-start-7 lg:h-full lg:min-h-0">
          <BinaryMap />
        </div>
      </div>
    </section>
  );
}
