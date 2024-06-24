import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ThreadSphere",
    template: "%s | ThreadSphere",
  },
  description: "Stay tuned with what's happening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} min-w-[350px] `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
