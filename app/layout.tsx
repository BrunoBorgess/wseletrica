import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://wseletrica.vercel.app"; // troca pelo domínio real quando tiver
const CIDADE = "Cuiabá"; // ex: "São José do Rio Preto"
const UF = "MT";

const title = "WS Elétrica e Refrigeração | Ar-Condicionado e Elétrica";
const description =
  "Instalação e manutenção de ar-condicionado, refrigeração e serviços elétricos residenciais, comerciais e industriais. Peça seu orçamento com a WS Elétrica.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "WS Elétrica e Refrigeração",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WS Elétrica e Refrigeração - Ar-condicionado, refrigeração e instalações elétricas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Electrician", "HVACBusiness"],
  name: "WS Elétrica e Refrigeração",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+5565993502835", // troca pelo telefone real (mesmo do WhatsApp)
  address: {
    "@type": "PostalAddress",
    addressLocality: CIDADE,
    addressRegion: UF,
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: CIDADE },
  sameAs: ["https://www.instagram.com/ws.eletrica_e_refrigeracao_/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: [
      "Instalação de ar-condicionado",
      "Manutenção de ar-condicionado",
      "Refrigeração",
      "Instalação elétrica residencial",
      "Instalação elétrica comercial e industrial",
      "Padrão de entrada e quadro de distribuição",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}