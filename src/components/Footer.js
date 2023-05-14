import React from "react";
import "./Footer.css"
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
function Footer(){
    return(
        <footer>
            <div className="socialLinks">
                    <a href="https://github.com/terrykor"><img src={github} alt="socials"/></a>
                    <a href="https://github.com/terrykor"><img src={linkedin} alt="socials"/></a>
                    <a href="https://github.com/terrykor"><img src={twitter} alt="socials"/></a>
                    
            </div>
            <div className="copyright">Copyright &copy; Terry 2023</div>
        </footer>
    )
}

export default Footer;