import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Impor CSS Swiper yang dibutuhkan
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../swiper-custom.css';

const LazySwiperGallery = ({ item }) => {
  const [isInView, setIsInView] = useState(false);
  const placeholderRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(placeholderRef.current);
        }
      },
      { rootMargin: '100px' }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, []);


  if (!isInView) {
    return (
      <div
        ref={placeholderRef}
        className="w-full max-w-3xl h-[450px] bg-gray-100 rounded-xl mb-8 sm:mb-12"
      />
    );
  }

  return (
    <div ref={placeholderRef} className="w-full max-w-6xl bg-white rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-xl flex flex-col items-center overflow-hidden">
      <div className="w-full text-center mb-6">
        <h3 className="text-2xl sm:text-3xl text-gray-800 mb-2 font-semibold">{item.title}</h3>
        <span className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <div className="w-full">
        <Swiper
          // effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: false,
          //   scale: 0.85
          // }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full h-full mySwiper"
          spaceBetween={25}
          loop={true}
        >
          {item.photos.map((photo, index) => {
            const placeholderSrc = photo.replace('/upload/', '/upload/q_auto:low,w_30/');
            return (
              <SwiperSlide key={index} className="!w-auto flex justify-center items-center pb-10">
                <LazyLoadImage
                  alt={`${item.title} - Foto ${index + 1}`}
                  src={photo}
                  placeholderSrc={placeholderSrc}
                  effect="blur"
                  className="group w-[260px] sm:w-[280px] md:w-[360px] aspect-[4/3] bg-gray-200 rounded-lg shadow-md object-cover object-center transition-transform duration-300 ease-in-out hover:shadow-stone-900"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default LazySwiperGallery;