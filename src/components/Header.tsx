import logo from "@/assets/images/logo.svg";
import hamburgerIcon from "@/assets/images/icons/hamburger.svg";
import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact Me" },
];

export const Header = () => {
  return (
    <header className="bg-VeryLightGray flex items-center justify-between px-[32px] pt-[32px] pb-[40px] md:px-[39px] md:pt-[64px] md:pb-[47px] lg:px-[165px] lg:pb-[54px]">
      <img src={logo} alt="Company logo" />
      <img src={hamburgerIcon} alt="Menu button" className="md:hidden" />

      <nav className="text-GrayishDarkBlue hidden items-center gap-[43px] text-[12px] tracking-[2px] uppercase md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-SlightlyDesaturatedCyan ${
                isActive
                  ? "text-SlightlyDesaturatedCyan"
                  : "text-GrayishDarkBlue"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
