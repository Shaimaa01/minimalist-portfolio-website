import emailjs from "@emailjs/browser";
import { type ContactFormSchema } from "@/app/contact/components/contactFormSchema";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export const sendContactEmail = (data: ContactFormSchema) => {
  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
