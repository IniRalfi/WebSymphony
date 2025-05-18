import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from './GalleryKenangan.module.css';

const Gallery = () => {
  const [galleryData, setGalleryData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Fetch data dari JSON
    const fetchData = async () => {
      try {
        const response = await fetch('../../database/data_gallery.json');
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!galleryData.length) return <div className={styles.empty}>No gallery data found</div>;

  return (
    <div className={styles.galleryContainer}>
      {galleryData.map((item) => (
        <div key={item.id} className={styles.galleryItem}>
          <div className={styles.galleryHeader}>
            <h3 className={styles.galleryTitle}>{item.title}</h3>
            <span className={styles.date}>{new Date(item.date).toLocaleDateString()}</span>
          </div>
          <div className={styles.swiperContainer}>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              spaceBetween={30}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1.8,
                slideShadows: false,
                scale: 0.85
              }}
              breakpoints={{
                320: { // Mobile kecil
                  spaceBetween: 20,
                  coverflowEffect: {
                    depth: 100,
                    modifier: 1.2,
                    scale: 0.8
                  }
                },
                768: { // Tablet
                  spaceBetween: 20,
                  coverflowEffect: {
                    scale: 0.85
                  }
                },
                1024: { // Desktop
                  spaceBetween: 30,
                  coverflowEffect: {
                    scale: 0.9
                  }
                }
              }}
              modules={[EffectCoverflow, Autoplay]}
              className={styles.swiper}
              lazyPreloadPrevNext={true}
            >
              {item.photos.map((photo, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.photoCard}>
                    <img
                      src={photo} // Auto-optimize Cloudinary
                      alt={`${item.title} - Foto ${index + 1}`}
                      loading="lazy"
                      className={styles.photoImage}
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