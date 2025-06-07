import React, { useEffect, useState } from "react";

import studentsData from '../database/data_mahasiswa.json';
import ProfileCard from './Card/ProfileCard';
import DetailProfile from "./Card/DetailProfile";

const GalleryMahasiswa = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % students.length);
  };

  return (
    // .gallery-container
    <div className="bg-white p-5 text-center">
      {/* .gallery-header */}
      <div className="mb-5 text-black font-bold text-4xl">
        <p>{studentsData.length} Mahasiswa</p>
      </div>

      {/* .gallery-grid -> menggunakan arbitrary value untuk grid canggih */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
        {studentsData.map((student, index) => {
          return (
            // gallery item
            <div key={index} className="bg-white text-black p-2.5 rounded-2xl text-center shadow-xl">
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

      <div className="mt-5">
        <p>Tak kenal maka tak sayang</p>
      </div>

      {/* Bagian Modal/Detail, logikanya tetap sama */}
      {selectedIndex !== null && (
        <DetailProfile
          mahasiswa={studentsData[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default GalleryMahasiswa;