type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const ProjectCard = ({
  imageUrl,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-[32px]">
      <img
        src={imageUrl}
        alt={`${title} project screenshot`}
        className="w-full"
      />
      <div className="border-GrayishDarkBlue/15 flex flex-col gap-[24px] border-y py-[24px]">
        <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          {title}
        </h2>
        <p className="text-GrayishDarkBlue/80 text-[15px] leading-[30px]">
          {description}
        </p>
        <button className="border-GrayishDarkBlue text-GrayishDarkBlue  flex h-[48px] w-[175px] items-center justify-center border text-[12px] tracking-[2px] uppercase">
          View Project
        </button>
      </div>
    </div>
  );
};
