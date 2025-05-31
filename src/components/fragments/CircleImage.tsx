"use client"

import React, { useEffect, useRef, useState } from "react"

export const CircleImage = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState(0)

  useEffect(() => {
    if (imageContainerRef.current) {
      setRadius(imageContainerRef.current.offsetWidth / 2.2)
    }
  }, [imageContainerRef])

  return (
    <div ref={imageContainerRef} className="relative size-full">
      {Array.from({ length: 28 }).map((src, i) => {
        const angle = (i * 360) / 28

        const x = radius * Math.cos((angle * Math.PI) / 180)
        const y = radius * Math.sin((angle * Math.PI) / 180)

        return (
          <div
            key={i}
            className="absolute h-10 w-7 overflow-hidden bg-red-500"
            style={{
              left: `calc(50% + ${x}px - 0.875rem)` /* half of width */,
              top: `calc(50% + ${y}px - 1.25rem)` /* half of height */,
              transform: `rotate(${angle + 90}deg)`,
            }}
          ></div>
        )
      })}
    </div>
  )
}
