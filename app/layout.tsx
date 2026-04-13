import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Yakup Kahraman | Flutter Mobile Developer",
  description:
    "Flutter mobile developer. Experience across C, web, and Python. yakupkahraman.com — open source on GitHub, deployed on Vercel.",
  metadataBase: new URL("https://yakupkahraman.com"),
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-text bg-bg`}
      >
        <LenisProvider>{children}</LenisProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
