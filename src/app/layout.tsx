import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hassaan Nizaal — Portfolio",
  description:
    "CLI-style developer portfolio. Explore projects, skills, and experience.",
  keywords: ["portfolio", "software engineer", "developer", "Hassaan Nizaal"],
  authors: [{ name: "Hassaan Nizaal" }],
  openGraph: {
    title: "Hassaan Nizaal — Portfolio",
    description: "CLI-style developer portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
