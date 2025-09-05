import { type Project } from "@/types";

export const ProjectSummary = ({ project }: { project: Project }) => {
  return (
    <div className="border-GrayishDarkBlue/15 flex flex-col gap-[24px] border-y py-[24px] md:flex-row-reverse md:justify-between md:gap-[32px] md:py-[32px] md:pt-[32px] md:pb-[50px] xl:min-w-[351px] xl:flex-col xl:gap-[24px] xl:py-[48px]">
      <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px] md:hidden xl:block">
        {project.title}
      </h2>
      <p className="text-GrayishDarkBlue/80 text-[15px] leading-[30px] md:max-w-[339px] xl:text-[16px]">
        {project.description}
      </p>
      <div className="flex flex-col gap-[40px] md:gap-[16px] xl:gap-[32px]">
        <h2 className="text-GrayishDarkBlue hidden text-[40px] leading-[42px] font-bold tracking-[-0.36px] md:block xl:hidden">
          {project.title}
        </h2>
        <p className="text-SlightlyDesaturatedCyan flex flex-col text-[13px] leading-[30px] font-bold xl:gap-[16px]">
          <span>{project.tags.join(" / ")}</span>
          <span>{project.stack.join(" / ")}</span>
        </p>

        <button className="hover:bg-GrayishDarkBlue hover:text-LightGray cursor-pointer border-GrayishDarkBlue text-GrayishDarkBlue flex h-[48px] w-[178px] items-center justify-center border text-[12px] tracking-[2px] uppercase">
          Visit Website
        </button>
      </div>
    </div>
  );
};
