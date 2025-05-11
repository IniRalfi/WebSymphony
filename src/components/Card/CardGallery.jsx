import React from 'react';
import styles from './CardGallery.module.css'
const CardGallery = () => {
  return (
    <div className={styles['card']}>
      <div className={styles["image"]}>
      </div>
      <div className={styles["text-container"]}>
        <p className={styles["title"]}>Ketua angkatan</p>
        <p className={styles["name"]}>Rito Ramadhan</p>
      </div>
    </div>
  );
}
export default CardGallery;