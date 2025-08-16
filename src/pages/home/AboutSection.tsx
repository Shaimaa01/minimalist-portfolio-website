import aboutImage from "@/assets/images/homepage/mobile/image-homepage-profile@2x.jpg";

export const AboutSection = () => {
  return (
    <section className="mt-[96px]">
      <img
        src={aboutImage}
        alt="Portrait of Alex Spencer"
        className="w-full object-cover"
      />

      <div className="border-GrayishDarkBlue/15 mt-[32px] border-y pt-[32px] pb-[51px]">
        <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          About Me
        </h2>
        <p className="text-GrayishDarkBlue/80 mt-[28px] text-[16px] leading-[30px]">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <button className="border-GrayishDarkBlue text-GrayishDarkBlue mt-[24px] flex h-[48px] w-[202px] items-center justify-center border text-[12px] tracking-[2px] uppercase">
          Go to Portfolio
        </button>
      </div>
    </section>
  );
};
