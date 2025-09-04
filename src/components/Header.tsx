import logo from "@/assets/images/logo.svg";
import hamburgerIcon from "@/assets/images/icons/hamburger.svg";
import { NavLink } from "react-router-dom";
import closeIcon from "@/assets/images/icons/close.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact Me" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-VeryLightGray relative  flex items-center justify-between px-[32px] pt-[32px] md:px-[39px] md:pt-[64px] lg:px-[165px]">
      <img src={logo} alt="Company logo" />

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

      <button onClick={toggleMenu} className="z-50 md:hidden cursor-pointer">
        {isMenuOpen ? (
          <img src={closeIcon} alt="Close Menu" />
        ) : (
          <img src={hamburgerIcon} alt="Open menu" />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "150%" }}
            transition={{
              type: "tween",
              duration: 0.8,

              ease: "easeInOut",
            }}
            className="bg-GrayishDarkBlue absolute top-[88px] right-[32px] z-50 flex h-[186px] w-[223px] flex-col items-center justify-center gap-[32px] text-center text-[12px] tracking-[2px] text-white uppercase"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-SlightlyDesaturatedCyan"
              >
                {link.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
