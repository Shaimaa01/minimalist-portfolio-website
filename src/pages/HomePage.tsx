import { HeroSection } from "./home/HeroSection";
import { AboutSection } from "./home/AboutSection";

export const HomePage = () => {
  return (
    <section className="mb-[115px] px-[32px] md:mb-[96px] md:px-[39px] lg:mb-[150px] lg:px-[165px]">
      <HeroSection />
      <AboutSection />
    </section>
  );
};
