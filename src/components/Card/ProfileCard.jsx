import React from 'react';
import styles from './ProfileCard.module.css'

const ProfileCard = ({ nama, nim, foto, onClick }) => {
  return (
    <div className={styles["profile-card"]} onClick={onClick}>
      <img
        src={foto}
        alt={nama}
        className={styles["profile-image"]}
        onError={(e) => {
          e.target.src = "fallback.jpg"; // opsional fallback jika gambar error
        }}
      />
      <div className={styles["profile-info"]}>
        <p className={styles["student-id"]}>{nim}</p>
        <h2 className={styles["student-name"]}>{nama}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;