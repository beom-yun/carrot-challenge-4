import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Billions",
    default: "Billions",
  },
  description: "Billions list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1F2937]`}>
        <Link
          href="/"
          className="flex h-20 items-center justify-center bg-black text-4xl font-bold text-white"
        >
          Billions
        </Link>
        <div className="flex w-full flex-col items-center">{children}</div>
      </body>
    </html>
  );
}
