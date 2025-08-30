type ProjectCardProps = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
};

export const ProjectCard = ({
  images,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-[32px] md:flex-[69px] lg:gap-[125px] md:flex-row md:items-center md:even:flex-row-reverse">
      <picture>
        <source media="(min-width: 1024px)" srcSet={images.desktop} />
        <source media="(min-width: 768px)" srcSet={images.tablet} />
        <img
          src={images.mobile}
          alt={`${title} project screenshot`}
          className="w-full md:min-w-[339px] xl:w-[540px]"
        />
      </picture>

      <div className="border-GrayishDarkBlue/15 flex flex-col gap-[24px] md:gap-[32px] xl:gap-[24px] border-y py-[24px] md:pt-[32px] md:pb-[50px] xl:py-[103px]">
        <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          {title}
        </h2>
        <p className="text-GrayishDarkBlue/80 text-[15px]  xl:text-[16px] leading-[30px] xl:max-w-[350px]">
          {description}
        </p>
        <button className="border-GrayishDarkBlue text-GrayishDarkBlue flex h-[48px] w-[175px] items-center justify-center border text-[12px] tracking-[2px] uppercase">
          View Project
        </button>
      </div>
    </div>
  );
};
