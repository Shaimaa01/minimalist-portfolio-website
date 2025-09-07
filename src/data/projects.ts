// --- MANAGE IMAGES ---
import managePortfolioMobile from "@/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import managePortfolioTablet from "@/assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import managePortfolioDesktop from "@/assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg";

import manageHeroMobile from "@/assets/images/detail/mobile/image-manage-hero@2x.jpg";
import manageHeroTablet from "@/assets/images/detail/tablet/image-manage-hero@2x.jpg";
import manageHeroDesktop from "@/assets/images/detail/desktop/image-manage-hero@2x.jpg";

import manageStatic1Mobile from "@/assets/images/detail/mobile/image-manage-preview-1@2x.jpg";
import manageStatic1Tablet from "@/assets/images/detail/tablet/image-manage-preview-1@2x.jpg";
import manageStatic1Desktop from "@/assets/images/detail/desktop/image-manage-preview-1@2x.jpg";

import manageStatic2Mobile from "@/assets/images/detail/mobile/image-manage-preview-2@2x.jpg";
import manageStatic2Tablet from "@/assets/images/detail/tablet/image-manage-preview-2@2x.jpg";
import manageStatic2Desktop from "@/assets/images/detail/desktop/image-manage-preview-2@2x.jpg";

// --- BOOKMARK IMAGES ---
import bookmarkPortfolioMobile from "@/assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import bookmarkPortfolioTablet from "@/assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import bookmarkPortfolioDesktop from "@/assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

import bookmarkHeroMobile from "@/assets/images/detail/mobile/image-bookmark-hero@2x.jpg";
import bookmarkHeroTablet from "@/assets/images/detail/tablet/image-bookmark-hero@2x.jpg";
import bookmarkHeroDesktop from "@/assets/images/detail/desktop/image-bookmark-hero@2x.jpg";

import bookmarkStatic1Mobile from "@/assets/images/detail/mobile/image-bookmark-preview-1@2x.jpg";
import bookmarkStatic1Tablet from "@/assets/images/detail/tablet/image-bookmark-preview-1@2x.jpg";
import bookmarkStatic1Desktop from "@/assets/images/detail/desktop/image-bookmark-preview-1@2x.jpg";

import bookmarkStatic2Mobile from "@/assets/images/detail/mobile/image-bookmark-preview-2@2x.jpg";
import bookmarkStatic2Tablet from "@/assets/images/detail/tablet/image-bookmark-preview-2@2x.jpg";
import bookmarkStatic2Desktop from "@/assets/images/detail/desktop/image-bookmark-preview-2@2x.jpg";

// --- INSURE IMAGES ---
import insurePortfolioMobile from "@/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import insurePortfolioTablet from "@/assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import insurePortfolioDesktop from "@/assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg";

import insureHeroMobile from "@/assets/images/detail/mobile/image-insure-hero@2x.jpg";
import insureHeroTablet from "@/assets/images/detail/tablet/image-insure-hero@2x.jpg";
import insureHeroDesktop from "@/assets/images/detail/desktop/image-insure-hero@2x.jpg";

import insureStatic1Mobile from "@/assets/images/detail/mobile/image-insure-preview-1@2x.jpg";
import insureStatic1Tablet from "@/assets/images/detail/tablet/image-insure-preview-1@2x.jpg";
import insureStatic1Desktop from "@/assets/images/detail/desktop/image-insure-preview-1@2x.jpg";

import insureStatic2Mobile from "@/assets/images/detail/mobile/image-insure-preview-2@2x.jpg";
import insureStatic2Tablet from "@/assets/images/detail/tablet/image-insure-preview-2@2x.jpg";
import insureStatic2Desktop from "@/assets/images/detail/desktop/image-insure-preview-2@2x.jpg";

// --- FYLO IMAGES ---
import fyloPortfolioMobile from "@/assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import fyloPortfolioTablet from "@/assets/images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import fyloPortfolioDesktop from "@/assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";

import fyloHeroMobile from "@/assets/images/detail/mobile/image-fylo-hero@2x.jpg";
import fyloHeroTablet from "@/assets/images/detail/tablet/image-fylo-hero@2x.jpg";
import fyloHeroDesktop from "@/assets/images/detail/desktop/image-fylo-hero@2x.jpg";

import fyloStatic1Mobile from "@/assets/images/detail/mobile/image-fylo-preview-1@2x.jpg";
import fyloStatic1Tablet from "@/assets/images/detail/tablet/image-fylo-preview-1@2x.jpg";
import fyloStatic1Desktop from "@/assets/images/detail/desktop/image-fylo-preview-1@2x.jpg";

import fyloStatic2Mobile from "@/assets/images/detail/mobile/image-fylo-preview-2@2x.jpg";
import fyloStatic2Tablet from "@/assets/images/detail/tablet/image-fylo-preview-2@2x.jpg";
import fyloStatic2Desktop from "@/assets/images/detail/desktop/image-fylo-preview-2@2x.jpg";

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "manage",
    title: "Manage",
    portfolioImages: {
      mobile: managePortfolioMobile.src,
      tablet: managePortfolioTablet.src,
      desktop: managePortfolioDesktop.src,
    },
    heroImages: {
      mobile: manageHeroMobile.src,
      tablet: manageHeroTablet.src,
      desktop: manageHeroDesktop.src,
    },
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    tags: ["Interaction Design", "Front End Development"],
    stack: ["HTML", "CSS", "JS"],
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    staticPreviews: [
      {
        mobile: manageStatic1Mobile.src,
        tablet: manageStatic1Tablet.src,
        desktop: manageStatic1Desktop.src,
      },
      {
        mobile: manageStatic2Mobile.src,
        tablet: manageStatic2Tablet.src,
        desktop: manageStatic2Desktop.src,
      },
    ],
  },
  {
    slug: "bookmark",
    title: "Bookmark",
    portfolioImages: {
      mobile: bookmarkPortfolioMobile.src,
      tablet: bookmarkPortfolioTablet.src,
      desktop: bookmarkPortfolioDesktop.src,
    },

    heroImages: {
      mobile: bookmarkHeroMobile.src,
      tablet: bookmarkHeroTablet.src,
      desktop: bookmarkHeroDesktop.src,
    },
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    tags: ["Interaction Design", "Front End Development"],
    stack: ["HTML", "CSS", "JS"],
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    staticPreviews: [
      {
        mobile: bookmarkStatic1Mobile.src,
        tablet: bookmarkStatic1Tablet.src,
        desktop: bookmarkStatic1Desktop.src,
      },
      {
        mobile: bookmarkStatic2Mobile.src,
        tablet: bookmarkStatic2Tablet.src,
        desktop: bookmarkStatic2Desktop.src,
      },
    ],
  },
  {
    slug: "insure",
    title: "Insure",
    portfolioImages: {
      mobile: insurePortfolioMobile.src,
      tablet: insurePortfolioTablet.src,
      desktop: insurePortfolioDesktop.src,
    },
    heroImages: {
      mobile: insureHeroMobile.src,
      tablet: insureHeroTablet.src,
      desktop: insureHeroDesktop.src,
    },
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    tags: ["Interaction Design", "Front End Development"],
    stack: ["HTML", "CSS", "JS"],
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    staticPreviews: [
      {
        mobile: insureStatic1Mobile.src,
        tablet: insureStatic1Tablet.src,
        desktop: insureStatic1Desktop.src,
      },
      {
        mobile: insureStatic2Mobile.src,
        tablet: insureStatic2Tablet.src,
        desktop: insureStatic2Desktop.src,
      },
    ],
  },
  {
    slug: "fylo",
    title: "Fylo",
    portfolioImages: {
      mobile: fyloPortfolioMobile.src,
      tablet: fyloPortfolioTablet.src,
      desktop: fyloPortfolioDesktop.src,
    },

    heroImages: {
      mobile: fyloHeroMobile.src,
      tablet: fyloHeroTablet.src,
      desktop: fyloHeroDesktop.src,
    },
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    tags: ["Interaction Design", "Front End Development"],
    stack: ["HTML", "CSS"],
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    staticPreviews: [
      {
        mobile: fyloStatic1Mobile.src,
        tablet: fyloStatic1Tablet.src,
        desktop: fyloStatic1Desktop.src,
      },
      {
        mobile: fyloStatic2Mobile.src,
        tablet: fyloStatic2Tablet.src,
        desktop: fyloStatic2Desktop.src,
      },
    ],
  },
];
