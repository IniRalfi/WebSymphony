"use client"

import React, { useRef } from "react"

import { ABOUT_SLIDER } from "@/constants/aboutSlider"

import { useContainerDimensions } from "@/hooks/useContainerDimensions"

import { MotionCard } from "../ui/MotionCard"

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerDimensions(containerRef)
  return (
    <section className="py-8">
      <div className="container mb-10">
        <p className="mb-1 text-sm">Tentang</p>
        <h1 className="text-8xl">Symphony</h1>
      </div>
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {ABOUT_SLIDER.map((item, i) => (
          <MotionCard
            key={i}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            containerWidth={width}
            speed={item.speed}
            top={item.top}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  )
}
