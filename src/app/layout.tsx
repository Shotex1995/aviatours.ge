import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AviaTours.ge — ტურები საუკეთესო ფასებით",
  description:
    "საუკეთესო ტურისტული პაკეტები საქართველოდან მსოფლიოს ნებისმიერ წერტილში. რომი, მილანი, მადრიდი, სტამბოლი, დუბაი, მალდივები და სხვა.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body
        className={`${geistSans.variable} min-h-screen bg-gray-50 font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
