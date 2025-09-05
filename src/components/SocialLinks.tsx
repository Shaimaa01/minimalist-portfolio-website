import { GithubIcon } from "@/components/icons/GithubIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

const socialLinksData = [
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

type SocialLinksProps = {
  colorClass: string;
};

export const SocialLinks = ({ colorClass }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${colorClass}`}>
      {socialLinksData.map(({ href, IconComponent, label, className }) => (
        <a
          key={label}
          href={href}
          className="hover:text-SlightlyDesaturatedCyan transition-colors duration-200"
          aria-label={`View my ${label} profile`}
        >
          <IconComponent className={className} />
        </a>
      ))}
    </div>
  );
};
