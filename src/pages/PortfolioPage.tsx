import { ProjectCard } from "@/pages/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export const PortfolioPage = () => {
  return (
    <section className="mb-[80px] flex flex-col gap-[72px] px-[32px] md:mb-[96px] md:gap-[88px] md:px-[39px] lg:mb-[150px] lg:gap-[80px] lg:px-[165px]">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
};
