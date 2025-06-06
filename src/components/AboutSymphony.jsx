// File: src/components/AboutSymphony.jsx (Versi Tes Swiper Minimal)

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Kita hanya butuh Pagination untuk tes ini
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper-custom.css';
import CardGallery from './Card/CardGallery';

const AboutSymphony = () => {
    const slides = [
        { title: 'Ketua angkatan', name: 'Rito Ramadhan', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1746925666/IMG_9472_o9lxz0.jpg' },
        { title: 'Tempat Favorit', name: 'Lab Sisfo', imageUrl: '/assets/LabSisfo.jpg' },
        { title: 'Logo Angkatan', name: 'Symphony', imageUrl: '/assets/Symphony.png' },
    ];

    return (
        <div className="w-full flex flex-col items-center p-4 box-border">
            <h1 className="text-2xl font-bold mb-8">Tes Swiper Minimal</h1>
            <div className="w-full max-w-6xl my-8 px-5">
                <Swiper
                    // --- KONFIGURASI SWIPER PALING SEDERHANA ---
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={3} // Tampilkan 3 slide sekaligus
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {slides.map((slide, idx) => (
                        // Ukuran slide tetap sama
                        <SwiperSlide key={idx} className="w-[320px] h-[420px] bg-blue-200">
                            <CardGallery
                                title={slide.title}
                                name={slide.name}
                                imageUrl={slide.imageUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutSymphony;