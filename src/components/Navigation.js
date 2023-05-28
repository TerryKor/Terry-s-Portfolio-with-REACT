import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
function Navigation() {
  var iconList = ["bx bx-menu", "bx bx-x"];
  const [icon, setIcon] = useState(iconList[0]);

  const [navClass, setNavClass] = useState("notVisible");

  const location = useLocation();
  const [url, setUrl] = useState(null)
//making links active
  useEffect(()=>{
    setUrl(location.pathname);
  },[location])
  

  const iconClick = () => {
    icon === iconList[0] ? setIcon(iconList[1]) : setIcon(iconList[0]);
    icon === iconList[0] ? setNavClass("visible") : setNavClass("notVisible");
  };

  const closeNav = (e) => {
    setIcon(iconList[0])
    setNavClass("notVisible")
  };

  return (
    <div className="navbar">
      <i class={icon} onClick={iconClick}></i>

      <nav className={navClass}>
        <Link className={`link1 links ${url === "/Terry-s-Portfolio-with-REACT/" ? "active" : ""}`} onClick={closeNav} to="/Terry-s-Portfolio-with-REACT/">
          <p>About</p>
        </Link>
        <Link className={`link2 links ${url === "/Terry-s-Portfolio-with-REACT/portfolio" ? "active" : ""}`} onClick={closeNav} to="/Terry-s-Portfolio-with-REACT/portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className={`link3 links ${url === "/Terry-s-Portfolio-with-REACT/contact" ? "active" : ""}`} onClick={closeNav} to="/Terry-s-Portfolio-with-REACT/contact">
          <p>Contact</p>
        </Link>
        <Link className={`link4 links ${url === "/Terry-s-Portfolio-with-REACT/resume" ? "active" : ""}`} onClick={closeNav} to="/Terry-s-Portfolio-with-REACT/resume">
          <p>Resume</p>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
