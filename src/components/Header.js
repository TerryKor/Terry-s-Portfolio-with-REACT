import React from "react";
import "./Header.css"
import Navigation from "./Navigation";
function Header(){
    return(
        <header>
            <h1 className="name">Terry</h1>
            <Navigation/>
        </header>
    )
}

export default Header;