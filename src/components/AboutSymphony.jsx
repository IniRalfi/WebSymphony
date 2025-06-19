import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Impor CSS Swiper dan CSS Kustom
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../swiper-custom.css';


const momenSlides = [
    { title: 'Logo Angkatan', name: 'Symphony', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328039/Symphony_s1ucn9_hg6vba.png' },
    { title: 'Hand Sign - Depan', name: '', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328040/HandSignFront_wa6m3z_w15dzw.png' },
    { title: 'Hand Sign - Belakang', name: '', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328041/HandSignBack_n0a7ny_o7nzsr.png' },
    { title: 'Tempat Favorit', name: 'Lab Sisfo', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328079/WhatsApp_Image_2025-06-18_at_09.49.42_92764463_wjk5wf.jpg' },
];

const pengurusSlides = [
    { title: 'Ketua angkatan', name: 'Rito Ramadhan', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328045/nrito_no_background_rwlhwt_z2amru.png' },
    { title: 'Bendahara 1', name: 'Nabila Nur Anisa', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328048/billa_yhegei_lutuas.jpg' },
    { title: 'Bendahara 2', name: 'Virsya Meidina Andriadie', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328053/virsya_x9jry6_m1wpuf.png' },
    { title: 'Sekretaris', name: 'Jesika Tan', imageUrl: 'https://res.cloudinary.com/symphony24/image/upload/v1750328045/Picsart_25-06-06_12-11-03-554_wjpore_ni3u3u.png' }
];

const GallerySlider = ({ title, slides }) => {
    return (
        <div className="w-full mb-12 bg-white rounded-lg shadow-xl p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">{title}</h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                className='mySwiper py-10 px-0'
                spaceBetween={20}
                loopFillGroupWithBlank={true}
            >
                {slides.map((slide, idx) => {
                    const placeholderSrc = slide.imageUrl.replace('/upload/', '/upload/q_auto:low,w_40/');
                    const optimizedImage = slide.imageUrl.replace('/upload/', '/upload/w_600,f_auto,q_auto/');
                    return (
                        <SwiperSlide key={idx} className='!w-auto'>
                            <div className="w-[240px] sm:w-[300px] md:w-[380px] bg-white rounded-lg shadow-lg overflow-hidden p-3 transition-all duration-300 ">
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
            <div className="w-full max-w-6xl my-8 px-4">
                <GallerySlider title="Identitas Kami" slides={momenSlides} />
                <GallerySlider title="Pengurus Kelas" slides={pengurusSlides} />
            </div>
            <h2 className="text-lg md:text-xl mt-8 text-center font-semibold italic text-gray-700">"Smart System, Strong Synergy"</h2>
            <p className="text-base my-4 text-center text-gray-500">2024</p>
        </div>
    );
};

export default AboutSymphony;