import React from 'react';
import styles from './header.module.css';
import gambar from '/assets/titik_tiga.png';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div>
                    <p className={styles.profileLabel}>Profile</p>
                    <h1 className={styles.title}>Mahasiswa</h1>
                </div>
                <div className={styles.menuIcon}>
                    <img src={gambar} alt="Menu" className={styles.menuImage} />
                </div>
            </div>
        </div>
    );
};

export default Header;