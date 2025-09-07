"use client";

import heroImageMobile from "@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import heroImageTablet from "@/assets/images/homepage/tablet/image-homepage-hero@2x.jpg";
import heroImageDesktop from "@/assets/images/homepage/desktop/image-homepage-hero@2x.jpg";
import { DownArrowsIcon } from "@/components/icons/DownArrowsIcon";
import Image from "next/image";


export const HeroSection = () => {

  return (
    <section className="relative">
      <picture>
        <source media="(min-width: 1280px)" srcSet={heroImageDesktop.src} />
        <source media="(min-width: 768px)" srcSet={heroImageTablet.src} />

        <Image
          src={heroImageMobile}
          alt="Portfolio preview on a monitor"
          className="w-full"
          priority
        />
      </picture>
      <div className="bg-VeryLightGray bottom-0 md:absolute md:h-[278px] md:w-[514px] lg:h-[357px] lg:w-[445px]">
        <h1 className="text-GrayishDarkBlue pt-[24px] text-[40px] leading-[42px] font-bold tracking-[-0.36px] md:pt-[56px] md:pr-[56px] lg:text-[50px] lg:leading-[50px] lg:tracking-[-0.45px]">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </h1>
        <button className="bg-DarkBlue hover:bg-SlightlyDesaturatedCyan mt-[32px] flex h-[48px] w-[200px] cursor-pointer md:mt-[48px] group">
          <div className="flex h-full w-[48px] items-center justify-center bg-black/10">
            <DownArrowsIcon className="text-SlightlyDesaturatedCyan group-hover:text-white" />
          </div>
          <a
            href="#about"
            className="flex flex-1 items-center justify-center text-[12px] tracking-[2px] text-white"
          >
            About Me
          </a>
        </button>
      </div>
    </section>
  );
};
