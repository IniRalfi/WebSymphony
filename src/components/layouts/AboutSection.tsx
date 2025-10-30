"use client"

import React, { useRef } from "react"

import { motion, useInView, useScroll, useTransform } from "motion/react"

export const AboutSection = () => {
  const bottomTextRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(textContainerRef, { amount: 0.5, once: true })
  const { scrollYProgress } = useScroll({
    target: bottomTextRef,
    offset: ["start end", "end start"],
  })

  // Transform scrollYProgress menjadi nilai Y yang terus terupdate
  const yTransform = useTransform(scrollYProgress, [0, 1], [-50, 50])

  const texts =
    "Harmoni dari langkah kami yang bergerak dalam satu irama. Kami adalah Angkatan 2024 Sistem Informasi — generasi yang lahir di tengah derasnya teknologi. Di balik kode, diskusi, dan kolaborasi, kami belajar, tumbuh, dan melahirkan ide-ide baru.".split(
      " "
    )
  return (
    <section className="mt-20 overflow-y-clip">
      <div className="text-primary container mb-28 grid grid-cols-12">
        <div className="col-span-12 grid h-fit grid-cols-2 items-end lg:col-span-7">
          <h1 className="font-serif text-6xl md:text-7xl">Symphony</h1>
          <p className="hidden text-sm md:block">
            What is
            <br />
            this thing?
          </p>
        </div>

        <div className="col-span-12 pt-10 lg:col-span-5 lg:pt-2">
          <p
            ref={textContainerRef}
            className="text-xl leading-relaxed font-semibold md:text-2xl lg:text-3xl"
          >
            {texts.map((text, index) => (
              <span key={index} className="overflow-text">
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: isInView ? "0%" : "100%" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.02,
                    type: "spring",
                  }}
                  className="inline-block"
                >
                  {index == 0 ? (
                    <span className="pl-20">{text}</span>
                  ) : (
                    <>
                      {index > 10 && index < 15 ? (
                        <span className="font-serif italic">{text}</span>
                      ) : (
                        text
                      )}
                    </>
                  )}
                </motion.span>{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
      <motion.div ref={bottomTextRef} style={{ y: yTransform }}>
        <div className="flex w-dvw justify-center overflow-x-clip">
          <h2 className="text-primary -mb-12 -ml-20 rotate-[5deg] font-serif text-[18rem] leading-[0.8] italic select-none md:-mb-20 md:-ml-24 md:text-[32rem] lg:-ml-[16rem] lg:text-[60rem]">
            2024
          </h2>
        </div>
      </motion.div>
    </section>
  )
}
