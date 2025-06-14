import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Impor CSS Swiper dan CSS Kustom
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../swiper-custom.css';


const momenSlides = [
    { title: 'Logo Angkatan', name: 'Symphony', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263524/Symphony_s1ucn9.png' },
    { title: 'Hand Sign - Depan', name: '', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263525/HandSignFront_wa6m3z.png' },
    { title: 'Hand Sign - Belakang', name: '', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263526/HandSignBack_n0a7ny.png' },
    { title: 'Tempat Favorit', name: 'Lab Sisfo', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263524/LabSisfo_wkz1hg.jpg' },
    { title: 'Logo Angkatan', name: 'Symphony', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263524/Symphony_s1ucn9.png' },
    { title: 'Hand Sign - Depan', name: '', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263525/HandSignFront_wa6m3z.png' },
    { title: 'Hand Sign - Belakang', name: '', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263526/HandSignBack_n0a7ny.png' },
    { title: 'Tempat Favorit', name: 'Lab Sisfo', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749263524/LabSisfo_wkz1hg.jpg' },
];

const pengurusSlides = [
    { title: 'Ketua angkatan', name: 'Rito Ramadhan', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749272154/nrito_no_background_rwlhwt.png' },
    { title: 'Bendahara 1', name: 'Nabila Nur Anisa', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749271552/billa_yhegei.jpg' },
    { title: 'Bendahara 2', name: 'Virsya Meidina Andriadie', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749271478/virsya_x9jry6.png' },
    { title: 'Sekretaris', name: 'Jesika Tan', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749271629/Picsart_25-06-06_12-11-03-554_wjpore.png' },
    { title: 'Ketua angkatan', name: 'Rito Ramadhan', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749272154/nrito_no_background_rwlhwt.png' },
    { title: 'Bendahara 1', name: 'Nabila Nur Anisa', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749271552/billa_yhegei.jpg' },
    { title: 'Bendahara 2', name: 'Virsya Meidina Andriadie', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749271478/virsya_x9jry6.png' },
    { title: 'Sekretaris', name: 'Jesika Tan', imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1749271629/Picsart_25-06-06_12-11-03-554_wjpore.png' },
];

const GallerySlider = ({ title, slides }) => {
    return (
        <div className="w-full mb-12  bg-white rounded-lg shadow-xl p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">{title}</h2>
            <Swiper
                modules={[EffectCoverflow, Pagination, Autoplay]}
                // effect={'coverflow'}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                // coverflowEffect={{
                //     rotate: 0,
                //     stretch: -50,
                //     depth: 100,
                //     modifier: 2,
                //     slideShadows: true,
                // }}
                pagination={{ clickable: true }}
                className='mySwiper py-10 px-0'
                spaceBetween={20}
            >
                {slides.map((slide, idx) => {
                    const placeholderSrc = slide.imageUrl.replace('/upload/', '/upload/q_auto:low,w_40/');
                    const optimizedImage = slide.imageUrl.replace('/upload/', '/upload/w_600,f_auto,q_auto/');
                    return (
                        <SwiperSlide key={idx} className='!w-auto'>
                            <div className="w-[260px] sm:w-[320px] md:w-[400px] bg-white rounded-lg shadow-lg overflow-hidden p-3 transition-all duration-300 ">
                                <LazyLoadImage
                                    alt={slide.title}
                                    src={optimizedImage}
                                    placeholderSrc={placeholderSrc}
                                    effect="blur"
                                    className="w-full aspect-[4/3] object-cover rounded-md"
                                />
                                {/* Teks di dalam kartu */}
                                <div className="pt-2 text-center">
                                    <h4 className="font-semibold text-gray-800 truncate">{slide.title}</h4>
                                    <p className="text-sm text-gray-500 truncate">{slide.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

const AboutSymphony = () => {
    return (
        <div className="w-full flex flex-col items-center p-4 box-border pt-24">
            <h1 className="text-3xl md:text-4xl text-gray-800 text-center mb-2 font-bold">Symphony</h1>
            <h2 className="text-xl md:text-2xl mt-4 mb-4 text-center font-semibold ">Tentang</h2>
            <p className="text-sm md:text-base my-4 w-11/12 max-w-3xl leading-relaxed text-center text-gray-600 mx-auto">
                Symphony bukan sekadar nama, melainkan harmoni dari individu yang bergerak dengan satu irama. Kami adalah angkatan 2024 Sistem Informasi, generasi baru yang tumbuh di tengah derasnya arus teknologi dan informasi. Di balik setiap baris kode, ada semangat belajar yang tak pernah padam. Di setiap diskusi dan kolaborasi, lahir ide-ide brilian yang membentuk masa depan. Bersama, kami membangun sistem yang tidak hanya cerdas (smart), tetapi juga terhubung dengan kekuatan sinergi (synergy). Kami percaya bahwa teknologi adalah alat, tetapi manusialah yang menjadikannya bermakna. Dan di sinilah kami berdiri — saling mendukung, saling menguatkan, dan saling terhubung dalam satu visi. Symphony adalah bukti bahwa ketika pikiran-pikiran hebat berpadu, lahirlah sebuah karya besar yang siap mengubah dunia.
            </p>
            <div className="w-full max-w-7xl my-8 px-4">
                <GallerySlider title="Identitas Kami" slides={momenSlides} />
                <GallerySlider title="Pengurus Kelas" slides={pengurusSlides} />
            </div>
            <h2 className="text-lg md:text-xl mt-8 text-center font-semibold italic text-gray-700">"Smart System, Strong Synergy"</h2>
            <p className="text-base my-4 text-center text-gray-500">2024</p>
        </div>
    );
};

export default AboutSymphony;