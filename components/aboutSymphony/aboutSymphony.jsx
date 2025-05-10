import React from 'react';
import styles from './aboutSymphony.module.css';

const aboutSymphony = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Symphony</h1>
			<h2 className={styles.subtitle}>Tentang</h2>
			<div className={styles.content}>
				<div className={styles.profile}>
					<img src="path/to/your/image.jpg" alt="Rito Ramadhan" className={styles.profileImage} />
					<h3 className={styles.role}>Ketua angkatan</h3>
					<p className={styles.name}>Rito Ramadhan</p>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue et tellus fermentum porta vitae non nisl.
					</p>
				</div>
				<div className={styles.features}>
					<div className={styles.featureItem}>
						<h3 className={styles.featureTitle}>Tempat favorit kami</h3>
						<img src="path/to/your/labsisfo.jpg" alt="Lab Siso" className={styles.featureImage} />
						<p className={styles.featureDescription}>Lab siso</p>
					</div>
					<div className={styles.featureItem}>
						<h3 className={styles.featureTitle}>Sekilas moment</h3>
						<img src="path/to/your/buka.jpg" alt="Buka Bersama" className={styles.featureImage} />
						<p className={styles.featureDescription}>Buka bersama</p>
					</div>
					<div className={styles.featureItem}>
						<h3 className={styles.featureTitle}>Sekilas informasi</h3>
						<img src="path/to/your/handsign.jpg" alt="Hand Sign" className={styles.featureImage} />
						<p className={styles.featureDescription}>Hand sign</p>
					</div>
				</div>
			</div>
			<h2 className={styles.year}>2024</h2>
		</div>
	);
};

export default aboutSymphony;
