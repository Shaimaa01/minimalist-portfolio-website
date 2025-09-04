import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "./project-detail/ProjectDetailContent";
import { ProjectNavigation } from "./project-detail/ProjectNavigation";
import { ContactCTA } from "@/components/ContactCTA";

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project || !slug) return <div>Project not found!</div>;

  return (
    <>
      <section className="flex flex-col gap-[64px] px-[32px] md:gap-[80px] md:px-[39px] lg:gap-[64px] lg:px-[165px]">
        <ProjectDetailContent project={project} />
        <ProjectNavigation currentSlug={slug} />
      </section>
      <ContactCTA className="mt-[64px] md:mt-[80px] lg:mt-[115px]" />
    </>
  );
};
