import { HeroSection } from "./home/HeroSection";
import { AboutSection } from "./home/AboutSection";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <section className="mb-[80px] px-[32px] pt-[40px] md:mb-[96px] md:px-[39px] md:pt-[47px] lg:mb-[150px] lg:px-[165px] lg:pt-[54px]">
      <HeroSection />
      <AboutSection />
      <ContactCTA className="mt-[115px] md:mt-[96px] lg:mt-[150px]" />
    </section>
  );
}
