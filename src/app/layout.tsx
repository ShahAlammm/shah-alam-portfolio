import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from '../provider/TanStackProvider';
import Navbar from "@/components/sections/Navbar";
import { Toaster } from "react-hot-toast";
import StarsCanvas from "@/components/elements/StarBackground";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My  portfolio",
  description: "Port folio of",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black/[0.96] bg-grid-white/[0.02]`}>
        <TanStackProvider>
          <Navbar />
          <Toaster />
          <StarsCanvas/>
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
