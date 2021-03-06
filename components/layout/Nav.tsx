import Link from "next/link";
import * as React from "react";
import { UrlObject } from "url";

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="pb-10">
      <ul className="flex items-center justify-center space-x-4 font-bold">
        <li>
          <NavItem href="/">
            <a>Home</a>
          </NavItem>
        </li>
      </ul>
    </nav>
  );
};

interface INavItemProps {
  href: string | UrlObject;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({ children }) => {
  return (
    <li className="text-green-500 hover:text-green-400 text-xl transition-color duration-200 ease-in-out">
      <Link href="/">
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default Nav;
