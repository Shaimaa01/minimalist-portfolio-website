import { ProjectCard } from "./ProjectCard";
import manageImgMobile from "@/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import manageImgTablet from "@/assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import manageImgDesktop from "@/assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg";

import bookmarkImgMobile from "@/assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import bookmarkImgTablet from "@/assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import bookmarkImgDesktop from "@/assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

import insureImgMobile from "@/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import insureImgTablet from "@/assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import insureImgDesktop from "@/assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg";

import fyloImgMobile from "@/assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import fyloImgTablet from "@/assets/images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import fyloImgDesktop from "@/assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";

const projects = [
  {
    images: {
      mobile: manageImgMobile,
      tablet: manageImgTablet,
      desktop: manageImgDesktop,
    },
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  },
  {
    images: {
      mobile: bookmarkImgMobile,
      tablet: bookmarkImgTablet,
      desktop: bookmarkImgDesktop,
    },
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  },
  {
    images: {
      mobile: insureImgMobile,
      tablet: insureImgTablet,
      desktop: insureImgDesktop,
    },
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  },
  {
    images: {
      mobile: fyloImgMobile,
      tablet: fyloImgTablet,
      desktop: fyloImgDesktop,
    },
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  },
];

export const ProjectList = () => {
  return (
    <section className="flex flex-col gap-[72px] md:gap-[88px] lg:gap-[80px] px-[32px] md:px-[39px] lg:px-[165px]">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          images={project.images}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
};
