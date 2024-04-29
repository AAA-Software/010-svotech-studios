import { azerete, epilogue } from "@/lib/customFonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-black select-none",
          `${azerete.variable} ${epilogue.variable}`
        )}
      >
        {children}
      </body>
    </html>
  );
}
