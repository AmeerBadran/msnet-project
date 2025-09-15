import leftBackground from "../../../assets/leftBackground.svg";
import rightBackground from "../../../assets/rightBackground.svg";
import IconButton from "../../ui/IconButton";
import faceIcon from "../../../assets/icons/facebook.svg";
import whatsIcon from "../../../assets/icons/whatsapp.svg";
import instaIcon from "../../../assets/icons/instagram.svg";
import tooth from "../../../assets/tooth.svg";

import ImageSlider from "../../features/ImageSlider";

const MainSection = () => {
  const images = [tooth, whatsIcon, faceIcon];

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-8 overflow-hidden h-auto lg:h-[930px] py-12 lg:py-0">
      {/* خلفيات */}
      <div className="absolute top-0 left-0 h-full hidden lg:block">
        <img src={leftBackground} alt="background" className="h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 hidden lg:block">
        <img src={rightBackground} alt="background" className="object-cover" />
      </div>

      {/* النصوص */}
      <div className="z-10 col-span-2 flex flex-col max-w-3xl xl:mr-40 items-center lg:items-start text-center lg:text-right px-6">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[62px] leading-snug text-main">
          أهلا بكم في شركة DENTEX
        </h1>

        <div className="mt-6 sm:mt-10 space-y-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
            التسويق الإلكتروني: ويعرف أيضا باسم التسويق الرقمي أو التسويق عبر الشبكة،
            ويشمل جميع الأساليب والممارسات ذات الصلة بعالم التسويق عبر الإنترنت،
            وتحسين التجارة الإلكترونية.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
            التسويق الإلكتروني: ويعرف أيضا باسم التسويق الرقمي أو التسويق عبر الشبكة،
            ويشمل جميع الأساليب والممارسات ذات الصلة بعالم التسويق عبر الإنترنت،
            وتحسين التجارة الإلكترونية.
          </p>
        </div>

        {/* CTA + سوشيال */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-6">
          <button className="bg-main text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-6 py-3 lg:px-8 lg:py-[18px] rounded-xl font-almarai">
            قم بالتواصل الآن
          </button>
          <div className="flex items-center gap-4 sm:gap-6">
            <IconButton icon={whatsIcon} size="larg" />
            <IconButton icon={instaIcon} size="larg" />
            <IconButton icon={faceIcon} size="larg" />
          </div>
        </div>
      </div>

      {/* السلايدر */}
      <div className="z-10 w-full lg:justify-self-end">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default MainSection;
