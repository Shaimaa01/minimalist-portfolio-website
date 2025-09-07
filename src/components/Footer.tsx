"use client";
import Image from "next/image";
import logoWhite from "@/assets/images/whiteLogo.svg";
import { SocialLinks } from "@/components/SocialLinks";
import { NavigationLinks } from "./NavigationLinks";

export const Footer = () => {
  return (
    <footer className="bg-GrayishDarkBlue flex flex-col items-center gap-[40px] py-[56px] text-white md:flex-row md:justify-between md:px-[39px] md:py-[24px] lg:px-[165px]">
      <div className="flex flex-col gap-[40px] md:flex-row lg:gap-[48px]">
        <Image src={logoWhite} alt="Company logo" />

        <NavigationLinks
          disableActiveState={true}
          className="[&>a:hover]:text-SlightlyDesaturatedCyan flex flex-col items-center gap-[32px] text-[12px] tracking-[2px] uppercase md:flex-row lg:gap-[43px]"
        />
      </div>

      <SocialLinks colorClass="text-white" />
    </footer>
  );
};
