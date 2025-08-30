import { ProjectCard } from "./ProjectCard";
import manageImg from "@/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import bookmarkImg from "@/assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import insureImg from "@/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import fyloImg from "@/assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg";

const projects = [
  {
    imageUrl: manageImg,
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  },
  {
    imageUrl: bookmarkImg,
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  },
  {
    imageUrl: insureImg,
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  },
  {
    imageUrl: fyloImg,
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  },
];

export const ProjectList = () => {
  return (
    <section className="flex flex-col gap-[72px] px-[32px] md:px-[39px] lg:px-[165px]">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
};
