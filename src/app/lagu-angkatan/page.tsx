import React from "react"
import { Metadata } from "next"

import Lirik from "@/components/ui/Lirik"

export const metadata: Metadata = {
  title: "Lagu Angkatan",
  description: "Lagu angkatan Symphony",
}

export default function page() {
  return (
    <main className="pt-28">
      <div className="container">
        <div className="text-primary mb-12 space-y-2 text-center md:mb-24">
          <p className="text-lg">Listen and play our harmony</p>
          <h1 className="font-serif text-6xl md:text-8xl">Mars Symphony</h1>
        </div>
        <Lirik />
      </div>
      <div className="py-24">
        <p className="text-primary text-center text-sm">
          Sekilas harmoni yang lahir dari jiwa kami.
        </p>
      </div>
    </main>
  )
}
