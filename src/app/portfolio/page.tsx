"use client";

import { ProjectCard } from "./components/ProjectCard";
import { projects } from "@/data/projects";
import { ContactCTA } from "@/components/ContactCTA";

export default function PortfolioPage() {
  return (
    <>
      <section className="flex flex-col gap-[72px] px-[32px] pt-[40px] md:gap-[88px] md:px-[39px] md:pt-[94px] lg:gap-[80px] lg:px-[165px]">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
      <ContactCTA className="mt-[80px] mb-[80px] px-[32px] md:mt-[96px] md:mb-[96px] md:px-[39px] lg:mt-[150px] lg:mb-[150px] lg:px-[165px]" />
    </>
  );
}
