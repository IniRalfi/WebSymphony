import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DetailProfile = ({ mahasiswa, onClose, onPrev, onNext }) => {
  if (!mahasiswa) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99]" onClick={onClose}>

      {/* Kontainer utama modal, dibuat relative untuk posisi tombol */}
      <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-[95vw] md:w-full md:max-w-3xl" onClick={(e) => e.stopPropagation()}>

        {/* Tombol Close & Navigasi diletakkan di sini, di atas pembungkus flex */}
        <button onClick={onClose} aria-label="Close profile" className="absolute top-2 right-2 z-20 bg-black/50 text-white w-8 h-8 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-black">
          &times;
        </button>

        {/* INI DIA PEMBUNGKUS BARUNYA, yang menjadi wadah flex */}
        <div className="flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">

          {/* Kolom 1: Gambar (diberi lebar 40% di desktop) */}
          <div className="w-full md:w-2/5 h-[300px] md:h-auto bg-gray-100">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={false}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="profile-swiper w-full h-full"
            >
              {mahasiswa.foto.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src} alt={`Foto ${mahasiswa.nama} ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading='lazy'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Kolom 2: Info (diberi lebar 60% di desktop) */}
          <div className="w-full md:w-3/5 p-5 flex flex-col overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Symphony 2024</h2>
            <div className="text-sm md:text-base text-gray-700 mb-4 space-y-2">
              <p><span className="font-semibold">Nama:</span> {mahasiswa.nama}</p>
              <p><span className="font-semibold">NIM:</span> {mahasiswa.nim}</p>
              <p className="italic">"{mahasiswa.quotes}"</p>
            </div>
            <div className="mt-auto pt-4">
              <a href={`https://instagram.com/${mahasiswa.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80">
                <img src="https://res.cloudinary.com/iniralfi/image/upload/v1747568076/instagram_tn03rt.png" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;