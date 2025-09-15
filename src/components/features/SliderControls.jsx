import { IoIosArrowBack } from "react-icons/io";


const SliderControls = ({ currentPage, totalPages, onPrev, onNext, onDotClick, theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div className="w-full flex justify-center items-center mt-5 gap-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 0}
        className={`${
          isDark ? "bg-main text-white" : "bg-white text-main"
        } w-10 h-10 rounded-full flex justify-center items-center text-2xl 
          hover:bg-gray-400 transition-all duration-200
          ${currentPage === 0 ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        <IoIosArrowBack className="rotate-180" />
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all duration-200 rounded-full cursor-pointer ${
              currentPage === index
                ? `${isDark ? "bg-mine" : "bg-white"} w-6 h-3`
                : `${isDark ? "bg-gray-300" : "bg-gray-500"} w-6 h-2`
            }`}
          ></span>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`${
          isDark ? "bg-main text-white" : "bg-white text-main"
        } w-9.5 h-9.5 rounded-full flex justify-center items-center text-2xl 
          hover:bg-gray-400 transition-all duration-200
          ${currentPage === totalPages - 1 ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default SliderControls;
