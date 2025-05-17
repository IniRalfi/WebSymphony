import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Ganti dari effect-fade ke effect-coverflow


import styles from './AboutSymphony.module.css';
import CardGallery from '../Card/CardGallery';
import LabSisfo from '/assets/LabSisfo.jpg';
import sign1 from '/assets/HandSignBack.png';
import sign2 from '/assets/HandSignFront.png';
import Symphony from '/assets/Symphony.png';

const AboutSymphony = () => {
	const [swiperRef, setSwiperRef] = React.useState(null);
	const slides = [
		{
			title: 'Ketua angkatan',
			name: 'Rito Ramadhan',
			imageUrl: 'https://res.cloudinary.com/iniralfi/image/upload/v1746925666/IMG_9472_o9lxz0.jpg',
		},
		{
			title: 'Tempat Favorit',
			name: 'Lab Sisfo',
			imageUrl: LabSisfo,
		},
		{
			title: 'Hand Sign - Bagian Depan',
			name: '',
			imageUrl: sign2,
		},
		{
			title: 'Hand Sign - Bagian Belakang',
			name: '',
			imageUrl: sign1,
		},
		{
			title: 'Logo Angkatan',
			name: 'Symphony',
			imageUrl: Symphony,
		},

	];

	return (

		<div className={styles.container}>
			<h1 className={styles.title}>Symphony</h1>
			<h2 className={styles.subtitle}>Tentang</h2>
			<p className={styles.text}>
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

			<div className={styles.swiperWrapper}>
				<Swiper
					modules={[EffectCoverflow]} // Tambahkan modules
					onSwiper={setSwiperRef} // Simpan swiper instance
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					spaceBetween={40}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 120,
						modifier: 2,
						slideShadows: false,
						scale: 0.8
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
					slideToClickedSlide={true}
					loop={true}
				>
					{slides.map((slide, idx) => (
						<SwiperSlide key={idx} style={{ width: '280px', height: '380px' }}>
							<CardGallery
								title={slide.title}
								name={slide.name}
								imageUrl={slide.imageUrl}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<h2 className={styles.footer}>"Smart System, Strong Synergy"</h2>
			<p className={styles.text}>2024</p>
		</div>
	);
};

export default AboutSymphony;
