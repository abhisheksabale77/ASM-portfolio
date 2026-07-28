import type { Metadata } from "next";
import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adv. Abdul Mulla | Advocate & Author",
  description:
    "Professional portfolio of Adv. Abdul Mulla — Advocate, Author, Blogger, and Legal Awareness Contributor.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${hankenGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
