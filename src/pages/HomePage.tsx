import { HeroSection } from "./home/HeroSection";
import { AboutSection } from "./home/AboutSection";
import { ContactCTA } from "@/components/ContactCTA";

export const HomePage = () => {
  return (
    <section className="px-[32px] md:px-[39px] lg:px-[165px]">
      <HeroSection />
      <AboutSection />
      <ContactCTA className="mt-[115px] md:mt-[96px] lg:mt-[150px]" />
    </section>
  );
};
