import React, { useEffect, useState } from "react";
import gambar1 from "/assets/nahida.png";
import styles from "./CircleGallery.module.css";

function CircleGallery() {
   const [center, setCenter] = useState({ x: 0, y: 0 });
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false); // Menambahkan state untuk animasi

   const words = ["Generasi Emas", "Programmer", "System Analyst", "Designer"];

   useEffect(() => {
      const handleResize = () => {
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
                     }}
                  />
               );
            })}
         </div>

         {/* Teks Tengah */}
         <div className={styles["center-text"]}>
            Symphony,{" "}
            <span
               className={`${styles["underlined-text"]} ${isAnimating ? styles["fade-in"] : ""
                  }`}
            >
               {words[currentWordIndex]}
            </span>{" "}
            pilihan kamu.
         </div>

         <div className={styles["bottom-left-text"]}>
            "Smart system, strong synergy" <br />
            Dengan teknologi, buat perubahan yang berarti
         </div>
      </div>
   );
}

export default CircleGallery;
