"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { GalleryType } from "@/constants/gallery"
import { motion } from "framer-motion"

type Props = {
  gallery: GalleryType[number]
  priority?: boolean
}

export const CardGallery = ({ gallery, priority = false }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  // Split text into individual characters for stagger animation
  const titleChars = gallery.title.split("")
  const invitationChars = "Ayo lihat!".split("")

  const charVariants = {
    initial: { y: 0 },
    hover: { y: "-100%" },
    exit: { y: 0 },
  }

  const invitationVariants = {
    initial: { y: "100%" },
    hover: { y: "0%" },
    exit: { y: "100%" },
  }

  return (
    <Link href={`/galeri/${gallery.id}`}>
      <motion.div
        className="h-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="rounded-lg bg-gray-100"
          width={800}
          height={800}
          src={gallery.src}
          alt={gallery.title}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          draggable={false}
        />
        <div className="mt-1.5 space-y-0.5">
          <div className="text-primary relative overflow-hidden px-1 text-xs md:text-sm md:[word-spacing:0.2em]">
            <div className="flex">
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "exit"}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.01,
                    ease: [0.25, 0.46, 0.45, 0.94], // power2.inOut equivalent
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 flex">
              {invitationChars.map((char, index) => (
                <motion.span
                  key={index}
                  variants={invitationVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "exit"}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.01,
                    ease: [0.25, 0.46, 0.45, 0.94], // power2.inOut equivalent
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
