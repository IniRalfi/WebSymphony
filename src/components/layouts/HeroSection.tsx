"use client"

import React from "react"
import Link from "next/link"

import FlickeringGrid from "../fragments/FlickeringGrid"
import TrailingImage from "./TrailingImage"

export const HeroSection = () => {
  return (
    <section className="relative h-svh overflow-hidden">
      <TrailingImage
        className="relative z-10 size-full"
        images={[
          "/gallery/image1.jpg",
          "/gallery/image2.jpg",
          "/gallery/image3.jpg",
          "/gallery/image4.jpg",
          "/gallery/image5.jpg",
        ]}
      />
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        squareSize={4}
        gridGap={6}
        color="#2100b1"
        maxOpacity={0.03}
        flickerChance={0.1}
      />

      <div className="absolute top-1/2 z-20 h-[70svh] w-full -translate-y-1/2 lg:h-auto">
        <div className="text-primary container flex h-full flex-col justify-between px-4 text-sm lg:flex-row">
          <div className="flex gap-x-3">
            <MenuNav href="/">Beranda</MenuNav>
            <span>/</span>
            <MenuNav href="/mahasiswa">Mahasiswa</MenuNav>
          </div>
          <div className="ml-auto flex gap-x-3 lg:ml-0">
            <MenuNav href="/galeri">Galeri</MenuNav>
            <span>/</span>
            <MenuNav href="/lagu-lagu">Lagu-lagu</MenuNav>
          </div>
        </div>
      </div>
    </section>
  )
}

const MenuNav = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} key={href} className="group flex flex-col gap-y-0.5">
      <p>{children}</p>
      <span className="bg-primary h-px w-0 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}
