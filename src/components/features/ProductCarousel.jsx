import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const ProductCarousel = ({ products, renderCard }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    rtl: true, // مهم للغة العربية
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 4, spacing: 24 },
    breakpoints: {
      "(max-width: 1324px)": { slides: { perView: 3, spacing: 10 } },
      "(max-width: 1140px)": { slides: { perView: 2, spacing: 8 } },
      "(max-width: 640px)": { slides: { perView: 1 } },
    },
  });

  const slideCount = instanceRef.current?.track.details.slides.length || 0;

  // حساب المجموعة الحالية بحيث تتغير كل 3 مرات
  const groupSize = 3; // عدد السلايدات في كل مجموعة
  const currentGroup = Math.floor(currentSlide / groupSize);
  const totalGroups = Math.ceil(slideCount / groupSize);

  return (
    <div className="py-10 relative">
      {/* السلايدر */}
      <div ref={sliderRef} className="keen-slider px-5">
        {products.map((product, idx) => (
          <div key={product.id ?? idx} className="keen-slider__slide px-2">
            {renderCard ? renderCard(product) : <div>{JSON.stringify(product)}</div>}
          </div>
        ))}
      </div>

      {/* أزرار + مؤشرات */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* السابق */}
        <button
          aria-label="السابق"
          onClick={() => instanceRef.current?.prev()}
          className="bg-blue-900 text-white rounded-full p-3 hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>

        {/* النقاط */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-6 rounded-full transition-all ${
                currentGroup === idx ? "bg-blue-900" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* التالي */}
        <button
          aria-label="التالي"
          onClick={() => instanceRef.current?.next()}
          className="bg-blue-900 text-white rounded-full p-3 hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
