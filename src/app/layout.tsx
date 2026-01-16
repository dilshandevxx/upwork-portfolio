import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/ui/cursor";
import { Noise } from "@/components/ui/noise";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevPortfolio | Award Winning",
  description: "Minimalist portfolio for a web developer.",
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
          "antialiased bg-background text-foreground min-h-screen cursor-none", // Hide default cursor
          inter.variable,
          syne.variable
        )}
      >
        <SmoothScroll>
          <Noise />
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
