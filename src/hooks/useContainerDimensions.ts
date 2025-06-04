"use client"

import { RefObject, useEffect, useState } from "react"

export const useContainerDimensions = (
  componentRef: RefObject<HTMLElement | null>
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const getDimensions = () => {
      if (!componentRef.current) return { width: 0, height: 0 }
      return {
        width: componentRef.current.offsetWidth,
        height: componentRef.current.offsetHeight,
      }
    }

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (componentRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [componentRef])

  return dimensions
}
