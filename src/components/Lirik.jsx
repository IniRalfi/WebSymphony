import React from 'react';

const sections = [
  { type: 'title', text: 'MARS SYMPHONY' },
  { type: 'key', text: 'Do = C' },
  { type: 'label', text: 'Verse 1 :' },
  {
    chord: 'C               F          C',
    lyric: 'Di bawah langit biru yang luas'
  },
  {
    chord: 'F        G           C',
    lyric: 'Nada berpadu tanpa batas'
  },
  {
    chord: 'C              F    C',
    lyric: 'Harmoni lahir dari jiwa'
  },
  {
    chord: 'F             G           C',
    lyric: 'Melangkah bersama, penuh asa'
  },
  { type: 'label', text: 'Chorus :' },
  {
    chord: 'F              Em',
    lyric: 'Mars Symphony, simfoni kita'
  },
  {
    chord: 'Dm        G        C',
    lyric: 'Menggema kuat di angkasa'
  },
  {
    chord: 'F                Em',
    lyric: 'Ilmu dan mimpi jadi cahaya'
  },
  {
    chord: 'Dm        G           C',
    lyric: 'Bersama FMIPA, kita juara'
  },
  { type: 'label', text: 'Verse 2 :' },
  {
    chord: 'C          F           C',
    lyric: 'Angin membawa pesan sejati'
  },
  {
    chord: 'F          G            C',
    lyric: 'Tentang semangat dan harmoni'
  },
  {
    chord: 'C              F       C',
    lyric: 'Stiap langkah, penuh makna'
  },
  {
    chord: 'F               G          C',
    lyric: 'Ciptakan dunia lebih indah'
  },
  { type: 'label', text: 'Chorus :' },
  {
    chord: 'F               Em',
    lyric: 'Mars Symphony, simfoni kita'
  },
  {
    chord: 'Dm        G          C',
    lyric: 'Menggema kuat di angkasa'
  },
  {
    chord: 'F               Em',
    lyric: 'Ilmu dan mimpi jadi cahaya'
  },
  {
    chord: 'Dm        G           C',
    lyric: 'Bersama FMIPA, kita juara'
  },
  { type: 'label', text: 'Outro :' },
  {
    chord: 'F               Em',
    lyric: 'Mars Symphony, lagu abadi'
  },
  {
    chord: 'Dm        G          C',
    lyric: 'Harmoni cinta untuk bumi'
  },
  {
    chord: 'F               Em',
    lyric: 'Mars Symphony, lagu abadi'
  },
  {
    chord: 'Dm       G           C',
    lyric: 'Harmoni cinta untuk bumi...'
  },
  {
    chord: 'Dm       G           C',
    lyric: 'Harmoni cinta untuk bumi...'
  },
];

const Lirik = () => {
  return (
    <div className="bg-white text-gray-800 text-center rounded-lg p-4 sm:p-6 my-5 mx-2 md:mx-auto max-w-4xl box-border">
      {sections.map((line, idx) => {
        if (line.type === 'title') {
          return <h2 key={idx} className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2.5">{line.text}</h2>;
        }
        if (line.type === 'key') {
          return <p key={idx} className="font-bold mb-5 text-base sm:text-lg">{line.text}</p>;
        }
        if (line.type === 'section' || line.type === 'label') {
          return <p key={idx} className="font-bold mt-5 mb-1.5 text-left text-base sm:text-lg lg:text-xl">{line.text}</p>;
        }
        return (
          <div key={idx} className="mb-3 md:mb-4 text-left">
            <pre className="font-mono m-0 whitespace-pre overflow-x-auto text-sm md:text-base lg:text-lg">{line.chord}</pre>
            <pre className="font-mono m-0 whitespace-pre overflow-x-auto text-sm md:text-base lg:text-lg">{line.lyric}</pre>
          </div>
        );
      })}
    </div>
  );
};

export default Lirik;