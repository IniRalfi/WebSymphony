import React from "react"

export const LogoSection = () => {
  return (
    <section className="bg-primary py-44">
      <div className="container text-white">
        <div className="mb-16 grid grid-cols-1 gap-y-10 md:mb-28 md:grid-cols-2">
          <div className="col-span-1">
            <h1 className="font-serif text-6xl md:text-8xl">
              Our <br className="hidden md:block" />
              Logo
            </h1>
          </div>
          <div className="col-span-1">
            <video
              src="/about/logo_symphony.mp4"
              className="h-auto w-full rounded-xl"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-24 lg:gap-x-36">
          <div className="col-span-3 flex items-start justify-between gap-y-16 md:col-span-1 md:flex-col lg:gap-y-24">
            <div className="max-w-[200px] md:max-w-full">
              <p className="font-mono text-xs">00</p>
              <h3 className="mt-8 mb-4 font-serif text-4xl">Bintang</h3>
              <p className="lg:text-lg">
                Melambangkan cita-cita, harapan, dan pencapaian yang menjadi
                arah bagi mahasiswa untuk terus maju.
              </p>
            </div>
            <svg
              viewBox="0 0 177 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-14 h-10 w-auto md:mt-0 md:h-12 lg:h-14"
            >
              <path
                d="M88.2898 0L75.2578 44.9844L40.199 14.2519L53.333 59.2059L7.37709 52.4828L42.5058 83.1339L0.243164 102.554L46.2145 109.171L21.0649 148.57L63.2825 129.051L63.2291 175.919L88.2898 136.462L113.35 175.919L113.297 129.051L155.515 148.57L130.365 109.171L176.336 102.554L134.074 83.1339L169.202 52.4828L123.247 59.2059L136.38 14.2519L101.322 44.9844L88.2898 0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="col-span-3 flex items-start justify-between gap-y-16 md:col-span-1 md:flex-col lg:gap-y-24">
            <div className="max-w-[200px] md:max-w-full">
              <p className="font-mono text-xs">01</p>
              <h3 className="mt-8 mb-4 font-serif text-4xl">Jendela</h3>
              <p className="lg:text-lg">
                Outline yang berbentuk jendela menggambarkan keterbukaan
                terhadap perubahan, ide baru, serta peluang untuk melihat dunia
                yang lebih luas.
              </p>
            </div>
            <svg
              viewBox="0 0 570 719"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-14 h-10 w-auto md:mt-0 md:h-12 lg:h-14"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M284.645 72.6C167.796 72.6 71.1612 170.086 71.1612 292.737V647.178H498.129V292.737C498.129 170.086 401.494 72.6 284.645 72.6ZM0 292.737C0 131.469 127.464 0.777832 284.645 0.777832C441.826 0.777832 569.29 131.469 569.29 292.737V719H0V292.737Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="col-span-3 flex items-start justify-between gap-y-16 md:col-span-1 md:flex-col md:gap-y-24">
            <div className="max-w-[200px] md:max-w-full">
              <p className="font-mono text-xs">02</p>
              <h3 className="mt-8 mb-4 font-serif text-4xl">Angka 2 dan 4</h3>
              <p className="lg:text-lg">
                Merepresentasikan identitas angkatan 2024 sekaligus simbol
                persatuan, kekompakan, serta keteguhan dalam menempuh perjalanan
                akademik.
              </p>
            </div>
            <svg
              viewBox="0 0 307 432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-14 block h-10 w-auto md:mt-0 md:h-12 lg:h-14"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M159.644 0.543262V83.9744C158.126 83.8774 156.595 83.8283 155.053 83.8283C115.328 83.8283 83.1266 116.33 83.1266 156.424C83.1266 196.516 115.328 229.018 155.053 229.018C193.234 229.018 224.467 198.99 226.835 161.056H226.979V156.46V156.424V156.387V19.3463C273.356 45.0048 305.128 94.2066 306.511 151.017H306.541V152.602C306.551 153.359 306.556 154.118 306.556 154.878C306.556 155.639 306.551 156.397 306.541 157.155V431.356H306.529H235.38H8.1108V360.648L7.37428 359.534L94.1767 297.291C39.1312 273.899 0.487061 218.943 0.487061 154.878C0.487061 69.5752 69.0035 0.422363 153.523 0.422363C155.572 0.422363 157.613 0.46306 159.644 0.543262ZM235.38 285.67L132.368 359.534H235.38V285.67Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
