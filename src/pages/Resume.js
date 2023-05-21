import React from "react";
import "./Resume.css";
// import Tilt from 'react-tilt';
import node from "../assets/images/nodeJS.jpg";
import tailwind from "../assets/images/tailwind.png";
import sql from "../assets/images/mySql.png";
import react from "../assets/images/reactJS.png";
import mongo from "../assets/images/mongoDB.png";
import javaScript from "../assets/images/javascript.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import resume from "../assets/resume/Resume.pdf";
import "boxicons/css/boxicons.min.css";

function Resume() {
  return (
    <div className="resumePage">
      <a className="downloadLink" href={resume} download="resume-terry">
        Download Resume <i className="bx bx-cloud-download"></i>
      </a>
      <div className="logoWrappers">
         <img className="node" src={node} alt="node" />
        <img className="node" src={tailwind} alt="node" />
        <img className="node" src={sql} alt="node" />
        <img className="node" src={react} alt="node" />
        <br />
        <img className="node" src={mongo} alt="node" />
        <img className="node" src={html} alt="node" />
        <img className="node" src={css} alt="node" />
        <img className="node" src={javaScript} alt="node" />
      </div>
    </div>
  );
}

export default Resume;
