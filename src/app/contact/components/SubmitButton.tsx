type SubmitButtonProps = {
  isSubmitting: boolean;
  submissionStatus: "success" | "error" | null;
};

export const SubmitButton = ({
  isSubmitting,
  submissionStatus,
}: SubmitButtonProps) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-DarkBlue flex h-[48px] w-[200px] cursor-pointer items-center justify-center text-[12px] tracking-[2px] text-white uppercase"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submissionStatus === "success" && (
        <p className="text-SlightlyDesaturatedCyan italic">
          Thank you! Your message has been sent.
        </p>
      )}
      {submissionStatus === "error" && (
        <p className="text-BrightRed italic">
          Sorry, something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};
