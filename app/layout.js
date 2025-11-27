import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Arya Engineering Works",
  description:
    "Quality products and on-time delivery from Arya Engineering Works — valves, fittings, and industrial hardware.",
  keywords: [
    "Arya Engineering Works",
    "Arya Engineering",
    "industrial valves",
    "ball valve",
    "gate valve",
    "manufacturing",
    "engineering works",
  ],
  authors: [{ name: "Arya Engineering Works" }],
  creator: "Arya Engineering Works",
  // canonical
  alternates: {
    canonical: "https://aryaew.com/",
  },
  // robots rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph
  openGraph: {
    title: "Arya Engineering Works",
    description:
      "Quality products and on-time delivery from Arya Engineering Works — valves, fittings, and industrial hardware.",
    url: "https://aryaew.com/",
    siteName: "Arya Engineering Works",
    type: "website",
    images: [
      {
        url: "https://aryaew.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arya Engineering Works - Industrial hardware",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aryaew.com/#organization",
      name: "Arya Engineering Works",
      url: "https://aryaew.com/",
      logo: "https://aryaew.com/logo.png",
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8850409725",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://aryaew.com/#website",
      url: "https://aryaew.com/",
      name: "Arya Engineering Works",
      publisher: { "@id": "https://aryaew.com/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
