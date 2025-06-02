"use client"

import { useEffect, useRef } from "react"

import { cancelFrame, frame } from "framer-motion"
import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"

export function SmoothScroll() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
}
