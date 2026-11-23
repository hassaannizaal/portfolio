import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0d0b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hassaannizaal.dev"),
  title: "Hassaan Nizaal — Software Engineer",
  description:
    "Portfolio of Hassaan Nizaal — full-stack software engineer building scalable web applications, realtime backend systems, and cloud infrastructure.",
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
      "Full-stack software engineer building scalable web applications, realtime backend systems, and cloud infrastructure.",
    type: "website",
    url: "https://hassaannizaal.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="archival-paper min-h-full font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
