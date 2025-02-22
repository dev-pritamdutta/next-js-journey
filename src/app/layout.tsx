import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="bg-slate-700  text-zinc-50 w-full h-16 flex justify-between items-center px-20">
            <Link href="/">Home</Link>

            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>

        <footer className="absolute  bottom-0 text-center bg-slate-800  text-zinc-50 w-full h-8 " >
          <h6 className="text-xs text-center mt-2">@2025 All rights reserved.pritam</h6>
        </footer>
      </body>
    </html>
  );
}
