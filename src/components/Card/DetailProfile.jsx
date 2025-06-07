import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DetailProfile = ({ mahasiswa, onClose, onPrev, onNext }) => {
  if (!mahasiswa) return null;

  return (
    // 1. Overlay sekarang punya overflow-y-auto dan padding
    <div className="fixed inset-0 z-[99] bg-black/70 flex justify-center items-start md:items-center p-10 sm:p-4 overflow-y-auto modal-overlay" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-3xl max-h-screen overflow-y-auto my-auto md:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close profile" className="absolute top-2 right-2 z-20 bg-black/50 text-white w-8 h-8 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-black">
          &times;
        </button>

        {/* 3. Pembungkus flex tidak lagi butuh max-h */}
        <div className="flex flex-col md:flex-row">

          {/* 4. Kolom gambar tidak lagi butuh h-[45%] */}
          <div className="w-full md:w-2/5 p-4">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              // pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="profile-swiper w-full h-full rounded-lg"
            >
              {mahasiswa.foto.map((src, i) => {
                const placeholderSrc = src.replace('/upload/', '/upload/q_auto:low,w_40/');
                return (
                  <SwiperSlide key={i}>
                    <LazyLoadImage
                      alt={`Foto ${mahasiswa.nama} ${i + 1}`}
                      src={src}
                      placeholderSrc={placeholderSrc}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* 5. Kolom info tidak lagi butuh styling tinggi yang rumit */}
          <div className="w-full md:w-3/5 p-5 flex flex-col justify-between">

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