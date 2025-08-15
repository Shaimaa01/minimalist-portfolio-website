
import logo from '@/assets/images/logo.svg';
import hamburgerIcon from '@/assets/images/icons/hamburger.svg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-[32px] pb-[40px] px-[32px]">
      <img src={logo} alt="Company logo" />
      <img src={hamburgerIcon} alt="Menu button" />
    </header>
  );
};