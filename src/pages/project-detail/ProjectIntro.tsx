import type { Project } from "@/types";
type ProjectCardProps = {
  project: Project;
};

export const ProjectIntro = ({ project }: ProjectCardProps) => {
  return (
    <section className="flex flex-col gap-[40px]">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={project.heroImages.desktop}
        />
        <source media="(min-width: 768px)" srcSet={project.heroImages.tablet} />
        <img
          src={project.heroImages.mobile}
          alt={`${project.title} hero image`}
          className="w-full"
        />
      </picture>

      <div className="border-GrayishDarkBlue/15 flex flex-col gap-[24px] border-y py-[24px] md:gap-[32px] md:pt-[32px] md:pb-[50px] xl:gap-[24px] xl:py-[103px]">
        <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          {project.title}
        </h2>
        <p className="text-GrayishDarkBlue/80 text-[15px] leading-[30px] xl:max-w-[350px] xl:text-[16px]">
          {project.description}
        </p>
        <p className="text-SlightlyDesaturatedCyan flex flex-col text-[13px] leading-[30px] font-bold">
          <span>{project.tags.join(" / ")}</span>
          <span>{project.stack.join(" / ")}</span>
        </p>

        <button className="border-GrayishDarkBlue text-GrayishDarkBlue flex h-[48px] w-[178px] items-center justify-center border text-[12px] tracking-[2px] uppercase">
          Visit Website
        </button>
      </div>
    </section>
  );
};
