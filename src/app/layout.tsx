import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Barlow } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata: Metadata = {
 title: "Arena",
  description: "Sports Arena Website",
};
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={`${barlowCondensed.className} ${dmSans.className}`}>
  <body>{children}</body>
</html>
  );
}
