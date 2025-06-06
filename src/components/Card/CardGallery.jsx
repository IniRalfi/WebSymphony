import React from 'react';

const CardGallery = ({ title, name, imageUrl, className }) => {
  return (
    <div className={`w-[90%] md:w-[600px] mx-auto h-full flex flex-col rounded-lg shadow-lg overflow-hidden flex-shrink-0 bg-white ${className}`}>
      <div className="w-full h-[160px] md:h-[320px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover" // object-cover adalah kunci
        />
      </div>

      <div className="w-full p-2 md:p-3 flex-grow flex flex-col justify-center text-center">
        <p className="m-0 text-xs md:text-sm text-gray-500">{title}</p>
        <p className="m-0 mt-1 font-bold text-base md:text-lg text-gray-800">{name}</p>
      </div>
    </div>
  );
};

export default CardGallery;
