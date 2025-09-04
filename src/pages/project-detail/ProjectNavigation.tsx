import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { type Project } from "@/types";
import arrowLeft from "@/assets/images/icons/arrow-left.svg";
import arrowRight from "@/assets/images/icons/arrow-right.svg";

type ProjectNavigationProps = {
  currentSlug: string;
};

const NavLink = ({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) => {
  const isPrev = direction === "prev";
  const label = isPrev ? "Previous Project" : "Next Project";
  const arrowIcon = isPrev ? arrowLeft : arrowRight;
  const alignment = isPrev ? "items-start" : "items-end text-right";
  const border = isPrev ? "border-r" : "";
  const row = isPrev ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      className={`border-GrayishDarkBlue/15 flex w-1/2 flex-col gap-[16px] py-[24px] md:items-center md:gap-[32px] md:py-[32px] ${alignment} ${border} ${row}`}
    >
      <img src={arrowIcon} alt={label} />
      <div>
        <h3 className="text-GrayishDarkBlue text-[32px] leading-[36px] tracking-[-0.29px]">
          {project.title}
        </h3>
        <p className="text-GrayishDarkBlue/50 text-[16px] leading-[30px]">
          {label}
        </p>
      </div>
    </Link>
  );
};

export const ProjectNavigation = ({ currentSlug }: ProjectNavigationProps) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  const prevProject =
    projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <section className="border-GrayishDarkBlue/15 flex border-y">
      <NavLink project={prevProject} direction="prev" />
      <NavLink project={nextProject} direction="next" />
    </section>
  );
};
