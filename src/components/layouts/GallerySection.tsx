import React from "react"

import { GALLERY_IN_HOMEPAGE } from "@/constants/gallery"

import { MissionaryGalleryLayout } from "./MissionaryGalleryLayout"

export const GallerySection = () => {
  return (
    <section className="container mt-8">
      <h1 className="text-primary mb-20 text-center font-serif text-6xl md:text-8xl">
        Our Gallery
      </h1>
      <MissionaryGalleryLayout gallery={GALLERY_IN_HOMEPAGE} />
    </section>
  )
}
