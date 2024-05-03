import { azerete, epilogue, inter } from "@/lib/customFonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

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
    <html lang="en" className="scroll-smooth">
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
