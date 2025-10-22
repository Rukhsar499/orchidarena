import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "PSM Turf – Premium Football Arenas Across West Bengal",
  description: "Experience top-quality football at PSM Turf. Multiple locations, floodlit fields, and expert facilities for players of all levels. Book your game today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.className} ${dmSans.className}`}>
      <body>
        {/* Client wrapper handles conditional header/footer */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
