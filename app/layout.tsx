import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Yakup Kahraman | Flutter & AI Developer",
  description:
    "Flutter developer and Computer Engineering student at Yıldız Technical University. Cross-platform apps and applied AI — Flutter, Next.js, FastAPI, Supabase, and LLM integration. yakupkahraman.com — open source on GitHub, deployed on Vercel.",
  metadataBase: new URL("https://yakupkahraman.com"),
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-text bg-bg`}
      >
        <LenisProvider>{children}</LenisProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
