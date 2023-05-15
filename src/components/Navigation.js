import React from "react";
import "./Navigation.css"
import { Link } from "react-router-dom";
function Navigation() {
    return(
        <nav>
            <Link className="link1" to="/"><p>About</p></Link>
            <Link className="link2"  to="/portfolio"><p>Portfolio</p></Link>
            <Link className="link3"  to="/contact"><p>Contact</p></Link>
            <Link className="link4"  to="/resume"><p>Resume</p></Link>
        </nav>
    )
}

export default Navigation