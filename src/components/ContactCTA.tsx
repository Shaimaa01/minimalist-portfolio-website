export const ContactCTA = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[40px] md:gap-[32px] px-[32px] text-center md:flex-row md:px-[39px] md:text-left lg:justify-between lg:px-[165px]">
      <h3 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px] md:max-w-[350px]">
        Interested in doing a project together?
      </h3>
<div className="bg-GrayishDarkBlue/15 grow h-[1px] hidden md:block"></div>
      <button className="border-GrayishDarkBlue text-GrayishDarkBlue flex h-[48px] w-[162px] cursor-pointer items-center justify-center border text-[12px] tracking-[2px] uppercase">
        Contact Me
      </button>
    </section>
  );
};
