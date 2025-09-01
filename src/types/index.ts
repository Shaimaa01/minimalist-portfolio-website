export type Project = {
  slug: string;
  title: string;

  portfolioImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  heroImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  description: string;
  tags: string[];
  stack: string[];
  background: string;

  staticPreviews: {
    mobile: string;
    tablet: string;
    desktop: string;
  }[];
};
