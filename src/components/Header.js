import React from "react";
import "./Header.css"
import Navigation from "./Navigation";
function Header(){
    return(
        <header>
            <h1 className="name">Portfolio</h1>
            <Navigation/>
        </header>
    )
}

export default Header;