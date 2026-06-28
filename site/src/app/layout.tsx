import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lunara IT — Servicio técnico y soluciones IT en Buenos Aires",
  description:
    "Reparación de PCs, armado a medida, redes e infraestructura para pymes, y ciberseguridad. Técnico cercano y resolutivo en Buenos Aires.",
  keywords: [
    "servicio técnico PC",
    "reparación computadoras Buenos Aires",
    "infraestructura IT pymes",
    "ciberseguridad empresas",
    "redes cableado",
    "Lunara IT",
  ],
  openGraph: {
    title: "Lunara IT",
    description: "Tecnología cercana para personas y empresas.",
    type: "website",
    locale: "es_AR",
    siteName: "Lunara IT",
  },
  metadataBase: new URL("https://lunarait.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lunara IT",
  description:
    "Servicio técnico de PCs, redes, infraestructura IT y ciberseguridad para pymes en Buenos Aires.",
  url: "https://lunarait.com",
  telephone: "+5491100000000",
  email: "hola@lunarait.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: ["https://instagram.com/lunarait"],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
