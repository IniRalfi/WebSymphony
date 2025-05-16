import React, { useEffect, useState } from "react";
import styles from './Gallery.module.css';
import ProfileCard from '../Card/ProfileCard'; // pastikan path-nya sesuai


const Gallery = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/database/data_mahasiswa.json')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
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
          return (
            <div key={index} className={styles['gallery-item']}>
              <ProfileCard
                nama={student.nama || 'Tanpa Nama'}
                nim={student.nim}
                foto={student.foto[0]}
              />
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