import { ProjectCard } from "@/pages/portfolio/ProjectCard";
import { projects } from "@/data/projects";
import { ContactCTA } from "@/components/ContactCTA";

export const PortfolioPage = () => {
  return (
    <>
      <section className="flex flex-col gap-[72px] px-[32px] md:gap-[88px] md:px-[39px] lg:gap-[80px] lg:px-[165px]  pt-[40px] md:pt-[94px] ">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
      <ContactCTA className="mt-[80px] md:mt-[96px] lg:mt-[150px] mb-[80px] md:mb-[96px] lg:mb-[150px]" />
    </>
  );
};
