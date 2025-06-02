import styles from './Lirik.module.css';
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
    <div className={styles.lyricsContainer}>
      {sections.map((line, idx) => {
        if (line.type === 'title') {
          return <h2 key={idx} className={styles.title}>{line.text}</h2>;
        }
        if (line.type === 'key') {
          return <p key={idx} className={styles.key}>{line.text}</p>;
        }
        if (line.type === 'section') {
          return <p key={idx} className={styles.sectionLabel}>{line.text}</p>;
        }
        if (line.type === 'label') {
          return <p key={idx} className={styles.label}>{line.text}</p>;
        }
        return (
          <div key={idx} className={styles.lyricBlock}>
            <pre className={styles.chordLine}>{line.chord}</pre>
            <pre className={styles.lyricLine}>{line.lyric}</pre>
          </div>
        );
      })}
    </div>
  );
};

export default Lirik;