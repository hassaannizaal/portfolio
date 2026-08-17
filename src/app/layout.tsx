import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f1eee7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hassaannizaal.dev"),
  title: "Hassaan Nizaal — Software Engineer",
  description: "Software engineer. Full-stack web, TypeScript, shipped work.",
  keywords: ["portfolio", "software engineer", "Hassaan Nizaal"],
  authors: [{ name: "Hassaan Nizaal" }],
  openGraph: {
    title: "Hassaan Nizaal — Software Engineer",
    description: "Software engineer. Full-stack web, TypeScript, shipped work.",
    type: "website",
    url: "https://hassaannizaal.dev",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${pixelify.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
