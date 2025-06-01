"use client"

import React from "react"
import Link from "next/link"

import { motion } from "motion/react"

const nav = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Mahasiswa",
    href: "/mahasiswa",
  },
  {
    name: "Galeri",
    href: "/galeri",
  },
  {
    name: "Lagu-lagu",
    href: "/lagu-lagu",
  },
]

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 hidden w-full lg:block">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container flex justify-end gap-x-4 py-10"
      >
        {nav.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="group flex flex-col gap-y-0.5"
          >
            <p className="text-xs text-white">{item.name}</p>
            <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </motion.div>
    </nav>
  )
}
