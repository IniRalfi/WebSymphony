import React from 'react';
import styles from './AboutSymphony.module.css';
import CardGallery from '../Card/CardGallery'; // sesuaikan path jika perlu
import LabSisfo from '/assets/LabSisfo.jpg';
import sign1 from '/assets/HandSignBack.png';
import sign2 from '/assets/HandSignFront.png';
import Symphony from '/assets/Symphony.png';




const aboutSymphony = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Symphony</h1>
			<h2 className={styles.subtitle}>Tentang</h2>
			<p className={styles.text}>Symphony bukan sekadar nama, melainkan harmoni dari individu yang bergerak dengan satu irama.
				Kami adalah angkatan 2024 Sistem Informasi, generasi baru yang tumbuh di tengah derasnya arus teknologi dan informasi.

				Di balik setiap baris kode, ada semangat belajar yang tak pernah padam.
				Di setiap diskusi dan kolaborasi, lahir ide-ide brilian yang membentuk masa depan.
				Bersama, kami membangun sistem yang tidak hanya cerdas (smart), tetapi juga terhubung dengan kekuatan sinergi (synergy).

				Kami percaya bahwa teknologi adalah alat,
				tetapi manusialah yang menjadikannya bermakna.
				Dan di sinilah kami berdiri — saling mendukung, saling menguatkan, dan saling terhubung dalam satu visi.

				Symphony adalah bukti bahwa ketika pikiran-pikiran hebat berpadu,
				lahirlah sebuah karya besar yang siap mengubah dunia.</p>


			<div className={styles.content}>
				<CardGallery
					title="Ketua angkatan"
					name="Rito Ramadhan"
					imageUrl="https://res.cloudinary.com/iniralfi/image/upload/v1746925666/IMG_9472_o9lxz0.jpg"
				/>
				<div className={styles.features}>
					<CardGallery
						title="Tempat Favorit"
						name="Lab Sisfo"
						imageUrl={LabSisfo}
					/>
					<div className={styles.featureItem}>
						<CardGallery
							title="Hand Sign"
							name="Bagian Depan"
							imageUrl={sign2}
						/>
					</div>

					<div className={styles.featureItem}>
						<CardGallery
							title="Hand Sign"
							name="Bagian Belakang"
							imageUrl={sign1}
						/>
					</div>

					<div className={styles.featureItem}>
						<CardGallery
							title="Logo Angkatan"
							name="Symphony"
							imageUrl={Symphony}
						/>
					</div>
				</div>
			</div>
			<h2 className={styles.footer}>"Smart System, Strong Synergy</h2>
			<p className={styles.text}>2024</p>
		</div>
	);
};

export default aboutSymphony;
