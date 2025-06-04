import React, { useRef } from "react"
import Image from "next/image"

import { motion } from "motion/react"

import { useContainerDimensions } from "@/hooks/useContainerDimensions"

type Props = {
  img: string
  title: string
  subtitle: string
  containerWidth: number
  speed?: number
  top: number
  delay: number
}

export const MotionCard = ({
  img,
  title,
  subtitle,
  containerWidth,
  speed = 30,
  top,
  delay,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerDimensions(cardRef)

  return (
    <motion.div
      animate={{
        x: [`${containerWidth + 50}px`, `-${width + 50}px`],
      }}
      transition={{
        x: {
          repeat: Infinity,
          duration: speed,
          repeatType: "loop",
          ease: "linear",
          delay: delay,
        },
      }}
      ref={cardRef}
      style={{
        top: `${top}%`,
      }}
      className="absolute z-10"
    >
      <Image
        src={img}
        alt={title}
        width={600}
        height={600}
        className="w-64 object-cover"
      />
      <p className="mt-2 -mb-1 text-xs">{subtitle}</p>
      <p className="text-lg font-medium">{title}</p>
    </motion.div>
  )
}
