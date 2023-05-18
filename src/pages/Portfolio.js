import React from "react";
import "./Portfolio.css";
import Project from "../components/Projects";
import techblog from "../assets/images/techblog.png";
import jate from "../assets/images/jate.png";
import noteTaker from "../assets/images/noteTaker.png";
import teamProfileGenerator from "../assets/images/teamProfileGenerator.png";
import weatherForecast from "../assets/images/weatherforecast.png";
import ticketMasterEventPlaner from "../assets/images/ticketMasterEvantPlanner.png";


function Projects() {
  return (
    <div className="container">
      <Project 
      image = {techblog}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {jate}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {noteTaker}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {teamProfileGenerator}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {weatherForecast}
      title="My new tile" subtitle="some title some some title end" />
      <Project 
      image = {ticketMasterEventPlaner}
      title="My new tile" subtitle="some title some some title end" />

    </div>
  );
}

export default Projects;
