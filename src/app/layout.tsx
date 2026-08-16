import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f1eee7",
};

export const metadata: Metadata = {
  title: "Hassaan Nizaal — Software Engineer",
  description: "Software engineer. Full-stack web, TypeScript, shipped work.",
  keywords: ["portfolio", "software engineer", "Hassaan Nizaal"],
  authors: [{ name: "Hassaan Nizaal" }],
  openGraph: {
    title: "Hassaan Nizaal — Software Engineer",
    description: "Software engineer. Full-stack web, TypeScript, shipped work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
