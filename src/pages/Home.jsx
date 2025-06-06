import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CircleGalley from '../components/CircleGallery/CircleGallery';
import AboutSymphony from '../components/AboutSymphony.jsx';
import Footer from "../components/HeaderFooter/Footer.jsx"

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