import React from "react"

export const AboutSection = () => {
  return (
    <section className="mt-20">
      <div className="text-primary container mb-28 grid grid-cols-12">
        <div className="col-span-12 grid h-fit grid-cols-2 items-end lg:col-span-7">
          <h1 className="font-serif text-6xl md:text-7xl">Symphony</h1>
          <p className="hidden text-sm md:block">
            What is
            <br />
            this thing?
          </p>
        </div>
        <div className="col-span-12 pt-10 lg:col-span-5 lg:pt-2">
          <p className="text-xl leading-relaxed font-semibold md:text-2xl lg:text-3xl">
            <span className="pl-20">Harmoni</span> dari langkah kami yang
            bergerak dalam satu irama. Kami adalah{" "}
            <span className="font-serif italic">
              Angkatan 2024 Sistem Informasi
            </span>{" "}
            — generasi yang lahir di tengah derasnya teknologi. Di balik kode,
            diskusi, dan kolaborasi, kami belajar, tumbuh, dan melahirkan
            ide-ide baru.
          </p>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden">
        <h2 className="text-primary -mb-12 -ml-20 rotate-[5deg] font-serif text-[18rem] leading-[0.8] italic select-none md:-mb-20 md:-ml-24 md:text-[32rem] lg:-ml-[16rem] lg:text-[60rem]">
          2024
        </h2>
      </div>
    </section>
  )
}
