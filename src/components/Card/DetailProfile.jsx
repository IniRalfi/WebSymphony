import React from 'react';
import styles from './DetailProfile.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DetailProfile = ({ mahasiswa, onClose, onPrev, onNext }) => {
  if (!mahasiswa) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <Swiper
            modules={[Pagination, Autoplay]} // Hapus Navigation dari modules
            spaceBetween={0}
            slidesPerView={1}
            pagination={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            loop
            className={styles.swiperContainer}
            noSwiping={true} // Tambahkan ini
            watchSlidesProgress={false} // Tambahkan ini
            lazyPreloadPrevNext={true}
          >
            {mahasiswa.foto.map((src, i) => (
              <SwiperSlide key={i} className={styles.swiperSlide} style={{ height: '100%' }}>
                <img
                  src={src} alt={`Foto ${i + 1}`}
                  className={styles.profileImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.infoContainer}>
          <h2 className={styles.title}>Symphony 24</h2>
          <div className={styles.detail}>
            <p> Nama: {mahasiswa.nama}</p>
            <p> NIM:  {mahasiswa.nim}</p>
            <p> Quotes: "{mahasiswa.quotes}"</p>
          </div>
          <div className={styles.social}>
            <a
              href={`https://instagram.com/${mahasiswa.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <img
                src="https://res.cloudinary.com/iniralfi/image/upload/v1747568076/instagram_tn03rt.png"
                alt="IG"
                width={32}
              />
            </a>
          </div>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close profile"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
