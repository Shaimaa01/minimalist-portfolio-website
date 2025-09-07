import { type UseFormRegister, type FieldError } from "react-hook-form";
import { type ContactFormSchema } from "@/app/contact/components/contactFormSchema";

type FormFieldProps = {
  name: keyof ContactFormSchema;
  label: string;
  placeholder: string;
  as?: "input" | "textarea";
  type?: string;
  register: UseFormRegister<ContactFormSchema>;
  error?: FieldError;
};

export const FormField = ({
  name,
  label,
  placeholder,
  as = "input",
  type = "text",
  register,
  error,
}: FormFieldProps) => {
  const commonProps = {
    id: name,
    placeholder: placeholder,
    ...register(name),
    className: `bg-GrayishDarkBlue/10 text-GrayishDarkBlue placeholder-GrayishDarkBlue/40 h-[48px] w-full px-[16px] py-[9px] text-[13px] leading-[30px] border border-transparent focus:outline-none ${error ? "focus:border-BrightRed" : "focus:border-SlightlyDesaturatedCyan"}`,
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <label
        htmlFor={name}
        className="text-GrayishDarkBlue/80 text-[13px] leading-[30px] font-bold"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          {...commonProps}
          className={`${commonProps.className} h-[96px]`}
        />
      ) : (
        <input {...commonProps} type={type} />
      )}
      {error && (
        <p className="text-BrightRed text-[10px] italic">{error.message}</p>
      )}
    </div>
  );
};
