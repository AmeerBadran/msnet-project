import React from "react";
import SectionTitle from "../../ui/SectionTitle";
import image from "../../../assets/said.png";
import CommentSlider from "../../features/CommentSlider";
import testimonials from "../../../constants/testimonials";

const SaidAboutUs = () => {
  return (
    <section className="mt-10">
      <SectionTitle title="قالوا عنا" />

      <div className="bg-gradient-to-l from-[#333841] to-[#14181D] w-full py-8 md:py-12">
        <div className="max-w-[1270px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 px-4">
          
          {/* الصورة */}
          <div className="flex-shrink-0">
            <img
              src={image}
              alt="قالوا عنا"
              className="max-w-[300px] md:max-w-[400px] lg:max-w-[420px] w-full object-contain mx-auto"
            />
          </div>

          {/* البطاقة الصغيرة */}
          <div className="relative border-4 border-white px-4 py-2 rounded-md bg-transparent mt-6 lg:mt-20 lg:self-start">
            <span className="text-white text-2xl md:text-3xl lg:text-[40px] font-semibold">
              قالوا عنا
            </span>
            <span
              className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[10px] md:border-t-[12px] lg:border-t-[14px] border-t-transparent 
                border-b-[10px] md:border-b-[12px] lg:border-b-[14px] border-b-transparent 
                border-r-[14px] md:border-r-[16px] lg:border-r-[17px] border-r-white"
            ></span>
          </div>

          {/* السلايدر */}
          <div className="flex-1 w-full">
            <CommentSlider comments={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaidAboutUs;
