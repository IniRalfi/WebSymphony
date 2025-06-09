import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import Profile from "../components/ProfileMahasiswa.jsx";

const ProfileMahasiswa = () => {
  return (
    <div>
      <Header label='Profile Mahasiswa' title='Mahasiswa Symphony' />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfileMahasiswa;