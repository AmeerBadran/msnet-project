import React from "react";
import { FiMenu } from "react-icons/fi";
import cart from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, price, gift }) => {
  return (
    <div className="max-w-111 w-full bg-white rounded-lg py-[17px] px-[9px] border border-gray-300">
      {/* صورة المنتج */}
      <div className="w-full h-40 sm:h-52 md:h-65 rounded-t-lg overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {gift && (
          <div className="absolute top-1 left-1 bg-[#201615] text-white text-xs sm:text-sm md:text-base font-bold px-1 py-1 sm:py-2 rounded-lg">
            {gift}
          </div>
        )}
      </div>

      {/* معلومات المنتج */}
      <div className="bg-main rounded-[3px]">
        <div className="flex py-2 sm:py-2.5 px-3 sm:px-5 justify-between items-center text-white">
          <h2 className="text-base sm:text-lg md:text-[20px] font-medium">{title}</h2>
          <p className="bg-black-200 p-1 rounded text-sm sm:text-base md:text-[20px] font-bold border border-[#2864BB]">
            ش{price}
          </p>
        </div>

        <hr className="bg-white border border-white mx-1" />

        {/* الأزرار */}
        <div className="flex items-center justify-between w-full h-full pb-2.5 px-3 sm:px-5 gap-2">
          <Link to="/product" className="mt-3 sm:mt-4 w-full text-sm sm:text-base md:text-[20px] text-white rounded-lg font-medium flex items-center gap-1">
            <FiMenu className="h-5 w-5 sm:h-6 sm:w-6" />
            معلومات المنتج
          </Link>
          <button className="mt-3 sm:mt-4 w-full text-sm sm:text-base md:text-[20px] font-medium text-white rounded-lg flex items-center gap-1 justify-end">
            <img src={cart} alt="cart" className="h-5 w-5 sm:h-6 sm:w-6" />
            إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
