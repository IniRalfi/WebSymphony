import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"

import { Navbar } from "@/components/fragments/Navbar"
import { SmoothScroll } from "@/components/ui/SmoothScroll"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Symphony",
  description: "Website resmi Symphony 2024",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}`}>
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
