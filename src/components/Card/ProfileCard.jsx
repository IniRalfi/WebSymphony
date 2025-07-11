import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProfileCard = ({ nama, nim, foto, onClick }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/200x266/ccc/fff?text=No+Image";

  };
  const placeholderSrc = foto.replace('/upload/', '/upload/w_20,e_blur:1000,q_1,f_auto/');
  const optimizedSrc = foto.replace('/upload/', '/upload/w_400,f_auto,q_auto/');

  return (
    <div className="w-full cursor-pointer group" onClick={onClick}>
      <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md bg-gray-200">
        <LazyLoadImage
          src={optimizedSrc}
          alt={nama}
          placeholderSrc={placeholderSrc}
          effect="blur"
          className="w-full h-full object-cover object-center transition-transform ease-in-out group-hover:scale-105 duration-500 will-change-transform"
          onError={handleImageError}
        />
      </div>
      <div className="pt-2 text-left">
        <p className="text-xs text-gray-500 m-0 truncate">{nim}</p>
        <h2 className="text-base font-semibold text-gray-900 m-0 truncate">{nama}</h2>
      </div>
    </div>
  );
};
export default ProfileCard;