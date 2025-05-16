
import React from "react";
import Header from "../components/HeaderFooter/Header.jsx";
import Footer from "../components/HeaderFooter/Footer.jsx"
import Lirik from "../components/Lirik/Lirik"

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
