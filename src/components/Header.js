import React from "react";
import "./Header.css";
import Navigation from "./Navigation";
import logo from "../assets/images/logo.png";
function Header() {


  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <Navigation />
    </header>
  );
}

export default Header;
