"use client"

import React, { useRef } from "react"

import { motion, useInView } from "motion/react"

export const NameSection = () => {
  const texts =
    'Symphony yang memiliki arti "Sistem Informasi Pengembang Optimasi dan Inovasi." Kata ini dipilih untuk melambangkan harmoni dan kolaborasi di antara mahasiswa yang berperan sebagai pengembang.'.split(
      " "
    )
  const textContainerRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(textContainerRef, { amount: 0.5, once: true })
  return (
    <section className="container py-20 lg:py-32">
      <h2
        ref={textContainerRef}
        className="text-primary mb-10 text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl"
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
                type: "easeInOut",
              }}
              className="inline-block"
            >
              {index == 0 ? (
                <span className="pl-20">{text}</span>
              ) : (
                <>
                  {index > 3 && index < 10 ? (
                    <span className="font-serif italic">{text}</span>
                  ) : (
                    text
                  )}
                </>
              )}
            </motion.span>{" "}
          </span>
        ))}

        {/* <span className="pl-20">Symphony</span> yang memiliki arti{" "}
        <span className="font-serif">
          &quot;Sistem Informasi Pengembang Optimasi dan Inovasi,&quot;
        </span>{" "}
        Kata ini dipilih untuk melambangkan harmoni dan kolaborasi di antara
        mahasiswa yang berperan sebagai pengembang. */}
      </h2>
      <div className="flex justify-center">
        <svg
          viewBox="0 0 177 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-auto md:h-8 lg:h-10"
        >
          <path
            d="M88.2898 0L75.2578 44.9844L40.199 14.2519L53.333 59.2059L7.37709 52.4828L42.5058 83.1339L0.243164 102.554L46.2145 109.171L21.0649 148.57L63.2825 129.051L63.2291 175.919L88.2898 136.462L113.35 175.919L113.297 129.051L155.515 148.57L130.365 109.171L176.336 102.554L134.074 83.1339L169.202 52.4828L123.247 59.2059L136.38 14.2519L101.322 44.9844L88.2898 0Z"
            fill="#2100b1"
          />
        </svg>
      </div>
    </section>
  )
}
