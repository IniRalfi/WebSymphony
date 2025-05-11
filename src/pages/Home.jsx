import React from "react";
import CircleGalley from '../components/CircleGallery/CircleGallery';
import AboutSymphony from '../components/AboutSymphony/AboutSymphony';

const Home = () => {
  return (
    <div>

      <section id='circle'>
        <CircleGalley />
      </section>

      <section id='about'>
        <AboutSymphony />
      </section>
    </div>
  );
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Home;