import React from "react"

import { MAHASISWA } from "@/constants/mahasiswa"

import { CardMahasiswa } from "@/components/fragments/CardMahasiswa"

export default function MahasiwaPage() {
  return (
    <main className="pt-38">
      <div className="container">
        <div className="flex items-end justify-between">
          <div className="text-primary space-y-2">
            <p className="text-lg">Meet Our Excellent</p>
            <h1 className="font-serif text-6xl md:text-8xl">Humans</h1>
          </div>
          <p className="text-primary">{MAHASISWA.length} Mahasiswa</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 *:transition *:duration-300 md:grid-cols-3 md:gap-4 lg:grid-cols-5 [&:has(:hover)>*:not(:hover)]:scale-[98%] [&:has(:hover)>*:not(:hover)]:blur-xs">
          {MAHASISWA.map((student, index) => (
            <CardMahasiswa
              key={student.nim}
              student={student}
              priority={index < 8} // Priority load for first 8 images (above the fold)
            />
          ))}
        </div>
      </div>
      <div className="py-24">
        <p className="text-primary text-center text-sm">
          Tak kenal maka tak tahu:)
        </p>
      </div>
    </main>
  )
}
