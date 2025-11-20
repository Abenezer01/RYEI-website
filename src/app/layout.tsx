import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RYEI – Rural Youth Empowerment Initiative",
  description: "Empowering rural youth through entrepreneurship, cooperative development, technology, and skills training in Ethiopia.",
  keywords: ["youth development", "rural empowerment", "NGO", "Ethiopia", "capacity building", "RYEI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col bg-background text-body`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}