import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import SliderControls from "./SliderControls";
import CommentCard from "./CommentCard";

const CommentSlider = ({ comments = [], theme = "light" }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (currentPage > comments.length - 1) setCurrentPage(0);
  }, [comments.length, currentPage]);

  if (!comments || comments.length === 0) return null;

  const nextSlide = () =>
    setCurrentPage((prev) => (prev === comments.length - 1 ? prev : prev + 1));

  const prevSlide = () =>
    setCurrentPage((prev) => (prev === 0 ? prev : prev - 1));

  return (
    <div className="z-10 w-full flex flex-col items-center my-auto mr-5">
      <div className="relative  flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <Motion.div
            key={comments[currentPage].id ?? currentPage} 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <CommentCard {...comments[currentPage]} />
          </Motion.div>
        </AnimatePresence>
      </div>

      <SliderControls
        currentPage={currentPage}
        totalPages={comments.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onDotClick={(i) => setCurrentPage(i)}
        theme={theme}
      />
    </div>
  );
};

export default CommentSlider;
