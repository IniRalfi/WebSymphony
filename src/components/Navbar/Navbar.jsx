// components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>🎵 Symphony</div>

      <div className={`${styles["menu-toggle"]} ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className={styles["bar"]}></div>
        <div className={styles["bar"]}></div>
        <div className={styles["bar"]}></div>
      </div>

      <ul className={`${styles["nav-links"]} ${open ? styles["show"] : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? styles["active"] : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? styles["active"] : ""}
            onClick={() => setOpen(false)}
          >
            Tentang
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lagu"
            className={({ isActive }) => isActive ? styles["active"] : ""}
            onClick={() => setOpen(false)}
          >
            Lagu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => isActive ? styles["active"] : ""}
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
