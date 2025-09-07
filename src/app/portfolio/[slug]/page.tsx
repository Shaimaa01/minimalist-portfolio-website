"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "./components/ProjectDetailContent";
import { ProjectNavigation } from "./components/ProjectNavigation";
import { ContactCTA } from "@/components/ContactCTA";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project || !slug) return <div>Project not found!</div>;

  return (
    <>
      <section className="flex flex-col gap-[64px] px-[32px] pt-[40px] md:gap-[80px] md:px-[39px] md:pt-[94px] lg:gap-[64px] lg:px-[165px]">
        <ProjectDetailContent project={project} />
        <ProjectNavigation currentSlug={slug} />
      </section>
      <ContactCTA className="mt-[64px] mb-[80px] px-[32px] md:mt-[80px] md:mb-[96px] md:px-[39px] lg:mt-[115px] lg:mb-[150px] lg:px-[165px]" />
    </>
  );
}
