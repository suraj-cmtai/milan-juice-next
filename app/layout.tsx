import type { Metadata } from "next";
import { Outfit, Agbalumo, ADLaM_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-agbalumo",
});

const adlam = ADLaM_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-adlam",
});

export const metadata: Metadata = {
  title: "Milan Juice",
  description: "Freshness in Every Sip with Milan Juice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${agbalumo.variable} ${adlam.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
