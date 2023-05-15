import React from "react";
import "./Portfolio.css";
import Project from "../components/Projects";
import techblog from "../assets/images/techblog.png";


function Projects() {
  return (
    <div className="container">
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      {/* <Project title="My  tile" subtitle="subtitle2" />
      <Project title="My " subtitle="subtitle3" /> */}
    </div>
  );
}

export default Projects;
