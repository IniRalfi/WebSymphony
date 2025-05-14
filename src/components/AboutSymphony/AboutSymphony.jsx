import React from 'react';
import styles from './AboutSymphony.module.css';
import CardGallery from '../Card/CardGallery'; // sesuaikan path jika perlu


const aboutSymphony = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Symphony</h1>
			<h2 className={styles.subtitle}>Tentang</h2>
			<div className={styles.content}>
				<CardGallery
					title="Ketua angkatan"
					name="Rito Ramadhan"
					imageUrl="https://res.cloudinary.com/iniralfi/image/upload/v1746965928/DSC09547_rp06mx.jpg"
				/>
				<div className={styles.features}>
					<CardGallery
						title="Ketua angkatan"
						name="Rito Ramadhan"
						imageUrl="https://res.cloudinary.com/iniralfi/image/upload/v1746925731/IMG_9546_ugtjvm.jpg"
					/>
					<div className={styles.featureItem}>
						<CardGallery
							title="Ketua angkatan"
							name="Rito Ramadhan"
							imageUrl="https://res.cloudinary.com/iniralfi/image/upload/v1746925731/IMG_9546_ugtjvm.jpg"
						/>
					</div>

					<div className={styles.featureItem}>
						<CardGallery
							title="Ketua angkatan"
							name="Rito Ramadhan"
							imageUrl="https://res.cloudinary.com/iniralfi/image/upload/v1746925731/IMG_9546_ugtjvm.jpg"
						/>
					</div>
				</div>
			</div>
			<h2 className={styles.year}>2024</h2>
		</div>
	);
};

export default aboutSymphony;
