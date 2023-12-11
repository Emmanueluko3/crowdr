import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MagicProvider from "@/components/magic/MagicProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowdr",
  description: "Crowd funding app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal"></div>
        <MagicProvider>{children}</MagicProvider>
      </body>
    </html>
  );
}
