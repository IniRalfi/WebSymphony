"use client"

import { GalleryType } from "@/constants/gallery"

import { useWindowSize } from "@/hooks/useWindowSize"

import { CardGallery } from "../fragments/CardGallery"

type Props = {
  gallery: GalleryType
}
export const MissionaryGalleryLayout = ({ gallery }: Props) => {
  const window = useWindowSize()

  if (!window) return null

  let numberOfArrays = 1
  if (window.innerWidth >= 1024) {
    // lg
    numberOfArrays = 4
  } else if (window.innerWidth >= 768) {
    // md
    numberOfArrays = 2
  }

  const MISSIONARY_DESIGN: GalleryType[] = Array.from(
    { length: numberOfArrays },
    () => []
  )
  gallery.forEach((item, index) => {
    const arrayIndex = index % numberOfArrays
    MISSIONARY_DESIGN[arrayIndex].push(item)
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {MISSIONARY_DESIGN.map((design, i) => (
        <div key={i} className="flex flex-col gap-y-4">
          {design.map((item, i) => (
            <div key={i} className="h-fit">
              <CardGallery gallery={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
