"use client"

import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

const texts = [
  "Generasi emas",
  "Programmer",
  "Data Analyst",
  "UI/UX Designer",
  "Project Manager",
  "DevOps",
]

export const ChangingText = () => {
  const [indexText, setIndexText] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndexText((prev) => (prev + 1) % texts.length)
    }, 3000) // ubah teks tiap 2 detik

    return () => clearTimeout(timer) // bersihkan timer saat index berubah
  }, [indexText])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-x-1 text-sm"
    >
      <h1>Symphony,</h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={indexText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-y-px"
        >
          <p>{texts[indexText]}</p>
          <span className="h-px w-full bg-white"></span>
        </motion.div>
      </AnimatePresence>
      <h1> pilihan kamu.</h1>
    </motion.div>
  )
}
