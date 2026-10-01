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

const title = "WS Elétrica | Instalações e Manutenção Elétrica";
const description =
  "A WS Elétrica é especializada em serviços elétricos residenciais, comerciais e industriais, com soluções seguras, eficientes e com total responsabilidade.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wseletrica.vercel.app"), // troca pelo domínio real do site
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "WS Elétrica",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "WS Elétrica - Instalações e Manutenção Elétrica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/seo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}