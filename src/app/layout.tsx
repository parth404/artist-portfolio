import Header from "@/components/portfolio/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant",
  description: "Nishant | Artist . Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-transparent font-poppins">
        <Header />
        {children}
      </body>
    </html>
  );
}
