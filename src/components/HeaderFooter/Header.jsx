import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div>
                    <p className={styles.profileLabel}>Profile</p>
                    <h1 className={styles.title}>Mahasiswa</h1>
                </div>
                <div className={styles.menuIcon}>
                    <img assets="titik_tiga.png" alt="Menu" className={styles.menuImage} />
                </div>
            </div>
        </div>
    );
};

export default Header;