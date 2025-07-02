import type React from "react";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "RIKESD - Research, Innovation, Knowledge, Enterprise & Sustainable Development",
    template: "%s | RIKESD",
  },
  description:
    "RIKESD is a Pan-African led organization transforming communities through Research, Innovation, Knowledge, Enterprise and Sustainable Development. Join our global network of researchers, innovators, and entrepreneurs.",
  keywords: [
    "RIKESD",
    "Research",
    "Innovation",
    "Knowledge",
    "Enterprise",
    "Sustainable Development",
    "Pan-African",
    "S2B",
    "School to Business",
    "AroFarmer",
    "Skillnovate",
    "KEIA",
    "Research Funding",
    "Innovation Lab",
    "Academic Research",
    "Technology Transfer",
    "Entrepreneurship",
    "Nigeria",
    "Africa",
    "Research Network",
  ],
  authors: [{ name: "RIKESD Team" }],
  creator: "RIKESD",
  publisher: "RIKESD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rikesd.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rikesd.org",
    title: "RIKESD - Empowering Communities Through Research & Innovation",
    description:
      "Join RIKESD's global network of researchers and innovators. Transform your research ideas into impactful solutions through our structured programs, funding opportunities, and expert community.",
    siteName: "RIKESD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RIKESD - Research, Innovation, Knowledge, Enterprise & Sustainable Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIKESD - Empowering Communities Through Research & Innovation",
    description:
      "Transform your research ideas into impactful solutions. Join our global network of researchers, innovators, and entrepreneurs.",
    images: ["/twitter-image.jpg"],
    creator: "@rikesd_org",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Research & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RIKESD" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Fonts - Bricolage Grotesque */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RIKESD",
              alternateName:
                "Research, Innovation, Knowledge, Enterprise & Sustainable Development",
              url: "https://rikesd.org",
              logo: "https://rikesd.org/logo.png",
              description:
                "RIKESD is a Pan-African led organization transforming communities through Research, Innovation, Knowledge, Enterprise and Sustainable Development.",
              foundingDate: "2015",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Logan Street",
                addressLocality: "Abuja",
                addressCountry: "Nigeria",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348066301780",
                contactType: "customer service",
                email: "contact@rikesd.org",
              },
              sameAs: [
                "https://linkedin.com/company/rikesd",
                "https://twitter.com/rikesd_org",
                "https://instagram.com/rikesd_org",
                "https://youtube.com/@rikesd",
              ],
              areaServed: {
                "@type": "Place",
                name: "Africa",
              },
              knowsAbout: [
                "Research and Development",
                "Innovation Management",
                "Technology Transfer",
                "Entrepreneurship",
                "Sustainable Development",
                "Academic-Industry Partnerships",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Analytics and tracking scripts would go here */}
        {/* Google Analytics, Facebook Pixel, etc. */}
      </body>
    </html>
  );
}
