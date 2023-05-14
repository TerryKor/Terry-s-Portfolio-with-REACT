import React from "react";
import "./Navigation.css"
import { Link } from "react-router-dom";
function Navigation() {
    return(
        <nav>
            <Link className="links" to="/"><p>About</p></Link>
            <Link className="links"  to="/portfolio"><p>Portfolio</p></Link>
            <Link className="links"  to="/contact"><p>Contact</p></Link>
            <Link className="links"  to="/resume"><p>Resume</p></Link>
        </nav>
    )
}

export default Navigation