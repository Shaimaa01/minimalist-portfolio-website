import type { Project } from "@/types";
type ProjectCardProps = {
  project: Project;
};

export const ProjectBackground = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-[28px]">
      <h3 className="text-GrayishDarkBlue text-[32px] leading-[42px] tracking-[-0.29px]">
        Project Background
      </h3>
      <p className="text-GrayishDarkBlue/80 text-[15px] leading-[30px] xl:text-[16px]">
        {project.background}
      </p>
    </div>
  );
};
