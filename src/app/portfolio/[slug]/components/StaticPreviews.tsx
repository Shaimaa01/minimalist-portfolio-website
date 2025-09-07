import type { Project } from "@/types";
type ProjectCardProps = {
  project: Project;
};

export const StaticPreviews = ({ project }: ProjectCardProps) => {
  return (
    <section className="flex flex-col gap-[40px] xl:gap-[28px]">
      <h3 className="text-GrayishDarkBlue text-[32px] leading-[42px] tracking-[-0.29px]">
        Static Previews
      </h3>
      <div className="flex flex-col gap-[32px]">
        {project.staticPreviews.map((preview, index) => (
          <picture key={index}>
            <source media="(min-width: 1024px)" srcSet={preview.desktop} />
            <source media="(min-width: 768px)" srcSet={preview.tablet} />
            <img
              src={preview.mobile}
              alt={`Static preview ${index + 1} for ${project.title}`}
              className="w-full"
            />
          </picture>
        ))}
      </div>
    </section>
  );
};
