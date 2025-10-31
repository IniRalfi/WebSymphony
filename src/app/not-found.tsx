import Image from "next/image"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="text-primary container grid grid-cols-3 items-center gap-12">
        <div className="col-span-3 lg:col-span-1">
          <h1 className="text-center font-serif text-6xl md:text-8xl lg:text-end">
            Not
          </h1>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Image
            src="/gallery/Pensi nihh.jpg"
            alt="Symphony (galengkap sii)"
            width={600}
            height={600}
            className="h-auto w-full object-cover transition-all duration-300 hover:rounded-4xl"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <h1 className="text-center font-serif text-6xl md:text-8xl lg:text-start">
            Found :(
          </h1>
        </div>
      </section>
    </main>
  )
}
