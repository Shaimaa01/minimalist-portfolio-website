import { NavLink } from "react-router-dom";

const navLinksData = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact Me" },
];

type NavigationLinksProps = {
  className?: string;
  onClick?: () => void;
  disableActiveState?: boolean;
};

export const NavigationLinks = ({
  className,
  onClick,
  disableActiveState = false,
}: NavigationLinksProps) => {
  return (
    <nav className={className}>
      {navLinksData.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            onClick?.();
          }}
          className={({ isActive }) =>
            isActive && !disableActiveState
              ? "text-SlightlyDesaturatedCyan"
              : ""
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
