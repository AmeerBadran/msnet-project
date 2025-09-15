import React from "react";
import SectionTitle from "../../ui/SectionTitle";
import image from "../../../assets/whyus.png";

const WhyUs = () => {
  return (
    <section className="mt-10">
      <SectionTitle title="لماذا نحن" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* الصورة */}
        <div className="h-64 md:h-96 lg:h-full">
          <img
            src={image}
            alt="Why Us"
            className="object-cover w-full h-full"
          />
        </div>

        {/* النص */}
        <div className="bg-gradient-to-bl from-main-200 to-main-300 py-8 md:py-12 px-6 md:px-10 flex flex-col justify-center">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
            نحن نجهز العيادة لك في لحظة
            <br />
            تتمتع ميغا دنت بخبرة كبيرة في تقديم المشورة والدعم المهني في فتح
            عيادة أو توسيع عيادة موجودة.
            <br />
            بعد اجتماع للتعرف عليك وفهم احتياجاتك، يقوم فريق المبيعات الماهر
            لدينا (المساعدون وأطباء الأسنان المحترفون) بإعداد عرض أسعار لك يضمن
            جميع المعدات / الملحقات / المواد اللازمة لإعداد العيادة وبدء تشغيلها.
            <br />
            عرض السعر خاص ولمرة واحدة لافتتاح العيادة.
            <br />
            سيرافقك وكيل دائم طوال العملية وبالطبع سيبقى بجانبك أثناء العمل
            اليومي والتأكد من تقديم أفضل خدمة لك بشكل احترافي وخبرة كبيرة.
          </p>

          <button className="py-3 px-6 mt-6 text-lg md:text-2xl font-medium bg-white rounded-xl hover:bg-gray-300 transition-all duration-200 w-fit">
            اضغط هنا للمزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
