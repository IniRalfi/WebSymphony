import React, { useEffect, useState, useRef } from "react"; // 1. Impor useRef
import gambar1 from "../assets/logoSymphony.png";

function CircleGallery() {
   const [center, setCenter] = useState({ x: 0, y: 0 });
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
   const words = ["Generasi Emas", "Programmer", "System Analyst", "Designer"];

   const containerRef = useRef(null);

   useEffect(() => {
      const handleResize = () => {
         if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setCenter({
               x: rect.width / 2,
               y: rect.height / 2
            });
         }
         setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1500);
      return () => clearInterval(interval);
   }, [words.length]);

   const radius = isMobile ? 150 : 280;
   const imageSize = isMobile ? 20 : 28;
   const totalImages = isMobile ? 16 : 24;
   const images = Array.from({ length: totalImages }, () => gambar1);

   return (
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#2100b1] z-10 pt-24">

         <div className="absolute inset-0 origin-center animate-rotate-slow">
            {images.map((src, index) => {
               const angle = (index / images.length) * (2 * Math.PI);
               const x = center.x + radius * Math.cos(angle) - imageSize / 2;
               const y = center.y + radius * Math.sin(angle) - imageSize / 2;
               return (
                  <img key={index} src={src} alt={`Gallery ${index}`}
                     className="absolute origin-center"
                     style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        width: `${imageSize}px`,
                        height: `${imageSize}px`
                     }}
                  />
               );
            })}
         </div>

         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-xs md:text-base whitespace-nowrap">
            <span className="mx-3">Symphony,</span>
            {words.map((word, index) => (
               <span key={index} className="absolute left-0 right-0">
                  <span className={`font-bold underline decoration-white decoration-1 transition-opacity duration-500 ease-in-out ${currentWordIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                     {word}
                  </span>
               </span>
            ))}
            <span className="invisible mx-1">{words[currentWordIndex]}</span>
            <span>pilihan kamu.</span>
         </div>

         <div className="absolute bottom-5 left-5 text-white leading-relaxed text-[10px] md:text-xs">
            "Smart system, strong synergy" <br />
            Dengan teknologi, buat perubahan yang berarti
         </div>
      </div>
   );
}
export default CircleGallery;