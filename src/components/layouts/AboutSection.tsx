"use client"

import React, { useRef } from "react"

import { ABOUT_SLIDER } from "@/constants/aboutSlider"
import { motion, useScroll, useTransform } from "motion/react"

import { Card } from "../ui/Card"

export const AboutSection = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])
  return (
    <section ref={cardContainerRef} className="realative h-[200vh]">
      <div className="sticky top-0 min-h-screen py-8">
        <div className="container mb-10">
          <p className="mb-1 text-sm">Tentang</p>
          <h1 className="text-8xl">Symphony</h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="relative flex items-center gap-x-8"
            style={{ x }}
          >
            {ABOUT_SLIDER.map((item, i) => (
              <Card
                key={i}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
