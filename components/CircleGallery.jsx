import React, { useEffect, useState } from 'react';
import gambar1 from '../assets/nahida.png'
import './CircleGallery.css';
function CircleGallery() {
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setCenter({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const radius = 320; // jarak gambar dari tengah
  const imageSize = 40;
  const images = [
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
    gambar1,
  ];

  return (
    <div className="circle-gallery">
      <div className="circle-rotation">
        {images.map((src, index) => {
          const angle = (index / images.length) * (2 * Math.PI);
          const x = center.x + radius * Math.cos(angle) - imageSize / 2;
          const y = center.y + radius * Math.sin(angle) - imageSize / 2;
          return (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="circle-image"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            />
          );
        })}
      </div>

      <div className="center-text">
        Symphony, <u>Generasi emas</u> pilihan kamu.
      </div>

      <div className="bottom-left-text">
        "Smart system, strong synergy" <br />
        Dengan teknologi, buat perubahan yang berarti
      </div>
    </div>
  );
}

export default CircleGallery;
