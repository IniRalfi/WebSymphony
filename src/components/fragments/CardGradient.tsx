"use client"

// import type { ReactNode } from "react"
import Image from "next/image"

import { classCoordinatorType } from "@/constants/classCoordinators"
import { cn } from "@/utils/cn"

import { useMouse } from "@/hooks/useMouse"

export const CardGradient = ({
  coordinator,
}: {
  coordinator: classCoordinatorType[number]
}) => {
  const [mouse, parentRef] = useMouse()
  const circleSize = 400

  return (
    <div
      className="group group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-1 transition-transform hover:scale-[1.01] active:scale-90 lg:p-2"
      ref={parentRef}
    >
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background: "#2100b1",
        }}
      />
      <div className="absolute inset-px rounded-[19px] bg-neutral-100/80" />
      <div
        className={cn(
          "gird relative aspect-[4/5] place-content-center overflow-hidden rounded-[15px] border-white"
        )}
      >
        <Image
          src={coordinator.src}
          alt="Ketua Angkatan"
          width={600}
          height={600}
          placeholder="blur"
          className="absolute inset-0 h-full w-full rounded-[15px] object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
        <div className="absolute bottom-2.5 left-3 md:bottom-4 md:left-4">
          <p className="text-primary mt-2 text-[0.6rem] md:text-sm">
            {coordinator.role}
          </p>
          <h3 className="text-primary text-sm font-semibold md:text-2xl">
            {coordinator.name}
          </h3>
        </div>
      </div>
    </div>
  )
}
