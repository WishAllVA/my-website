import Link from "next/link"
import React, { useState } from "react"
import NavItem from "./navitem/navitem"
import classes from './navbar.module.css'

const MENU_LIST = [
  { text: "About", href: "#about" },
  { text: "Contact", href: "#contact" },
  { text: "My Work", href: "/contact" },
  { text: "Social Media", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={classes.nav}>
        <Link href={"#home"}>
            <h1>Vishal Arora</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={classes['nav__menu-bar']}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? classes.active : ""} ${classes['nav__menu-list']}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;