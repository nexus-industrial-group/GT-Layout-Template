import type { Metadata } from "next";
import { EB_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Encabezados
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Texto de cuerpo general
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

// Texto pequeño: footer, descripciones, labels, eyebrows
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Law Office of Gary Tabakman, PLLC",
  description: "Houston Criminal Law and Family Law",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${garamond.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
