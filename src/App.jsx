import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Lagu from './pages/Lagu';
import ProfileMahasiswa from './pages/ProfileMahasiswa';
import Gallery from "./pages/Gallery";

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Home />} />
        <Route path="/lagu" element={<Lagu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile-mahasiswa" element={<ProfileMahasiswa />} />
      </Routes>
    </Router>
  );
}

export default App