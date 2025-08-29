import logoWhite from "@/assets/images/whiteLogo.svg";
import githubIcon from "@/assets/images/icons/github.svg";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import linkedinIcon from "@/assets/images/icons/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="bg-GrayishDarkBlue mt-[80px] lg:mt-[150px] flex flex-col items-center gap-[40px] py-[56px] text-white md:mt-[96px] md:flex-row md:justify-between md:px-[39px] lg:px-[165px] md:py-[24px]">
      <div className="flex flex-col gap-[40px] lg:gap-[48px] md:flex-row">
        <img src={logoWhite} alt="Company logo" />

        <ul className="flex flex-col items-center gap-[32px] lg:gap-[43px] text-[12px] tracking-[2px] md:flex-row uppercase">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center gap-[16px]">
        <a href="#">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="#">
          <TwitterIcon className="h-5 w-6 text-white" />
        </a>
        <a href="#">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};
