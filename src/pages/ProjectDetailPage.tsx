import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "./project-detail/ProjectDetailContent";
import { ProjectNavigation } from "./project-detail/ProjectNavigation";

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project || !slug) return <div>Project not found!</div>;

  return (
    <section className="mb-[64px] flex flex-col gap-[64px] px-[32px] md:mb-[80px] md:gap-[80px] md:px-[39px] lg:mb-[115px] lg:gap-[64px] lg:px-[165px]">
      <ProjectDetailContent project={project} />
      <ProjectNavigation currentSlug={slug} />
    </section>
  );
};
