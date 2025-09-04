import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").min(3, "Name is too short"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email({ pattern: z.regexes.rfc5322Email })),
  message: z.string().min(1, "Message cannot be empty"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
