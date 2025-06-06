import React from 'react';

const ProfileCard = ({ nama, nim, foto, onClick }) => {

  const handleImageError = (e) => {
    e.target.onerror = null; // Mencegah loop error jika gambar fallback juga gagal
    // Kamu bisa ganti dengan path ke gambar placeholder lokalmu
    e.target.src = "https://via.placeholder.com/200x250/ccc/fff?text=No+Image";
  };

  return (
    <div className="w-full cursor-pointer group" onClick={onClick}>
      <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-md">
        <img
          src={foto}
          alt={nama}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          onError={handleImageError}
        />
      </div>
      <div className="pt-3 text-left">
        <p className="text-xs text-gray-500 m-0">{nim}</p>
        <h2 className="text-base font-semibold text-gray-900 m-0 mt-0.5">{nama}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;