import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "contact",
  description: "Sports Narayana Website",
};


export default function ConatctLayout({
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
