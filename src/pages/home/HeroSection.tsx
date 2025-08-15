import heroImage from '@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg';
import downArrows from '@/assets/images/icons/down-arrows.svg'

export const HeroSection = () => {
  return (
    <section>
      <img src={heroImage} alt="Portfolio preview on a monitor" className='w-full object-contain' />
        <h1 className=" pt-[24px] font-IbarraRealNova font-bold text-[40px] leading-[42px] tracking-[-0.36px] text-GrayishDarkBlue">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </h1>
        <button className='mt-[32px] h-[48px] w-[200px] flex bg-DarkBlue cursor-pointer'>
          <div className="w-[48px] h-full bg-[#0000001a] flex justify-center items-center">
            <img src={downArrows} alt="down arrow icon"/>
          </div>
           <a
          href="#about"
          className="font-PublicSans text-[12px] tracking-[2px] text-white flex justify-center items-center flex-1"
        >



About Me
        </a>
        </button>
    </section>
  );
};