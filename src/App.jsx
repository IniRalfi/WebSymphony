import React from 'react';
import CircleGallery from '/components/CircleGallery/CircleGallery';
import AboutSymphony from '/components/AboutSymphony/AboutSymphony'; // pastikan sudah di-import

function App() {
  return (
    <div className="container">
      <CircleGallery />
      <AboutSymphony />
    </div>
  );
}

export default App;
