import styles from './Footer.module.css';
import logoSymphony from '/assets/logoSymphony.png';
import logoHmsiUntan from '/assets/logoHmsiUntan.png';
import starLeft from '/assets/bintang_kiri_atas.png';
import starRight from '/assets/bintang_kanan_bawah.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Decorative stars */}
            <img src={starLeft} alt="Star Left" className={styles.starLeft} />
            <img src={starRight} alt="Star Right" className={styles.starRight} />

            <div className={styles.content}>
                <div className={styles.left}>
                    <img src={logoSymphony} alt="Logo Symphony" className={styles.logoSymphony} />
                </div>
                <div className={styles.center}>
                    <p>Jl. Prof. Dr. Hidari Nawawi, Gdg. FMIPA Baru</p>
                    <p>Telepon : (0561) 577963</p>
                    <p>Email : sisfo@untan.ac.id</p>
                </div>
                <div className={styles.right}>
                    <img src={logoHmsiUntan} alt="Logo HMSI Untan" className={styles.logoHmsi} />
                </div>
            </div>

            <div className={styles.links}>
                <a href="/">Beranda</a>
                <a href="/gallery">Galeri</a>
                <a href="/profile-mahasiswa">Profile mahasiswa</a>
                <a href="/lagu">Lagu-lagu</a>
                <a href="https://instagram.com/the.symphony24" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
