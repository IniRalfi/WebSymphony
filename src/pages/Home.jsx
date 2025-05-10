import React from "react";
import CircleGalley from '../../components/CircleGallery/CircleGallery';
import AboutSymphony from '../../components/AboutSymphony/AboutSymphony';

const Home = () => {
  return (
    <div>
      <nav>
        <button onClick={() => scrollToSection('circle')}>Ke Circle Gallery</button>
        <button onClick={() => scrollToSection('about')}>Ke About Symphony</button>
      </nav>

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