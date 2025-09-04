import { GetInTouchSection } from "./contact/GetInTouchSection";
import { ContactForm } from "./contact/ContactForm";

export const ContactPage = () => {
  return (
    <section className="mb-[80px] flex flex-col gap-[32px] px-[32px] pt-[40px] md:mb-[96px] md:gap-[34px] md:px-[39px] md:pt-[94px] lg:mb-[109px] lg:gap-[47px] lg:px-[165px]">
      <GetInTouchSection />
      <ContactForm />
    </section>
  );
};
