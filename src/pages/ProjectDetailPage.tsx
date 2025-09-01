import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectIntro } from "./project-detail/ProjectIntro";
import { ProjectBackground } from "./project-detail/ProjectBackground";
import { StaticPreviews } from "./project-detail/StaticPreviews";
import { ProjectNavigation } from "./project-detail/ProjectNavigation";

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !slug) return <div>Project not found!</div>;

  return (
    <section className="mb-[64px] flex flex-col gap-[64px] px-[32px] md:px-[39px] lg:px-[165px]">
      <div className="flex flex-col gap-[40px]">
        <ProjectIntro project={project} />
        <ProjectBackground project={project} />
        <StaticPreviews project={project} />
      </div>
      <ProjectNavigation currentSlug={slug} />
    </section>
  );
};
