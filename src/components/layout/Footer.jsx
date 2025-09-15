import React from "react";
import { Link } from "react-router-dom";
import footerBackground from "../../assets/FooterBackground.svg";
import logo from "../../assets/logo.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

const Footer = () => {
  return (
    <footer className="relative w-full flex">
      {/* الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={footerBackground}
          alt="footer background"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 grid gap-12 
                      md:grid-cols-2 lg:grid-cols-4 mt-40"
      >
        {/* اللوجو + الوصف */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <Link
            to="/"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              alt="footer logo"
              className="w-[220px] sm:w-[300px] lg:w-[400px] h-auto"
            />
          </Link>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-4 leading-relaxed">
            استيراد وتسويق منتجات طب الأسنان لطب الأسنان
          </p>
        </div>

        {/* روابط القائمة */}
        <ul className="text-white flex flex-col items-center lg:items-start gap-4 text-lg sm:text-xl lg:text-2xl font-medium">
          <li>
            <Link
              to="/store"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              متجر
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              حسابي
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              عربة
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              اتصل
            </Link>
          </li>
          <li>
            <Link
              to="/policies"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              لوائح المتجر
            </Link>
          </li>
          <li>
            <Link
              to="/accessibility"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              بيانات امكانية الوصول
            </Link>
          </li>
        </ul>

        {/* وقت النشاط */}
        <div className="text-white text-lg sm:text-xl lg:text-2xl font-medium text-center lg:text-start">
          <p className="mb-6 font-semibold">وقت النشاط</p>
          <ul className="list-disc flex flex-col gap-4 pl-6">
            <li>الأحد - الخميس: 08:00 - 16:00</li>
            <li>18 هاكار ، ص.ب .13131</li>
            <li>نتانيا 4237724</li>
            <li>الفاكس: 09-8358867</li>
          </ul>
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="flex md:flex-col justify-center lg:justify-end gap-8">
          <a
            href="https://wa.me/972598888888"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src={whatsapp}
              alt="whatsapp"
              className="w-12 sm:w-16 lg:w-20"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src={instagram}
              alt="instagram"
              className="w-12 sm:w-16 lg:w-20"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src={facebook}
              alt="facebook"
              className="w-12 sm:w-16 lg:w-20"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
