"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"

import { NAV } from "@/constants"
import { Menu } from "lucide-react"
import { cubicBezier } from "motion"
import { AnimatePresence, motion } from "motion/react"

import { MenuNav } from "../ui/MenuNav"

export const SideNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  function toggleSideNav() {
    setOpen(!open)
  }

  return (
    <>
      <motion.button
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.8,
          ease: cubicBezier(0.76, 0, 0.24, 1),
        }}
        onClick={toggleSideNav}
        className="bg-primary fixed top-6 right-6 z-40 cursor-pointer p-4 text-white transition-all duration-300 hover:rounded-2xl"
      >
        <Menu />
      </motion.button>

      <AnimatePresence mode="wait">
        {open && (
          <>
            <motion.nav
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-svh"
            >
              <div className="bg-primary flex h-full flex-col justify-between px-6 pt-8 leading-none md:px-10 md:pt-0">
                <h2 className="font-serif text-8xl text-white md:text-[9rem] lg:text-[12rem]">
                  MENU
                </h2>
                <ul className="flex flex-col gap-y-4 px-4 pb-12 md:gap-y-6 lg:px-6">
                  {NAV.map((item, index) => (
                    <li key={index} onClick={toggleSideNav}>
                      <MenuNav
                        isActive={pathname === item.href}
                        href={item.href}
                        textClassName="text-white text-3xl md:text-4xl"
                        bgClassName="bg-white"
                      >
                        • {item.name}
                      </MenuNav>
                    </li>
                  ))}
                </ul>
              </div>
              <Curve />
            </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: cubicBezier(0.76, 0, 0.24, 1),
              }}
              onClick={toggleSideNav}
              className="fixed inset-0 z-40 bg-black/50"
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const Curve = () => {
  if (typeof window === "undefined") return null
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
  const targetPath = `M100 0 L100  ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: cubicBezier(0.76, 0, 0.24, 1) },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1) },
    },
  }

  return (
    <svg className="fill-primary pointer-events-none absolute top-0 left-[-99px] h-full w-[100px] stroke-none select-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  )
}

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
}
