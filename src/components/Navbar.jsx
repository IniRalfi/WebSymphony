import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logoSymphony from '../assets/logoSymphony.png';
import { useNavigation } from './hooks/useNavigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { activeLink, handleAboutClick, handleHomeClick, handleLinkClick } = useNavigation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setOpen(false);

  const navBaseClasses = "w-full flex justify-between items-center px-4 md:px-8 py-3 fixed top-0 transition-all duration-300 ease-in-out";
  const navColorClasses = isHome
    ? (scrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white")
    : (scrolled ? "bg-white text-black shadow-lg" : "bg-[#ef4a00] text-white");
  const navLinkActiveClass = "font-bold";
  const mobileMenuColorClasses = isHome
    ? (scrolled ? "bg-white" : "bg-[#2100b1]")
    : (scrolled ? "bg-white" : "bg-[#ef4a00]");

  return (
    <nav className={`${navBaseClasses} ${navColorClasses} z-50`}>

      <div className="text-lg font-bold flex items-center gap-2">
        <img src={logoSymphony} alt="Logo" className={`h-9 transition-all duration-300 ${scrolled ? 'invert' : ''}`} />
        Symphony
      </div>
      <div className={`group md:hidden flex flex-col gap-1.5 cursor-pointer ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className={`w-6 h-0.5 transition-all duration-300 ${(scrolled) ? 'bg-black' : 'bg-white'} group-[.open]:rotate-45 group-[.open]:translate-y-2`}></div>
        <div className={`w-6 h-0.5 transition-all duration-300 ${(scrolled) ? 'bg-black' : 'bg-white'} group-[.open]:opacity-0`}></div>
        <div className={`w-6 h-0.5 transition-all duration-300 ${(scrolled) ? 'bg-black' : 'bg-white'} group-[.open]:-rotate-45 group-[.open]:-translate-y-2`}></div>
      </div>

      <ul className={`
                ${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center 
                absolute md:static top-16 right-4 p-4 md:p-0 rounded-md 
                md:bg-transparent gap-4 ${mobileMenuColorClasses}
            `}>
        {[
          ['/', 'Beranda'],
          ['/#about', 'Tentang'],
          ['/lagu', 'Lagu'],
          ['/gallery', 'Galeri'],
          ['/profile-mahasiswa', 'Profile Mahasiswa'],
        ].map(([path, label]) => (
          <li key={path}>
            {label === 'Tentang' ? (
              <a href={path}
                onClick={(e) => { handleAboutClick(e); closeMobileMenu(); }}
                className={activeLink === path ? navLinkActiveClass : ''}>
                {label}
              </a>
            ) : label === 'Beranda' ? (
              <NavLink to={path} end
                onClick={() => { handleHomeClick(); closeMobileMenu(); }}
                className={activeLink === '/' ? navLinkActiveClass : ''}>
                {label}
              </NavLink>
            ) : (
              <NavLink to={path} end
                onClick={() => { handleLinkClick(path); closeMobileMenu(); }}
                className={activeLink === path ? navLinkActiveClass : ''}>
                {label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;