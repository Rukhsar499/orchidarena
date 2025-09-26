import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
 title: "Arena",
  description: "Sports Arena Website",
};


export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}
