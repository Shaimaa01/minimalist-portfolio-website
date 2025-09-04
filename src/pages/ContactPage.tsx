import { GetInTouchSection } from "./contact/GetInTouchSection";
import { ContactForm } from "./contact/ContactForm";

export const ContactPage = () => {
  return (
    <section className="flex flex-col gap-[32px] md:gap-[34px] lg:gap-[47px] px-[32px] md:px-[39px] lg:px-[165px] pt-[40px] md:pt-[94px] mb-[80px] md:mb-[96px] lg:mb-[109px]">
      <GetInTouchSection />
      <ContactForm />
    </section>
  );
};
