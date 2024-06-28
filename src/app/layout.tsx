import Footer from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";
import { azerete, epilogue, inter } from "@/lib/customFonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "SvoTech Studios - Full Service Agency",
  description: "Full-service agency for SAAS products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <GoogleTagManager gtmId="G-XT7H6H69J9" />
      <body
        className={cn(
          "antialiased bg-black select-none",
          `${azerete.variable} ${epilogue.variable} ${inter.variable}`
        )}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
