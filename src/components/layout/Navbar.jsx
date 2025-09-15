import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { navLinks } from "../../constants/navLinks";
import NavItem from "../ui/NavItem";
import IconButton from "../ui/IconButton";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full h-20 bg-main flex items-center justify-between text-white px-6 md:px-12 relative">
      <Link to="/" className="w-40 md:w-52 overflow-hidden">
        <img src={logo} alt="logo" className="w-full h-auto" />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex divide-x divide-white">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <IconButton icon={cart} />
        <IconButton icon={search} />

        <button className="hidden md:block text-white bg-black font-light text-base px-3 py-2 h-[42px] w-[120px] rounded-lg font-almarai">
          تسجيل الدخول
        </button>

        <button className="hidden md:flex items-center gap-2 text-main bg-white text-base px-3 py-2 rounded-lg font-almarai">
          العربية <SlArrowDown />
        </button>
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setOpenMenu(true)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-main text-white z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white">
          <img src={logo} alt="logo" className="w-28" />
          <button
            onClick={() => setOpenMenu(false)}
            className="text-white text-2xl"
          >
            <HiX />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-6">
          <ul className="flex flex-col gap-4 px-6">
            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                to={link.to}
                label={link.label}
                onClick={() => setOpenMenu(false)}
              />
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex flex-col gap-3 px-6 mt-6">
          <button className="text-white bg-black font-light text-base px-3 py-2 rounded-lg font-almarai">
            تسجيل الدخول
          </button>
          <button className="flex items-center justify-center gap-2 text-main bg-white text-base px-3 py-2 rounded-lg font-almarai">
            العربية <SlArrowDown />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
