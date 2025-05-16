import React from 'react';
import styles from './header.module.css';

const Header = ({ label = 'Profile', title = 'Mahasiswa' }) => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div>
                    <p className={styles.profileLabel}>{label}</p>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;