import heroImage from "@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg";
import downArrows from "@/assets/images/icons/down-arrows.svg";

export const HeroSection = () => {
  return (
    <section>
      <img
        src={heroImage}
        alt="Portfolio preview on a monitor"
        className="w-full object-contain"
      />
      <h1 className=" text-GrayishDarkBlue pt-[24px] text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
        Hey, I’m Alex Spencer and I love building beautiful websites
      </h1>
      <button className="bg-DarkBlue mt-[32px] flex h-[48px] w-[200px] cursor-pointer">
        <div className="flex h-full w-[48px] items-center justify-center bg-[#0000001a]">
          <img src={downArrows} alt="down arrow icon" />
        </div>
        <a
          href="#about"
          className=" flex flex-1 items-center justify-center text-[12px] tracking-[2px] text-white"
        >
          About Me
        </a>
      </button>
    </section>
  );
};
