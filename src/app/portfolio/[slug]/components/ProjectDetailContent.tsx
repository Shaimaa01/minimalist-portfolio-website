import { ProjectBackground } from "./ProjectBackground";
import { ProjectSummary } from "./ProjectSummary";
import { StaticPreviews } from "./StaticPreviews";
import type { Project } from "@/types";

export const ProjectDetailContent = ({ project }: { project: Project }) => {
  return (
    <section className="flex flex-col gap-[40px] xl:gap-[115px]">
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

      <div className="flex flex-col gap-[40px] xl:flex-row xl:items-start xl:justify-between xl:gap-[125px]">
        <ProjectSummary project={project} />

        <div className="flex flex-col gap-[40px]">
          <ProjectBackground project={project} />
          <StaticPreviews project={project} />
        </div>
      </div>
    </section>
  );
};
