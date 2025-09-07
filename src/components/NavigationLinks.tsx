"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <nav className={className}>
      {navLinksData.map((link) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
              onClick?.();
            }}
            className={
              isActive && !disableActiveState
                ? "text-SlightlyDesaturatedCyan"
                : ""
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
