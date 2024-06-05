import React, { useState } from "react";

import "./App.css";

const images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/240/200/300",
  "https://picsum.photos/id/236/200/300",
  "https://picsum.photos/id/235/200/300",
  "https://picsum.photos/id/234/200/300",
  "https://picsum.photos/id/233/200/300",
  "https://picsum.photos/id/232/200/300",
  "https://picsum.photos/id/231/200/300",
  "https://picsum.photos/id/230/200/300",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 3);
    }
    console.log("Next currentIndex:", currentIndex);
  };

  const prevSlide = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
    console.log("Prev currentIndex:", currentIndex);
  };
  function handleSliderChange(e) {
    console.log("New slider value:", e.target.value);
    setCurrentIndex(e.target.value * 3);
  }
  return (
    <div className="slider">
      <div className="slider_images">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => {
          console.log(currentIndex);
          return <img key={index} src={image} alt="slider" />;
        })}
      </div>
      <div className="btn-container">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <input
        type="range"
        min="0"
        max={Math.ceil(images.length / 3) - 1}
        value={currentIndex / 3}
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
