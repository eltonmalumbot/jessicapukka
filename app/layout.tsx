import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Harmony e-Solution | Precision in Every Cut", template: "%s | Harmony e-Solution" },
  description: "Industrial fabric spreading, automatic cutting, and supporting machinery for modern production.",
  openGraph: { title: "Harmony e-Solution", description: "Precision in Every Cut", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Harmony e-Solution", description: "Precision in Every Cut", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
