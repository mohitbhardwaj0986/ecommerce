import React, { useState, useEffect } from 'react';

const Slider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // useEffect hook to automatically move to the next slide
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval); // Automatically move to the next slide after the specified interval

    return () => {
      clearInterval(slideInterval); // Cleanup interval on component unmount
    };
  }, [currentIndex, interval]); // Re-run this effect when currentIndex changes or interval is updated

  return (
    <div className="relative w-full ] mx-auto ">
      {/* Image container */}
      <div className="relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-64  object-contain transition duration-500 ease-in-out"
        />
      </div>

      {/* Left arrow */}
      <button
        onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8249;
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 mx-1 rounded-full mb-2${
              currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
