import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import { SmoothScroll } from "@/components/ui/SmoothScroll"

const neueMontreal = localFont({
  src: "../../public/fonts/neue-montreal-regular.otf",
  variable: "--font-neue-montreal",
})

const perfectlyNineties = localFont({
  src: "../../public/fonts/perfectly-nineties-regular.otf",
  variable: "--font-perfectly-nineties",
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
      <body
        className={`${neueMontreal.variable} ${perfectlyNineties.variable} font-sans`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
