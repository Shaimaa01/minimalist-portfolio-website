import logo from "@/assets/images/logo.svg";
import hamburgerIcon from "@/assets/images/icons/hamburger.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-[32px] pt-[32px] pb-[40px]">
      <img src={logo} alt="Company logo" />
      <img src={hamburgerIcon} alt="Menu button" />
    </header>
  );
};
