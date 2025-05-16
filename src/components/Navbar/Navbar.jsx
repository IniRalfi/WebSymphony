
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoSymphony from '/assets/logoSymphony.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll)  // scrollY > 50px baru berubah
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`${styles.navbar} ${isHome ? styles.homeNavbar : styles.defaultNavbar} ${scrolled ? styles.scrolled : ''} `}>
      <div className={styles["logo"]}>
        <img src={logoSymphony} alt="Logo" style={{ height: '36px', marginRight: '10px', marginLeft: '15px' }} />
        Symphony
      </div>

      <div className={`${styles["menu-toggle"]} ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className={styles["bar"]}></div>
        <div className={styles["bar"]}></div>
        <div className={styles["bar"]}></div>
      </div>

      <ul className={`${styles["nav-links"]} ${open ? (isHome ? styles.showHome : styles.showDefault) : ""}`}>

        {[
          ['/', 'Beranda'],
          ['/about', 'Tentang'],
          ['/lagu', 'Lagu'],
          ['/gallery', 'Gallery'],
          ['/profile-mahasiswa', 'Profile Mahasiswa'],
        ].map(([path, label]) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => isActive ? styles['active'] : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default Navbar;
