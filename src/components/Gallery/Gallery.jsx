import React, { useEffect, useState } from "react";
import styles from './Gallery.module.css';

const Gallery = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/database/data_mahasiswa_2.json')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        console.log(data); // Cek data yang diterima
      })
      .catch((err) => console.error('Gagal memuat data:', err));
  }, []);

  return (
    <div className={styles['gallery-container']}>
      <div className={styles['gallery-header']}>
        <p>{students.length} Mahasiswa</p>
      </div>

      <div className={styles['gallery-grid']}>
        {students.map((student, index) => {
          const isEven = parseInt(student.nim.slice(-1)) % 2 === 0;
          const rotationStyle = isEven ? { transform: 'rotate(-90deg)' } : {};

          return (
            <div key={index} className={styles['gallery-item']}>
              <img
                src={student.foto[0]}
                alt={`Foto ${student.nama || student.nim}`}
                style={{ width: '100px', ...rotationStyle }}
                onError={() => console.log("Gambar gagal dimuat:", student.foto[0])} // Log jika gambar gagal dimuat
              />
              <h3>{student.nama || 'Tanpa Nama'}</h3>
              <p>{student.nim}</p>
            </div>
          );
        })}
      </div>

      <div className={styles['gallery-footer']}>
        <p>Tak kenal maka tak sayang</p>
      </div>
    </div>
  );
};

export default Gallery;