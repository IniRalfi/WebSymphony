import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// 1. Path impor diperbarui karena file JSON sekarang ada di 'src'
import galleryData from '../database/data_gallery.json'

const Gallery = () => {
  if (!galleryData || galleryData.length === 0) {
    return <div className='text-center p-10 text-lg text-gray-500'>No gallery data found</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 flex flex-col items-center overflow-hidden">
      {galleryData.map((item) => (
        <div key={item.id} className="w-full max-w-3xl bg-white rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-xl flex flex-col items-center overflow-hidden">
          <div className="w-full text-center mb-6">
            <h3 className="text-2xl sm:text-3xl text-gray-800 mb-2 font-semibold">{item.title}</h3>
            <span className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          <div className="w-full">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              // autoplay={{ delay: 2500, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                scale: 0.85
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="w-full h-full"
            >
              {item.photos.map((photo, index) => {
                const placeholderSrc = photo.replace('/upload/', '/upload/q_auto:low,w_30/');

                return (
                  <SwiperSlide key={index} className="!w-auto flex justify-center items-center pb-10">
                    {/* Perbaikan #2: Hapus div pembungkus dan terapkan kelas langsung di sini */}
                    <LazyLoadImage
                      alt={`${item.title} - Foto ${index + 1}`}
                      src={photo}
                      placeholderSrc={placeholderSrc}
                      effect="blur"
                      className="group w-[260px] sm:w-[280px] md:w-[360px] aspect-[4/3] bg-gray-200 rounded-lg shadow-md object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;