import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f3ec",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hassaannizaal.dev"),
  title: "Hassaan Nizaal — Software Engineer",
  description:
    "Portfolio of Hassaan Nizaal — full-stack software engineer building scalable web applications, backend systems, and cloud infrastructure.",
  keywords: [
    "portfolio",
    "software engineer",
    "Hassaan Nizaal",
    "full stack",
    "TypeScript",
  ],
  authors: [{ name: "Hassaan Nizaal" }],
  openGraph: {
    title: "Hassaan Nizaal — Software Engineer",
    description:
      "Full-stack software engineer building scalable web applications, backend systems, and cloud infrastructure.",
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
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="archival-paper min-h-full font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
