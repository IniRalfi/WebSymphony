import React from 'react';
import styles from './CardGallery.module.css';

const CardGallery = ({ title, name, imageUrl, className }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["text-container"]}>
        <p className={styles.title}>{title}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default CardGallery;
