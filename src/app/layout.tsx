import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "CVDubai - Professional CV Builder | Land Your Next Job in Dubai",
  description:
    "Build a professional CV in 5 minutes. AI-powered, designed for Dubai professionals. 3 premium templates, instant PDF download. Starting at 25 AED.",
  keywords: [
    "CV builder Dubai",
    "resume builder UAE",
    "professional CV",
    "Dubai jobs",
    "AI resume",
  ],
  openGraph: {
    title: "CVDubai - Get a Professional CV in 5 Minutes",
    description:
      "Laid off in Dubai? Build a stunning CV that gets interviews. AI-powered, 3 premium templates, instant download.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CVDubai - Professional CV Builder",
    description:
      "Build a professional CV in 5 minutes. Designed for Dubai professionals.",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
