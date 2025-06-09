import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';
import logoSymphony from '../assets/logoSymphony.png';
import logoHmsiUntan from '../assets/logoHmsiUntan.png';
import starLeft from '../assets/bintang_kiri_atas.png';
import starRight from '../assets/bintang_kanan_bawah.png';

const Footer = () => {
    const { activeLink, handleAboutClick, handleHomeClick, handleLinkClick } = useNavigation();
    const activeClass = "font-extrabold"; // Kelas untuk link yang aktif

    return (
        <footer className="relative bg-[#2100b1] text-white px-4 py-8 md:py-12 overflow-hidden">
            <img src={starLeft} alt="Decorative Star" className="absolute top-0 left-0 max-w-[200px] md:max-w-[300px] pointer-events-none z-0 opacity-50" />
            <img src={starRight} alt="Decorative Star" className="absolute bottom-0 right-0 max-w-[200px] md:max-w-[300px] pointer-events-none z-0 opacity-50" />
            <div className="relative z-10 flex flex-wrap justify-between items-start gap-8 md:gap-16 max-w-7xl mx-auto">
                <div className="flex-1 basis-[250px] flex justify-center md:justify-start">
                    <img src={logoSymphony} alt="Logo Symphony" className="max-w-[80px]" />
                </div>
                <div className="flex-1 basis-[250px] text-center md:text-left text-sm">
                    <p className="my-1">Jl. Prof. Dr. Hadari Nawawi, Gdg. FMIPA Baru</p>
                    <p className="my-1">Telepon : (0561) 577963</p>
                    <p className="my-1">Email : sisfo@untan.ac.id</p>
                </div>
                <div className="flex-1 basis-[250px] flex justify-center md:justify-end">
                    <img src={logoHmsiUntan} alt="Logo HMSI Untan" className="max-w-[100px]" />
                </div>
            </div>


            <div className="relative z-10 mt-8 flex justify-center gap-4 md:gap-6 flex-wrap max-w-7xl mx-auto">
                <Link
                    to="/"
                    className={`font-medium transition-opacity hover:opacity-80 ${activeLink === '/' ? activeClass : ''}`}
                    onClick={handleHomeClick}
                >
                    Beranda
                </Link>

                <a
                    href="/#about"
                    onClick={handleAboutClick}
                    className={`font-medium transition-opacity hover:opacity-80 ${activeLink === '/#about' ? activeClass : ''}`}
                >
                    Tentang
                </a>

                <Link
                    to="/lagu"
                    onClick={() => handleLinkClick('/lagu')}
                    className={`font-medium transition-opacity hover:opacity-80 ${activeLink === '/lagu' ? activeClass : ''}`}
                >
                    Lagu
                </Link>

                <Link
                    to="/gallery"
                    onClick={() => handleLinkClick('/gallery')}
                    className={`font-medium transition-opacity hover:opacity-80 ${activeLink === '/gallery' ? activeClass : ''}`}
                >
                    Galeri
                </Link>

                <Link
                    to="/profile-mahasiswa"
                    onClick={() => handleLinkClick('/profile-mahasiswa')}
                    className={`font-medium transition-opacity hover:opacity-80 ${activeLink === '/profile-mahasiswa' ? activeClass : ''}`}
                >
                    Profile Mahasiswa
                </Link>

                <a href="https://instagram.com/the.symphony24" target="_blank" rel="noopener noreferrer" className="font-medium transition-opacity hover:opacity-80">
                    Instagram
                </a>
            </div>
        </footer>
    );
};

export default Footer;