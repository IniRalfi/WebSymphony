import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import { SideNav } from "@/components/fragments/SideNav"
import { StickyFooter } from "@/components/fragments/StickyFooter"
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
  title: {
    template: "%s | Symphony",
    default: "Symphony",
  },
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
        className={`${neueMontreal.variable} ${perfectlyNineties.variable} relative font-sans`}
      >
        <SmoothScroll />
        {children}
        <SideNav />
        <StickyFooter />
      </body>
    </html>
  )
}
