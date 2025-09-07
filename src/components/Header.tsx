"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import hamburgerIcon from "@/assets/images/icons/hamburger.svg";
import closeIcon from "@/assets/images/icons/close.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationLinks } from "./NavigationLinks";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-VeryLightGray relative flex items-center justify-between px-[32px] pt-[32px] md:px-[39px] md:pt-[64px] lg:px-[165px]">
      <Image src={logo} alt="Company logo" />

      <NavigationLinks className="[&>a:hover]:text-SlightlyDesaturatedCyan text-GrayishDarkBlue hidden items-center gap-[43px] text-[12px] tracking-[2px] uppercase md:flex" />

      <button onClick={toggleMenu} className="z-50 cursor-pointer md:hidden">
        {isMenuOpen ? (
          <Image src={closeIcon} alt="Close Menu" />
        ) : (
          <Image src={hamburgerIcon} alt="Open menu" />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "150%" }}
            transition={{
              type: "tween",
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-GrayishDarkBlue absolute top-[88px] right-[32px] z-50 h-[186px] w-[223px]"
          >
            <NavigationLinks
              onClick={() => setIsMenuOpen(false)}
              className="[&>a:hover]:text-SlightlyDesaturatedCyan flex h-full w-full flex-col items-center justify-center gap-[32px] text-center text-[12px] tracking-[2px] text-white uppercase"
              disableActiveState={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
