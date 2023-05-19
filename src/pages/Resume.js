import React from "react";
import "./Resume.css"
// import Tilt from 'react-tilt';
import node from "../assets/images/nodeJS.jpg";
import tailwind from "../assets/images/tailwind.png";
import sql from "../assets/images/mySql.png";
import react from "../assets/images/reactJS.png";
import mongo from "../assets/images/mongoDB.png";
import javaScript from "../assets/images/javascript.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
function Resume(){
    return (
        <div >
            {/* <Tilt className="tilt"> */}
  <img className="node" src={node} alt="node" />
  <img className="node" src={tailwind} alt="node" />
  <img className="node" src={sql} alt="node" />
  <img className="node" src={react} alt="node" />
  <img className="node" src={mongo} alt="node" />
  <img className="node" src={html} alt="node" />
  <img className="node" src={css} alt="node" />
  <img className="node" src={javaScript} alt="node" />
{/* </Tilt> */}
        </div>
    )
}

export default Resume