"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { GALLERY } from "@/constants/gallery"
import { motion } from "motion/react"

export const CircleImage = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState(0)

  useEffect(() => {
    if (imageContainerRef.current) {
      setRadius(imageContainerRef.current.offsetWidth / 2.2)
    }
  }, [imageContainerRef])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 3, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 2, delay: 0.1, type: "spring" }}
      ref={imageContainerRef}
      className="relative size-full"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="relative size-full"
      >
        {GALLERY.map((item, i) => {
          const angle = (i * 360) / 28

          const x = radius * Math.cos((angle * Math.PI) / 180)
          const y = radius * Math.sin((angle * Math.PI) / 180)

          return (
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={400}
              key={i}
              className="absolute h-10 w-7 object-cover object-center transition-all backface-visible hover:scale-150 hover:rotate-y-180"
              style={{
                left: `calc(50% + ${x}px - 0.875rem)` /* half of width */,
                top: `calc(50% + ${y}px - 1.25rem)` /* half of height */,
                transform: `rotate(${angle + 90}deg)`,
              }}
            />
          )
        })}
      </motion.div>
    </motion.div>
  )
}
