import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import SliderControls from "./SliderControls";

const ImageSlider = ({ images, theme = "light" }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () =>
    setCurrentPage((prev) => (prev === images.length - 1 ? prev : prev + 1));

  const prevSlide = () =>
    setCurrentPage((prev) => (prev === 0 ? prev : prev - 1));

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <Motion.img
            key={images[currentPage]}
            src={images[currentPage]}
            alt="slider"
            className="absolute top-0 left-0 w-full h-full object-contain lg:object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>

      {/* أزرار التحكم */}
      <SliderControls
        currentPage={currentPage}
        totalPages={images.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onDotClick={setCurrentPage}
        theme={theme}
      />
    </div>
  );
};

export default ImageSlider;
