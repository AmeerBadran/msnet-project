import React from "react";
import background from "../../../assets/background1.png";

const SomeInfo = () => {
  return (
    <section className="mt-10 grid grid-cols-1 lg:grid-cols-2">
      {/* القسم النصي */}
      <div className="bg-gradient-to-bl from-[#1474FF] to-[#0749A9] text-white p-6 md:p-10 lg:p-14 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 leading-snug">
          نحن نجهز العيادة لك في لحظة
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
          بعد اجتماع للتعرف عليك وفهم احتياجاتك، يقوم فريق المبيعات الماهر
          لدينا (المساعدون وأطباء الأسنان المحترفون) بإعداد عرض أسعار لك يضمن
          جميع المعدات / الملحقات / المواد اللازمة لإعداد العيادة وبدء تشغيلها.
          <br />
          عرض السعر خاص ولمرة واحدة لافتتاح العيادة.
          <br />
          سيرافقك وكيل دائم طوال العملية وبالطبع سيبقى بجانبك أثناء العمل اليومي
          والتأكد من تقديم أفضل خدمة لك بشكل احترافي وخبرة كبيرة.
        </p>
        <button className="py-3 px-6 mt-6 text-lg md:text-2xl font-medium text-black bg-white rounded-xl hover:bg-gray-300 transition-all duration-200 self-start">
          اضغط هنا للمزيد
        </button>
      </div>

      {/* القسم الخلفي مع الفورم */}
      <div className="relative flex items-center justify-center min-h-[500px]">
        <img
          src={background}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>

        <div className="z-10 text-center max-w-3xl w-full px-4 md:px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6 md:mb-8">
            اشترك في النشرة الإخبارية لدينا وابقى على اطلاع دائم!
          </h1>

          {/* الحقول */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <input
              type="text"
              placeholder="الاسم كامل"
              className="px-4 py-3 rounded-lg text-black bg-white w-full md:w-1/2 focus:outline-none placeholder:text-[#515151] placeholder:font-bold placeholder:text-lg md:placeholder:text-xl"
            />
            <input
              type="email"
              placeholder="البريد الالكتروني"
              className="px-4 py-3 rounded-lg text-black bg-white w-full md:w-1/2 focus:outline-none placeholder:text-[#515151] placeholder:font-bold placeholder:text-lg md:placeholder:text-xl"
            />
          </div>

          {/* الزر */}
          <button className="bg-blue-600 hover:bg-blue-700 text-lg md:text-2xl text-white font-semibold px-6 md:px-12 py-3 md:py-4 rounded-xl w-full md:w-auto">
            اضغط للتسجيل
          </button>

          {/* الموافقة */}
          <div className="flex items-start justify-center gap-2 text-white text-sm md:text-base font-bold mt-6 px-2">
            <input type="checkbox" className="mt-1" />
            <p>
              أرغب في تلقي معلومات وإعلانات حول الخصومات الخاصة والمنتجات
              الجديدة وأوافق على شروط الاستخدام
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomeInfo;
