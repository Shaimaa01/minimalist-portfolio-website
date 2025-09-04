import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

const socialLinks = [
  {
    href: "#",
    IconComponent: GithubIcon,
    label: "GitHub",
    className: "h-6 w-6",
  },
  {
    href: "#",
    IconComponent: TwitterIcon,
    label: "Twitter",
    className: "h-5 w-6",
  },
  {
    href: "#",
    IconComponent: LinkedinIcon,
    label: "LinkedIn",
    className: "h-6 w-6",
  },
];

export const GetInTouchSection = () => {
  return (
    <section className="border-GrayishDarkBlue/15 flex flex-col lg:flex-row gap-[24px] lg:gap-[125px] border-y pt-[25px] pb-[32px] md:pt-[32px] lg:py-[48px]">
      <h1 className="text-GrayishDarkBlue text-[40px] leading-[42px] font-bold tracking-[-0.36px] text-nowrap xl:min-w-[350px]">
        Get in Touch
      </h1>
      <div className="flex flex-col gap-[24px]">
        <p className="text-GrayishDarkBlue/80 text-[15px] leading-[30px]">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>

        <div className="text-GrayishDarkBlue flex items-center gap-[16px]">
          {socialLinks.map(({ href, IconComponent, label, className }) => (
            <a
              key={label}
              href={href}
              className="hover:text-SlightlyDesaturatedCyan"
              aria-label={`View my ${label} profile`}
            >
              <IconComponent className={className} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
