import React, { useEffect, useState } from "react";
import styles from './ProfileMahasiswa.module.css';
import ProfileCard from '../Card/ProfileCard';
import DetailProfile from "../Card/DetailProfile";


const GalleryMahasiswa = () => {
  const [students, setStudents] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch('/database/data_mahasiswa.json')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => console.error('Gagal memuat data:', err));
  }, []);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % students.length);
  };

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
                onClick={() => setSelectedIndex(index)}
              />
            </div>
          );
        })}
      </div>

      <div className={styles['gallery-footer']}>
        <p>Tak kenal maka tak sayang</p>
      </div>

      {selectedIndex !== null && (
        <DetailProfile
          mahasiswa={students[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default GalleryMahasiswa;