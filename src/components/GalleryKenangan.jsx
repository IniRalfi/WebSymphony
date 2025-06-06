import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Import css sweeper
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import galleryData from '../../public/database/data_gallery.json'

const Gallery = () => {
  if (!galleryData || galleryData.length === 0) {
    return <div className='text-center p-10 text-lg text-gray-500'>No gallery data found</div>;
  }

  return (
    // .galleryContainer
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 flex flex-col items-center overflow-hidden">
      {galleryData.map((item) => (
        // .galleryItem
        <div key={item.id} className="w-full max-w-3xl bg-white rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-xl flex flex-col items-center overflow-hidden">

          {/* .galleryHeader */}
          <div className="w-full text-center mb-6">
            <h3 className="text-2xl sm:text-3xl text-gray-800 mb-2 font-semibold">{item.title}</h3>
            <span className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          {/* .swiperContainer */}
          <div className="w-full">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
                scale: 0.85
              }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="w-full h-full"
              pagination={{ clickable: true }}
            >
              {item.photos.map((photo, index) => (
                <SwiperSlide key={index} className="!w-auto"> {/* Override lebar slide agar fleksibel */}
                  {/* .photoCard & .photoImage */}
                  <div className="group w-[360px] h-[240px] md:w-[720px] md:h-[480px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
                    <img
                      src={photo}
                      alt={`${item.title} - Foto ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Gallery;