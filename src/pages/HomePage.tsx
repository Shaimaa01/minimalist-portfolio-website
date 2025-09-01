import { HeroSection } from "./home/HeroSection";
import { AboutSection } from "./home/AboutSection";

export const HomePage = () => {
  return (
    <section className="px-[32px] md:px-[39px] lg:px-[165px] mb-[115px] md:mb-[96px] lg:mb-[150px]">
      <HeroSection />
      <AboutSection />
    </section>
  );
};
