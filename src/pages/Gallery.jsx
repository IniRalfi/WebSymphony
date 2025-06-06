import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import Gallery from "../components/GalleryKenangan.jsx"


const GalleryKenangan = () => {
  return (
    <div>
      <Header label='Gallery' title='Kenangan Symphony' />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryKenangan;
