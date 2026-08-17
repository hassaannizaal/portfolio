import type { PortfolioData } from "@/lib/types";

export const portfolio: PortfolioData = {
  name: "Hassaan Nizaal",
  title: "Software Engineer",
  eyebrow: "Software engineer.",
  headline: "Hassaan Nizaal",
  bio: "I'm a software developer, enthusiastic about leveraging technology to provide digital solutions for the greater good of humanity",
  email: "hassaannizaal1@gmail.com",
  github: "https://github.com/hassaannizaal",
  linkedin: "https://www.linkedin.com/in/muhammad-hassaan-nizaal-69342a220/",
  instagram: "https://instagram.com/hassaannizaal",
  phone: "+92 333 040 1603",
};

export const contactLinks = [
  { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
  {
    label: "GitHub",
    value: portfolio.github.replace(/^https?:\/\//, ""),
    href: portfolio.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-hassaan-nizaal",
    href: portfolio.linkedin,
  },
  {
    label: "Instagram",
    value: "@hassaannizaal",
    href: portfolio.instagram,
  },
  {
    label: "Phone",
    value: portfolio.phone,
    href: `tel:${portfolio.phone.replace(/\s/g, "")}`,
  },
];
