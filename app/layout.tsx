import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const siteUrl = "https://www.opendoorstech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpendoorsTech | AI Integration Architecture & Agentic Workflows",
    template: "%s | OpendoorsTech"
  },
  description:
    "OpendoorsTech designs and builds production AI integration architecture using webhooks, microservices, APIs, and AWS-native agentic workflows.",
  openGraph: {
    title: "OpendoorsTech",
    description:
      "AI integration architecture and agentic workflow automation for HubSpot-first teams running on AWS.",
    url: siteUrl,
    siteName: "OpendoorsTech",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/cropped-logoOpen1-2.png",
        width: 252,
        height: 116,
        alt: "OpendoorsTech logo"
      }
    ]
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/cropped-logoOpen1-2.png",
    apple: "/cropped-logoOpen1-2.png",
    shortcut: "/cropped-logoOpen1-2.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Analytics placeholder: add GA4/Meta Pixel script here. */}
      </body>
    </html>
  );
}
