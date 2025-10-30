"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"

import { Pause, Play } from "lucide-react"

const sections = [
  { type: "label", text: "Do = C" },
  { type: "label", text: "Verse 1 :" },
  {
    chord: "C               F          C",
    lyric: "Di bawah langit biru yang luas",
  },
  {
    chord: "F        G           C",
    lyric: "Nada berpadu tanpa batas",
  },
  {
    chord: "C              F    C",
    lyric: "Harmoni lahir dari jiwa",
  },
  {
    chord: "F             G           C",
    lyric: "Melangkah bersama, penuh asa",
  },
  { type: "label", text: "Chorus :" },
  {
    chord: "F              Em",
    lyric: "Mars Symphony, simfoni kita",
  },
  {
    chord: "Dm        G        C",
    lyric: "Menggema kuat di angkasa",
  },
  {
    chord: "F                Em",
    lyric: "Ilmu dan mimpi jadi cahaya",
  },
  {
    chord: "Dm        G           C",
    lyric: "Bersama FMIPA, kita juara",
  },
  { type: "label", text: "Verse 2 :" },
  {
    chord: "C          F           C",
    lyric: "Angin membawa pesan sejati",
  },
  {
    chord: "F          G            C",
    lyric: "Tentang semangat dan harmoni",
  },
  {
    chord: "C              F       C",
    lyric: "Stiap langkah, penuh makna",
  },
  {
    chord: "F               G          C",
    lyric: "Ciptakan dunia lebih indah",
  },
  { type: "label", text: "Chorus :" },
  {
    chord: "F               Em",
    lyric: "Mars Symphony, simfoni kita",
  },
  {
    chord: "Dm        G          C",
    lyric: "Menggema kuat di angkasa",
  },
  {
    chord: "F               Em",
    lyric: "Ilmu dan mimpi jadi cahaya",
  },
  {
    chord: "Dm        G           C",
    lyric: "Bersama FMIPA, kita juara",
  },
  { type: "label", text: "Outro :" },
  {
    chord: "F               Em",
    lyric: "Mars Symphony, lagu abadi",
  },
  {
    chord: "Dm        G          C",
    lyric: "Harmoni cinta untuk bumi",
  },
  {
    chord: "F               Em",
    lyric: "Mars Symphony, lagu abadi",
  },
  {
    chord: "Dm       G           C",
    lyric: "Harmoni cinta untuk bumi...",
  },
  {
    chord: "Dm       G           C",
    lyric: "Harmoni cinta untuk bumi...",
  },
]

export default function Lirik() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollSpeed, setScrollSpeed] = useState(1)
  const requestRef = useRef<number | null>(null)

  const smoothScrollBy = useCallback((amount: number) => {
    window.scrollBy(0, amount)
  }, [])

  const toggleScroll = () => {
    setIsScrolling((prev) => !prev)
  }

  const handleSpeedChange = (speed: number) => {
    setScrollSpeed(Math.max(0.1, speed))
  }

  const scrollLoop = useCallback(() => {
    const scrollStep = scrollSpeed * 0.6

    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight // Toleransi 5px

    if (isAtBottom) {
      setIsScrolling(false)
      return
    }

    smoothScrollBy(scrollStep)

    requestRef.current = requestAnimationFrame(scrollLoop)
  }, [scrollSpeed, smoothScrollBy])

  // Efek untuk mengelola loop requestAnimationFrame
  useEffect(() => {
    if (isScrolling) {
      // Mulai loop animasi
      requestRef.current = requestAnimationFrame(scrollLoop)
    } else {
      // Hentikan loop animasi
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
    }

    // Cleanup function untuk memastikan loop berhenti saat komponen di-unmount
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [isScrolling, scrollLoop])

  return (
    <div className="relative">
      <div className="absolute right-0 bottom-0 flex h-full items-end justify-end">
        <div className="sticky right-6 bottom-6 z-40 flex flex-col gap-2 md:flex-row">
          <SpeedControl speed={scrollSpeed} onSpeedChange={handleSpeedChange} />
          <button
            onClick={toggleScroll}
            title="Auto scroll"
            className="bg-primary flex size-16 items-center justify-center p-4 text-white transition-all duration-300 hover:rounded-2xl"
          >
            {isScrolling ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-2xl bg-white px-4 text-gray-800">
        {sections.map((line, idx) => {
          if (line.type === "section" || line.type === "label") {
            return (
              <p
                key={idx}
                className="mt-5 mb-1.5 text-left text-base font-bold sm:text-lg lg:text-xl"
              >
                {line.text}
              </p>
            )
          }
          return (
            <div key={idx} className="mb-3 text-left md:mb-4">
              <pre className="m-0 overflow-x-auto font-mono text-sm whitespace-pre md:text-base lg:text-lg">
                {line.chord}
              </pre>
              <pre className="m-0 overflow-x-auto font-mono text-sm whitespace-pre md:text-base lg:text-lg">
                {line.lyric}
              </pre>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type SpeedControlProps = {
  speed: number
  onSpeedChange: (speed: number) => void
}

const SpeedControl = ({ speed, onSpeedChange }: SpeedControlProps) => {
  return (
    <div className="group relative w-fit">
      <div className="bg-primary absolute -top-full right-0 z-20 flex items-center rounded-2xl p-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        <button
          onClick={() => onSpeedChange(1)}
          className="hover:text-primary rounded-2xl p-3 transition-all duration-300 hover:bg-white"
        >
          1X
        </button>
        <button
          onClick={() => onSpeedChange(2)}
          className="hover:text-primary rounded-2xl p-3 transition-all duration-300 hover:bg-white"
        >
          2X
        </button>
        <button
          onClick={() => onSpeedChange(3)}
          className="hover:text-primary rounded-2xl p-3 transition-all duration-300 hover:bg-white"
        >
          3X
        </button>
        <button
          onClick={() => onSpeedChange(4)}
          className="hover:text-primary rounded-2xl p-3 transition-all duration-300 hover:bg-white"
        >
          4X
        </button>
        <button
          onClick={() => onSpeedChange(5)}
          className="hover:text-primary rounded-2xl p-3 transition-all duration-300 hover:bg-white"
        >
          5X
        </button>
      </div>
      <button
        title="Auto scroll"
        className="bg-primary flex size-16 items-center justify-center p-4 text-white transition-all duration-300 hover:rounded-2xl"
      >
        {speed} X
      </button>
    </div>
  )
}
