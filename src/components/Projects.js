import React from "react";
import "./Projects.css";
import github from "../assets/images/github.png";
import link from "../assets/images/link.png";
function Project(props) {
  return (
    <div className="card">
      <img className="projectImages" src={props.image} alt="projectImage"></img>
      <div className="content">
        <h3 className="projectTitle">{props.title}</h3>
        <p className="projectSubtitle">{props.subtitle}</p>
        <div className="projectLink">
        <a href={props.github}>
          <img src={github} alt="github" />
        </a>
        <a href={props.link}>
          <img src={link} alt="link" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
