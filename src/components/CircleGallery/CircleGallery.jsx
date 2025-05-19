import React, { useEffect, useState } from "react";
import gambar1 from "/assets/logoSymphony.png";
import styles from "./CircleGallery.module.css";

function CircleGallery() {
   const [center, setCenter] = useState({ x: 0, y: 0 });
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false); // Menambahkan state untuk animasi
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
   const words = ["Generasi Emas", "Programmer", "System Analyst", "Designer"];

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768);
         setCenter({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
         });
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);


   // ganti kata
   useEffect(() => {
      const interval = setInterval(() => {
         setIsAnimating(true); // Set animating ke true ketika perubahan kata terjadi
         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);

      return () => clearInterval(interval);
   }, [words.length]);

   // Reset animasi setelah animasi selesai
   useEffect(() => {
      if (isAnimating) {
         setTimeout(() => {
            setIsAnimating(false); // Matikan animasi setelah 1 detik
         }, 1000); // Waktu sesuai dengan durasi animasi
      }
   }, [currentWordIndex]);

   const radius = isMobile ? 160 : 270;
   const imageSize = isMobile ? 20 : 26;
   const totalImages = isMobile ? 16 : 28;


   const images = Array.from({ length: totalImages }, () => gambar1)
   return (
      <div className={styles["circle-gallery"]}>
         <div className={styles["circle-rotation"]}>
            {images.map((src, index) => {
               const angle = (index / images.length) * (2 * Math.PI);
               const x = center.x + radius * Math.cos(angle) - imageSize / 2;
               const y = center.y + radius * Math.sin(angle) - imageSize / 2;
               return (
                  <img
                     key={index}
                     src={src}
                     alt={`Gallery ${index}`}
                     className={styles["circle-image"]}
                     style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        width: `${imageSize}px`,
                        height: `${imageSize}px`,
                     }}
                  />
               );
            })}
         </div>

         {/* Teks Tengah */}
         <div
            className={styles["center-text"]}
            style={{
               fontSize: isMobile ? "12px" : "16px",
            }}
         >
            Symphony,{" "}
            <span
               className={`${styles["underlined-text"]} ${isAnimating ? styles["fade-in"] : ""}`}
            >
               {words[currentWordIndex]}
            </span>{" "}
            pilihan kamu.
         </div>

         {/* Teks bawah kiri */}
         <div
            className={styles["bottom-left-text"]}
            style={{
               fontSize: isMobile ? "10px" : "12px",
            }}
         >
            "Smart system, strong synergy" <br />
            Dengan teknologi, buat perubahan yang berarti
         </div>
      </div>
   );
}

export default CircleGallery;
