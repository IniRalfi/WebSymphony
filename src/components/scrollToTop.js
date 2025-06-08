import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // 'pathname' akan berisi path URL saat ini (misal: '/', '/gallery', '/lagu')
    const { pathname } = useLocation();

    // 'useEffect' ini akan berjalan setiap kali nilai 'pathname' berubah
    useEffect(() => {
        // Lakukan scroll ke koordinat paling atas (0, 0)
        window.scrollTo(0, 0);
    }, [pathname]); // <-- Kunci utamanya di sini

    // Komponen ini tidak perlu menampilkan apapun ke layar
    return null;
};

export default ScrollToTop;
