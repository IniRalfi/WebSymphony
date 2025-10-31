import React from "react"
import { Metadata } from "next"

import { GALLERY } from "@/constants/gallery"

import { MissionaryGalleryLayout } from "@/components/layouts/MissionaryGalleryLayout"

export const metadata: Metadata = {
  title: "Galeri",
  description: "Kegiatan dan kenangan dari angkatan Symphony",
}

export default function GaleriPage() {
  return (
    <main className="pt-38">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div className="text-primary space-y-2">
            <p className="text-lg">Look back at our</p>
            <h1 className="font-serif text-6xl md:text-8xl">Memories</h1>
          </div>
          <p className="text-primary">{GALLERY.length} Kenangan</p>
        </div>
        <MissionaryGalleryLayout gallery={GALLERY} />
      </div>
      <div className="py-24">
        <p className="text-primary text-center text-sm">
          Hal kecil terkadang{" "}
          <span className="font-serif text-[0.94rem] font-extrabold">
            bermakna besar
          </span>{" "}
          di masa depan.
        </p>
      </div>
    </main>
  )
}
