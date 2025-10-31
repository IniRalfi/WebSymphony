"use client"

import Image from "next/image"
import Link from "next/link"

import { MahasiswaType } from "@/constants/mahasiswa"

export function CardMahasiswa({
  student,
  priority = false,
}: {
  student: MahasiswaType
  priority?: boolean
}) {
  //Optimize Cloudinary URL for better performance
  const optimizeCloudinaryUrl = (url: string) => {
    if (url.includes("res.cloudinary.com")) {
      // Replace existing transformations with optimized ones
      return url.replace(
        /\/upload\/.*?\//,
        "/upload/w_800,h_1200,c_fill,f_auto,q_auto,dpr_auto/"
      )
    }
    return url
  }

  const optimizedImageUrl = optimizeCloudinaryUrl(student.foto[0])

  return (
    <Link
      href={`/mahasiswa/${student.nim}`}
      key={student.nim}
      className="group h-fit"
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <Image
          className={`aspect-[4/6] rounded-lg grayscale transition-all duration-300 group-hover:grayscale-0`}
          width={400}
          height={600}
          src={optimizedImageUrl}
          alt={`Foto ${student.nama}`}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          draggable={false}
        />
      </div>
      <div className="mt-2 space-y-0.5">
        <h3 className="text-sm font-medium text-gray-900">{student.nama}</h3>
        <p className="text-xs text-gray-500">{student.nim}</p>
      </div>
    </Link>
  )
}
