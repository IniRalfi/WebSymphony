import React, { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MAHASISWA } from "@/constants/mahasiswa"

type Props = {
  params: Promise<{ id: string }>
}

export default async function DetailMahasiswaPage({ params }: Props) {
  const { id } = await params
  const mahasiswa = MAHASISWA.find((student) => student.nim === id)

  if (!mahasiswa) return notFound()

  return (
    <main className="pt-38">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-1 flex flex-col justify-end lg:col-span-2">
            <div className="sticky bottom-10 flex h-fit flex-col justify-between">
              <h1 className="text-primary text-center font-serif text-6xl md:text-start md:text-8xl">
                {mahasiswa.nama}
              </h1>
              <div className="mt-4 flex justify-center gap-x-3 text-sm md:mt-6 md:justify-start md:text-base">
                <p className="text-primary">{mahasiswa.nim}</p>
                <Link
                  href={`https://instagram.com/${mahasiswa.instagram}`}
                  target="_blank"
                  className="group w-fit"
                >
                  <p className="text-primary">@{mahasiswa.instagram}</p>
                  <div className="bg-primary h-px w-0 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2 lg:col-span-3 lg:grid-cols-2">
            {mahasiswa.foto.length === 1 && (
              <div className="col-span-1 hidden lg:block" />
            )}
            {mahasiswa.foto.map((foto, i) => (
              <Fragment key={i}>
                {i === 2 && <div className="col-span-1 hidden lg:block" />}
                <div className="col-span-1">
                  <Image
                    src={foto}
                    alt={mahasiswa.nama}
                    width={800}
                    height={800}
                    className="rounded-xl bg-gray-100 transition-all duration-300 hover:rounded-4xl"
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="py-32">
        <p className="text-primary text-center">
          &quot;{mahasiswa.quotes}&quot;
        </p>
      </div>
    </main>
  )
}
