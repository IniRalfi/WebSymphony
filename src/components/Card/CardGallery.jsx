import React from 'react';

const CardGallery = ({ title, name, imageUrl, className }) => {
  return (
    <div className={`w-full h-full flex flex-col rounded-lg shadow-lg overflow-hidden flex-shrink-0 bg-white ${className}`}>
      <div
        className="w-full h-3/4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="w-full h-1/4 p-2 md:p-3 flex flex-col justify-center text-center">
        <p className="m-0 text-xs md:text-sm text-gray-500">{title}</p>
        <p className="m-0 mt-1 font-bold text-base md:text-lg text-gray-800">{name}</p>
      </div>
    </div>
  );
};

export default CardGallery;
