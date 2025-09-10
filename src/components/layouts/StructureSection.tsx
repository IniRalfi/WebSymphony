import React from "react"

import { CLASS_COORDINATORS } from "@/constants/classCoordinators"

import { CardGradient } from "../fragments/CardGradient"

export const StructureSection = () => {
  return (
    <section className="mt-36 min-h-screen">
      <div className="container py-12">
        <div className="grid grid-cols-5 gap-y-8 md:gap-x-24">
          <div className="col-span-5 lg:col-span-2">
            <div className="text-primary sticky top-16 space-y-2 lg:space-y-4">
              <p className="text-lg">Meet Our</p>
              <h1 className="font-serif text-6xl md:text-8xl">
                Class Coordinator
              </h1>
            </div>
          </div>
          <div className="col-span-5 grid gap-2 md:grid-cols-2 md:gap-4 lg:col-span-3">
            {CLASS_COORDINATORS.map((item, index) => (
              <CardGradient key={index} coordinator={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
