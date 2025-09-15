import cart from "../../../assets/icons/cart.svg";
import product from "../../../assets/FullProduct.png";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

export default function ProductSection() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => count > 0 && setCount(count - 1);

  return (
    <section className="w-full bg-white flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-[50px] py-8 sm:py-12 md:py-16 lg:py-[70px]">
      {/* النصوص */}
      <div className="h-full flex w-full md:w-1/2 items-center my-auto">
        <div className="flex flex-col gap-4 text-right justify-center">
          <h2 className="text-main font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            منديـل المـؤزر <span className="uppercase">EURONDA</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
            النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي
            يولدها التطبيق. المساحة، لقد تم توليد هذا النص من مولد النص العربي،
            حيث يمكنك أن تولد مثل هذا النص.
          </p>

          <p className="text-[#FF543E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            95.00 شيكل
          </p>

          <p className="text-main text-lg sm:text-xl md:text-2xl lg:text-[32px]">
            يمكن شراء هذا المنتج من قبل أطباء الأسنان فقط
          </p>

          {/* العداد + زر السلة */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-8 h-auto">
            {/* العداد */}
            <div className="flex items-center border  border-gray-300 rounded-md overflow-hidden w-fit sm:w-auto">
              <button
                onClick={decrease}
                className="flex items-center justify-center w-12 sm:w-16 md:w-[70px] lg:w-[90px] h-12 sm:h-14 md:h-[80px] lg:h-[90px] bg-main hover:bg-main-100 text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-all"
              >
                <FaMinus />
              </button>
              <span className="flex items-center justify-center px-4 sm:px-6 w-12 sm:w-16 md:w-20 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-medium">
                {count}
              </span>
              <button
                onClick={increase}
                className="flex items-center justify-center w-12 sm:w-16 md:w-[70px] lg:w-[90px] h-12 sm:h-14 md:h-[80px] lg:h-[90px] bg-main hover:bg-main-100 text-white text-2xl sm:text-3xl md:text-5xl font-bold transition-all"
              >
                <MdAdd />
              </button>
            </div>

            {/* زر السلة */}
            <button className="flex items-center justify-center gap-2 bg-main hover:bg-main-100 text-white h-12 sm:h-14 md:h-[80px] lg:h-[90px] px-6 sm:px-8 md:px-10 rounded-md transition-all">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium">
                إضافة إلى السلة
              </span>
              <img src={cart} alt="cart" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>
          </div>
        </div>
      </div>

      {/* صورة المنتج */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={product}
          alt="مناديل EURONDA"
          className="rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-full h-auto"
        />
      </div>
    </section>
  );
}
