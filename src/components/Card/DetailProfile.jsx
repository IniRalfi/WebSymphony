import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DetailProfile = ({ mahasiswa, onClose }) => {
  if (!mahasiswa) return null;

  return (
    // Ubah items-start → items-center agar modal tidak menempel ke atas (FIX getar di Android)
    <div
      className="fixed inset-0 z-[99] bg-black/70 flex justify-center items-center p-5 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        // Tambah mt-16 → memberi jarak aman dari atas (sekitar 64px)
        className="relative bg-white rounded-lg overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-3xl max-h-screen overflow-y-auto mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-2 right-2 z-20 bg-black/80 text-white w-8 h-8 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-black"
        >
          x
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 p-4">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              className="profile-swiper w-full h-full rounded-lg"
            >
              {mahasiswa.foto.map((src, i) => {
                const placeholderSrc = src.replace(
                  '/upload/',
                  '/upload/w_10,e_blur:1000,q_1,f_auto/'
                );
                const optimalSrc = src.replace(
                  '/upload/',
                  '/upload/w_400,q_auto:low,f_auto/'
                );
                return (
                  <SwiperSlide key={i}>
                    <LazyLoadImage
                      alt={`Foto ${mahasiswa.nama} ${i + 1}`}
                      src={optimalSrc}
                      placeholderSrc={placeholderSrc}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="w-full md:w-3/5 p-5 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Symphony 2024</h2>
            <div className="text-sm md:text-base text-gray-700 mb-4 space-y-2">
              <p>
                <span className="font-semibold">Nama:</span> {mahasiswa.nama}
              </p>
              <p>
                <span className="font-semibold">NIM:</span> {mahasiswa.nim}
              </p>
              <p className="italic">"{mahasiswa.quotes}"</p>
            </div>
            <div className="mt-auto pt-4">
              <a
                href={`https://instagram.com/${mahasiswa.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center justify-items-stretch hover:opacity-80"
              >
                <img
                  src="https://res.cloudinary.com/iniralfi/image/upload/v1747568076/instagram_tn03rt.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
                <p className="mx-2 text-sm">@{mahasiswa.instagram}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
