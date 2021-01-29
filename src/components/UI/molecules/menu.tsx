import React from "react";
import Link from "../atoms/link";
type MenuProps = {
  links: string[];
};
const Menu = ({ links }: MenuProps) => {
  const menu: string[] = links
    ? links
    : ["profile", "portfolio", "skill", "contact"];

  return (
    <ul className="menu">
      {menu.map((link: string, index: number) => (
        <li key={index}>
          <Link link={`#${link}`} value={link} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
