
import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import Lirik from "../components/Lirik.jsx"


const Lagu = () => {
  return (
    <div>
      <Header label='Lirik Lagu' title='Symphony Abadi' />
      <Lirik />
      <Footer />
    </div>
  );
};

export default Lagu;
