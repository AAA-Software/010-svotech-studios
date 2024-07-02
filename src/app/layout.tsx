import Footer from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";
import { azerete, epilogue, inter } from "@/lib/customFonts";
import { cn, constructMetadata } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata = constructMetadata();

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
