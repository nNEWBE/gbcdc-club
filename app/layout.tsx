import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GBCDC - Gono Bishwabidyalay Career Development Club",
  description:
    "Empowering students with skills, leadership, and career opportunities for a brighter future. Gono Bishwabidyalay Career Development Club (GBCDC).",
  keywords: [
    "GBCDC",
    "Gono Bishwabidyalay",
    "Career Development",
    "University Club",
    "Student Development",
    "Bangladesh",
  ],
  openGraph: {
    title: "GBCDC - Gono Bishwabidyalay Career Development Club",
    description:
      "Empowering students with skills, leadership, and career opportunities for a brighter future.",
    type: "website",
  },
  icons: {
    icon: "/GBCDC logo Icon.png",
    apple: "/GBCDC logo Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
