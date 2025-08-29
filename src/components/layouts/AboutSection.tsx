"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"

import { ABOUT_SLIDER } from "@/constants/aboutSlider"
import { AnimationPlaybackControlsWithThen, useAnimate } from "motion/react"

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scope, animate] = useAnimate()
  const controlRef = useRef<AnimationPlaybackControlsWithThen | null>(null)

  useEffect(() => {
    controlRef.current = animate(
      scope.current,
      {
        x: [`0vw`, `-100vw`],
      },
      {
        repeat: Infinity,
        duration: 30,
        repeatType: "loop",
        ease: "linear",
      }
    )
    return () => {
      controlRef.current?.stop()
    }
  }, [animate, scope])

  return (
    <section ref={containerRef} className="relative overflow-hidden py-8">
      <div className="relative z-10 container mb-1">
        <p className="mb-1 text-sm">Tentang</p>
        <h1 className="text-8xl">Symphony</h1>
      </div>
      <div ref={scope} className="inline-flex">
        <Images controlRef={controlRef} />
        <Images controlRef={controlRef} />
      </div>
    </section>
  )
}

const Images = ({
  controlRef,
}: {
  controlRef: React.RefObject<AnimationPlaybackControlsWithThen | null>
}) => {
  return (
    <div className="relative block h-screen w-screen">
      {ABOUT_SLIDER.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => {
            controlRef.current?.pause()
          }}
          onMouseLeave={() => {
            controlRef.current?.play()
          }}
          className="absolute"
          style={{
            top: `${item.top}%`,
            left: `${item.left}px`,
          }}
        >
          <Image
            src={item.img}
            alt={item.title}
            width={600}
            height={600}
            className="w-64 object-cover"
          />
          <p className="mt-2 -mb-1 text-xs">{item.subtitle}</p>
          <p className="text-lg font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  )
}
