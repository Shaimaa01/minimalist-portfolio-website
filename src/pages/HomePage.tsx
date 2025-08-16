import { HeroSection } from "./home/HeroSection";
import { AboutSection } from "./home/AboutSection";

export const HomePage = () => {
  return (
    <main className="px-[32px]">
      <HeroSection />
      <AboutSection />
    </main>
  );
};
