import logo from "@/assets/images/logo.svg";
import hamburgerIcon from "@/assets/images/icons/hamburger.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-[32px] md:px-[39px] pt-[32px] md:pt-[64px] pb-[40px] md:pb-[47px]">
      <img src={logo} alt="Company logo" />
      <img src={hamburgerIcon} alt="Menu button" className="md:hidden" />

      <nav className="hidden md:block">
        <ul className="flex items-center gap-[43px] text-[12px] uppercase tracking-[2px] text-GrayishDarkBlue">
          <li><a href="/" className="hover:text-SlightlyDesaturatedCyan">Home</a></li>
          <li><a href="/portfolio" className="hover:text-SlightlyDesaturatedCyan">Portfolio</a></li>
          <li><a href="/contact" className="hover:text-SlightlyDesaturatedCyan">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};
