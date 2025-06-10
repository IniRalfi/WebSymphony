# 🎵 WebSymphony

**WebSymphony** adalah website profil resmi angkatan **Sistem Informasi 2024 Universitas Tanjungpura (UNTAN)** yang dinamai **Symphony**. Proyek ini dibuat untuk memenuhi tugas bidang akademik sekaligus sebagai sarana agar masyarakat kampus, khususnya keluarga besar Sistem Informasi, dapat mengakses informasi tentang angkatan Symphony secara menyeluruh.

Website ini menampilkan profil mahasiswa, dokumentasi kegiatan, lagu angkatan, serta struktur kepengurusan dalam bentuk yang interaktif dan menarik.

## ✨ Fitur Utama

-   **Beranda Interaktif**  
    Galeri melingkar (circle gallery) dengan logo Symphony di tengah dan teks animasi seperti _[Designer, Programmer, Dll. Pilihan Anda]_.

-   **Halaman Tentang dan Pengurus Angkatan**  
    Menampilkan profil ketua angkatan, sekretaris, bendahara 1 & 2.

-   **Halaman Lagu Angkatan**  
    Berisi lirik lagu angkatan berjudul _Symphony Abadi_.

-   **Galeri Kegiatan**  
    Kumpulan dokumentasi foto momen-momen penting angkatan.

-   **Profil Mahasiswa Symphony**  
    Menampilkan daftar mahasiswa per kelas, dengan fitur klik untuk melihat detail seperti quotes pribadi dan tautan ke media sosial masing-masing.

## 🛠️ Teknologi yang Digunakan

-   ⚡ [Vite](https://vitejs.dev/) – untuk pengembangan frontend cepat
-   ⚛️ [React.js](https://reactjs.org/) – library utama untuk antarmuka pengguna
-   💨 [Tailwind CSS](https://tailwindcss.com/) – utility-first CSS framework
-   🖼️ [Swiper.js](https://swiperjs.com/) – galeri slider yang modern dan responsif
-   📂 JSON – digunakan sebagai struktur database internal
-   ☁️ Cloudinary – media storage untuk foto mahasiswa

## 🧾 Struktur Proyek

-   `/assets/` → berisi foto-foto mahasiswa, disimpan melalui Cloudinary
-   `/data/` → JSON file yang menyimpan data mahasiswa, data keuangan, quotes, media sosial, dll.
-   Komponen React disusun modular: footer, header, dan page-page utama.

## 🚀 Cara Menjalankan di Lokal

1. Clone repository ini:
    ```bash
    git clone https://github.com/IniRalfi/WebSymphony
    cd WebSymphony
    Install dependensi:
    ```

bash
Salin
Edit
npm install
Jalankan server lokal:

bash
Salin
Edit
npm run dev
Akses proyek melalui:

arduino
Salin
Edit
http://localhost:5173/
✅ Website ini juga telah dideploy di Vercel, kunjungi: https://symphony24.vercel.app

👥 Tim Pengembang
WebSymphony dikembangkan oleh para mahasiswa angkatan Symphony dengan pembagian tugas sebagai berikut:

Project Manager: Nabila Nur Anisa

Ketua Analyst: Timothy Walukow

Ketua UI/UX Designer: Evan Mulya Oktarohmat, Rito Ramadhan dan ditambahkan oleh ketua tim programmer

Ketua Tim Programmer: Rafli Pratama

Programmer & Kontributor:

Nabil – integrasi API foto untuk kelas A

Fahdil – integrasi API foto untuk kelas B

Kania – pengisian data mahasiswa kelas B, setup database awal, testing awal

Jesika – input quotes & sosial media kelas B, menangani merge conflict

Marcello – input quotes & sosial media kelas A

Rasyid – membuat page lirik lagu dan struktur folder header/footer

Frans – membuat komponen header dan footer

📌 Catatan
Website ini akan terus dioptimalkan dan dikembangkan seiring waktu.

Inovasi dan perbaikan akan selalu diupayakan agar tampil lebih informatif dan menarik.

📄 Lisensi
Proyek ini bersifat terbuka dan dapat dimodifikasi untuk pembelajaran atau pengembangan pribadi. Silakan hubungi tim pengembang untuk kontribusi atau kolaborasi.

Smart System, Strong Synergy
Symphony 2024 – Sistem Informasi UNTAN
