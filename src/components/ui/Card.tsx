import React from "react"
import Image from "next/image"

type Props = {
  img: string
  title: string
  subtitle: string
}

export const Card = ({ img, title, subtitle }: Props) => {
  return (
    <div>
      <Image
        src={img}
        alt={title}
        width={600}
        height={600}
        className="w-64 object-cover"
      />
      <p className="mt-2 -mb-1 text-xs">{subtitle}</p>
      <p className="text-lg font-medium">{title}</p>
    </div>
  )
}
