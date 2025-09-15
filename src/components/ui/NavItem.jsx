import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <li className="h-12 flex items-center">
      <NavLink
        to={to}
        className="px-6 py-2 font-medium text-2xl leading-8 transition-colors duration-200 hover:text-gray-300"
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
