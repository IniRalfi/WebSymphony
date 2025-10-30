import React from "react"

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

const Lirik = () => {
  return (
    <div className="mx-2 my-5 box-border max-w-4xl rounded-lg bg-white p-4 text-center text-gray-800 sm:p-6 md:mx-auto">
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
  )
}

export default Lirik
