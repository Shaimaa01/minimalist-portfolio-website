import heroImageMobile from "@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import heroImageTablet from "@/assets/images/homepage/tablet/image-homepage-hero@2x.jpg";
import downArrows from "@/assets/images/icons/down-arrows.svg";

export const HeroSection = () => {
  return (
    <section className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={heroImageTablet} />

        <img
          src={heroImageMobile}
          alt="Portfolio preview on a monitor"
          className="w-full object-contain"
        />
      </picture>
      <div className="md:absolute bottom-0 bg-VeryLightGray md:w-[514px] md:h-[278px] ">
        <h1 className="text-GrayishDarkBlue pt-[24px] md:pt-[56px] md:pr-[56px] text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </h1>
        <button className="bg-DarkBlue mt-[32px] md:mt-[48px] flex h-[48px] w-[200px] cursor-pointer">
          <div className="flex h-full w-[48px] items-center justify-center bg-[#0000001a]">
            <img src={downArrows} alt="down arrow icon" />
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
