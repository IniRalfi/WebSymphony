import React from "react"
import Image from "next/image"

export const JargonSection = () => {
  return (
    <section className="min-h-screen py-30 md:py-34 lg:py-64">
      <div className="text-primary container grid grid-cols-3 items-center gap-y-12">
        <div className="col-span-3 lg:col-span-1">
          <h1 className="text-center font-serif text-6xl md:text-8xl lg:text-start">
            Smart System,
          </h1>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Image
            src="/gallery/bukber.png"
            alt="Symphony (galengkap sii)"
            width={600}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <h1 className="text-center font-serif text-6xl md:text-8xl lg:text-end">
            Strong Synergy.
          </h1>
        </div>
      </div>
    </section>
  )
}
