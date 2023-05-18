import React from "react";
import "./Footer.css"

import 'boxicons/css/boxicons.min.css';
function Footer(){
    return(
        <footer>
            <div className="socialLinks">
            <a href="https://github.com/TerryKor"><i class='bx bxl-github' ></i></a>
            <a href="https://www.linkedin.com/in/terentiy-kornienko-114302b7/"><i class='bx bxl-linkedin' ></i></a>
            <a href="https://www.facebook.com/gordon.freemann.1"><i class='bx bxl-facebook' ></i></a>
                  
                     
            </div>
            <div className="copyright">Copyright &copy; Terry 2023</div>
        </footer>
    )
}

export default Footer;