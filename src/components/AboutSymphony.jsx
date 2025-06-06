import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import CSS Global
import '../swiper-custom.css'

// Import Assets Card
import CardGallery from './Card/CardGallery';

const AboutSymphony = () => {
    const slides = [
        {
            title: 'Ketua angkatan',
            name: 'Rito Ramadhan',
            imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1746925666/IMG_9472_o9lxz0.jpg',
        },
        {
            title: 'Tempat Favorit',
            name: 'Lab Sisfo',
            imageUrl: '/assets/LabSisfo.jpg',
        },
        {
            title: 'Hand Sign - Bagian Depan',
            name: '',
            imageUrl: '/assets/HandSignFront.png',
        },
        {
            title: 'Hand Sign - Bagian Belakang',
            name: '',
            imageUrl: '/assets/HandSignBack.png',
        },
        {
            title: 'Logo Angkatan',
            name: 'Symphony',
            imageUrl: '/assets/Symphony.png',
        },

    ];

    return (
        <div className="w-full flex flex-col items-center p-4 box-border">
            <h1 className="text-3xl md:text-4xl text-gray-800 text-center mb-2 font-bold">Symphony</h1>
            <h2 className="text-xl md:text-2xl mt-4 mb-4 text-center font-semibold ">Tentang</h2>
            <p className="text-sm md:text-base my-4 w-11/12 max-w-3xl leading-relaxed text-center text-gray-600 mx-auto">
                Symphony bukan sekadar nama, melainkan harmoni dari individu yang bergerak dengan satu irama.
                Kami adalah angkatan 2024 Sistem Informasi, generasi baru yang tumbuh di tengah derasnya arus teknologi dan informasi.

                Di balik setiap baris kode, ada semangat belajar yang tak pernah padam.
                Di setiap diskusi dan kolaborasi, lahir ide-ide brilian yang membentuk masa depan.
                Bersama, kami membangun sistem yang tidak hanya cerdas (smart), tetapi juga terhubung dengan kekuatan sinergi (synergy).

                Kami percaya bahwa teknologi adalah alat,
                tetapi manusialah yang menjadikannya bermakna.
                Dan di sinilah kami berdiri — saling mendukung, saling menguatkan, dan saling terhubung dalam satu visi.

                Symphony adalah bukti bahwa ketika pikiran-pikiran hebat berpadu,
                lahirlah sebuah karya besar yang siap mengubah dunia.
            </p>

            <div className="w-full max-w-6xl my-8 px-5">
                <Swiper
                    modules={[EffectCoverflow, Pagination]} // Tambahkan modules
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                        // scale: 0.8
                    }}
                    breakpoints={{
                        768: {
                            spaceBetween: 220,
                            coverflowEffect: {
                                depth: 120,
                                modifier: 1.5,
                                scale: 1
                            }
                        }
                    }}
                    pagination={{ clickable: true }}
                    slideToClickedSlide={true}
                    lazyPreloadPrevNext={true}
                    className='mySwiper'
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx} className='w-full h-full flex items-center justify-center'>
                            <CardGallery
                                title={slide.title}
                                name={slide.name}
                                imageUrl={slide.imageUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <h2 className="text-lg md:text-xl mt-8 text-center font-semibold italic text-gray-700">"Smart System, Strong Synergy"</h2>
            <p className="text-base my-4 text-center text-gray-500">2024</p>
        </div>
    );
};

export default AboutSymphony;
