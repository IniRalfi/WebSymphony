"use client"

import React from "react"

import { motion } from "motion/react"

import { CircleImage } from "../fragments/CircleImage"
import { ChangingText } from "../ui/ChangingText"

export const HeroSection = () => {
  return (
    <section className="bg-primary pb-10">
      <div className="relative h-svh overflow-hidden">
        <div className="pointer-events-none relative z-10 container flex h-full items-center justify-center text-white">
          <ChangingText />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-8 left-4 hidden text-xs leading-relaxed lg:block"
          >
            <span className="text-sm italic">
              “Smart system, strong synergy”
            </span>
            <br />
            Dengan teknologi, buat perubahan yang berarti.
          </motion.p>
        </div>
        <div className="absolute top-1/2 left-1/2 z-20 aspect-square h-full -translate-x-1/2 -translate-y-1/2">
          <CircleImage />
        </div>
      </div>
    </section>
  )
}
