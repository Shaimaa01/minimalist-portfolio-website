import { Link } from "react-router-dom";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-[32px] md:flex-[69px] md:flex-row md:items-center md:even:flex-row-reverse lg:gap-[125px]">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={project.portfolioImages.desktop}
        />
        <source
          media="(min-width: 768px)"
          srcSet={project.portfolioImages.tablet}
        />
        <img
          src={project.portfolioImages.mobile}
          alt={`${project.title} project screenshot`}
          className="w-full md:min-w-[339px] xl:w-[540px]"
        />
      </picture>

      <div className="border-GrayishDarkBlue/15 flex flex-col gap-[24px] border-y py-[24px] md:gap-[32px] md:pt-[32px] md:pb-[50px] xl:gap-[24px] xl:py-[103px]">
        <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          {project.title}
        </h2>
        <p className="text-GrayishDarkBlue/80 text-[15px] leading-[30px] xl:max-w-[350px] xl:text-[16px]">
          {project.description}
        </p>
        <Link
          to={`/portfolio/${project.slug}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant",
            });
          }}
          className="hover:bg-GrayishDarkBlue hover:text-LightGray border-GrayishDarkBlue text-GrayishDarkBlue flex h-[48px] w-[175px] items-center justify-center border text-[12px] tracking-[2px] uppercase"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};
