import React from "react"

import { CircleImage } from "../fragments/CircleImage"

export const HeroSection = () => {
  return (
    <section className="bg-primary relative h-svh overflow-hidden">
      <div className="relative z-10 container flex h-full items-center justify-center text-white">
        <h1 className="text-sm">
          Symphony, <span className="underline">Generasi emas</span> pilihan
          kamu.
        </h1>
        <p className="absolute bottom-8 left-4 hidden text-xs leading-relaxed lg:block">
          <span className="font-semibold">“Smart system, strong synergy”</span>
          <br />
          Dengan <span className="font-semibold">teknologi</span>, buat
          perubahan yang <span className="font-semibold">berarti.</span>
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 aspect-square h-full -translate-x-1/2 -translate-y-1/2">
        <CircleImage />
      </div>
    </section>
  )
}
