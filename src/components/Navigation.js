import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  var iconList = ["bx bx-menu", "bx bx-x"];
  const [icon, setIcon] = useState(iconList[0]);

  const [navClass, setNavClass] = useState('visible');

  const iconClick = () => {
    icon === iconList[0] ? setIcon(iconList[1]) : setIcon(iconList[0]);
  };




  return (
    <>
      <i class={icon} onClick={iconClick}></i>

      <nav className={navClass}>
        <Link className="link1 links" to="/">
          <p>About</p>
        </Link>
        <Link className="link2 links" to="/portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className="link3 links" to="/contact">
          <p>Contact</p>
        </Link>
        <Link className="link4 links" to="/resume">
          <p>Resume</p>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
