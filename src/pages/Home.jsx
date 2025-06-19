import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircleGalley from '../components/CircleGallery';
import AboutSymphony from '../components/AboutSymphony.jsx';
import Footer from "../components/Footer.jsx"

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);
  return (
    <div>
      <title>Symphony24 - Website Mahasiswa Sisfo angkatan 2024</title>
      <meta name="description" content="Selamat datang di website resmi angkatan Symphony 2024, Sistem Informasi, FMIPA, Universitas Tanjungpura. Kenali kami lebih dekat!" />
      <section id='circle'>
        <CircleGalley />
      </section>

      <section id='about'>
        <AboutSymphony />
      </section>

      <Footer />
    </div>
  );
};

export default Home;