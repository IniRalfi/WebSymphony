"use client"

import { cn } from "@/utils/cn"
import { ArrowUpRightIcon } from "lucide-react"

import { useMouse } from "@/hooks/useMouse"

export const IdentityCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
}: {
  title: string
  description?: string
  withArrow?: boolean
  circleSize?: number
}) => {
  const [mouse, parentRef] = useMouse()

  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/40 p-2 transition-transform hover:scale-[1.01] active:scale-90"
      ref={parentRef}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute top-2 right-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300" />
      )}
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
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(59, 196, 242, 0.4), rgba(122, 105, 249, 0.3), rgba(255, 255, 255, 0.2))",
        }}
      />
      <div className="bg-primary absolute inset-px rounded-[19px]" />

      <div className="relative px-4 pt-4 pb-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && <p className="mt-2 text-white">{description}</p>}
      </div>
    </div>
  )
}
