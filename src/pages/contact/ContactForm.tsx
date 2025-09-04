import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormSchema } from "./contactFormSchema";
import { sendContactEmail } from "@/services/emailService";
import { useState } from "react";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const onSubmit = (data: ContactFormSchema) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    sendContactEmail(data)
      .then(() => {
        setSubmissionStatus("success");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS submission failed:", error);
        setSubmissionStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="flex flex-col lg:flex-row gap-[24px] md:gap-[32px] lg:gap-[125px]">
      <h2 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px] text-nowrap xl:min-w-[350px]">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[24px] w-full"
      >
        <FormField
          name="name"
          label="Name"
          placeholder="Jane Appleseed"
          register={register}
          error={errors.name}
        />

        <FormField
          name="email"
          label="Email Address"
          type="email"
          placeholder="email@example.com"
          register={register}
          error={errors.email}
        />

        <FormField
          name="message"
          label="Message"
          as="textarea"
          placeholder="How can I help?"
          register={register}
          error={errors.message}
        />

        <SubmitButton
          isSubmitting={isSubmitting}
          submissionStatus={submissionStatus}
        />
      </form>
    </section>
  );
};
