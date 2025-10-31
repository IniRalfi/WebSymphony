import Image from "next/image"
import { notFound } from "next/navigation"

import { GALLERY } from "@/constants/gallery"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const gallery = GALLERY.find((gallery) => gallery.id === Number(id))

  if (!gallery) {
    return {
      title: "Not Found",
      description: "Kenangan tidak ditemukan",
    }
  }

  return {
    title: gallery.title,
    description: "Kegiatan dan kenangan dari angkatan Symphony",
    openGraph: {
      title: gallery.title,
      description: "Kegiatan dan kenangan dari angkatan Symphony",
      images: [
        {
          url: "https://symphony24.vercel.app" + gallery.src,
          width: 1600,
          height: 1200,
        },
      ],
      type: "website",
    },
  }
}

export default async function DetailMahasiswaPage({ params }: Props) {
  const { id } = await params
  const gallery = GALLERY.find((gallery) => gallery.id === Number(id))

  if (!gallery) return notFound()

  return (
    <main className="container">
      <div className="grid grid-cols-1 gap-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-5">
        <div className="col-span-1 flex flex-col justify-end py-16 lg:col-span-2">
          <h1 className="text-primary text-center font-serif text-6xl md:text-start md:text-7xl">
            {gallery.title}
          </h1>
        </div>
        <div className="col-span-1 flex items-end justify-end md:h-svh md:py-16 lg:col-span-3">
          <Image
            src={gallery.src}
            alt={gallery.title}
            width={800}
            height={800}
            className="max-h-full w-fit rounded-xl object-contain object-bottom-right transition-all duration-300 hover:rounded-4xl"
          />
        </div>
      </div>
      <div className="py-32">
        <p className="text-primary text-center">Sekilas memori.</p>
      </div>
    </main>
  )
}
