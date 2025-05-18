import React from "react";
import Header from "../components/HeaderFooter/Header.jsx";
import Footer from "../components/HeaderFooter/Footer.jsx"
import Gallery from "../components/GalleryKenangan/GalleryKenangan.jsx"


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
