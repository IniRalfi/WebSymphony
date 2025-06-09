import React from 'react';
import galleryData from '../database/data_gallery.json';
import Gallery from '../components/GalleryKenangan';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"

const GalleryKenangan = () => {
  if (!galleryData || galleryData.length === 0) {
    return <div className='text-center p-10 text-lg text-gray-500'>No gallery data found</div>;
  }

  return (
    <div >
      <Header />
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 flex flex-col items-center">
        {galleryData.map((item) => (
          <Gallery key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default GalleryKenangan;