import { GetInTouchSection } from "./contact/GetInTouchSection";
import { ContactForm } from "./contact/ContactForm";

export const ContactPage = () => {
  return (
    <section className="px-[32px] md:px-[39px] lg:px-[165px] flex flex-col gap-[32px]">
      <GetInTouchSection />
      <ContactForm />
    </section>
  );
};
