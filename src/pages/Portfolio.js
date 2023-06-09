import React from "react";
import "./Portfolio.css";
import Project from "../components/Projects";
import techblog from "../assets/images/techblog.png";
import jate from "../assets/images/jate.png";
import teamProfileGenerator from "../assets/images/teamProfileGenerator.png";
import weatherForecast from "../assets/images/weatherforecast.png";
import ticketMasterEventPlaner from "../assets/images/ticketMasterEvantPlanner.png";
import project3 from "../assets/images/project3.png"

function Projects() {
  return (
    <div className="container">
      {/* Rendering a Project component with the image, title, and subtitle */}
      <Project
        image={techblog}
        title="Tech-Blog"
        subtitle="Web app designed to create, update and delete posts on any tech field as well as leave comments."
        github="https://github.com/TerryKor/Tech-Blog"
        link="https://boiling-waters-85305.herokuapp.com/"
      />
      <Project
        image={jate}
        title="Jate-Text-Editor"
        subtitle="App to create and save notes as well as notes with JavaScript syntax highlightned"
        github="https://github.com/TerryKor/Jate-Text-Editor"
        link="https://jate-by-terry.herokuapp.com/"
      />
      <Project
        image={project3}
        title="Project3"
        subtitle="Marketplace to buy or sell gently used kids stuff, help parents to save money and reduce waste"
        github="https://github.com/ThriftKids/Tots2Treasures"
        link="https://tots-2treasures.herokuapp.com/"
      />
      <Project
        image={teamProfileGenerator}
        title="Team-Profile-Generator"
        subtitle="App to create a work team with some data for each member."
        github="https://github.com/TerryKor/Team-Profile-Generator"
        link="https://drive.google.com/file/d/14j9NhvzFbvvhawYgA0zP_q3WutpIqzGb/view"
      />
      <Project
        image={weatherForecast}
        title="Weather-Forecast-App"
        subtitle="App provides user with weather forecast for next 5 days(temperature, wind, humidity)"
        github="https://github.com/TerryKor/Weather-Forecast-Application"
        link="https://terrykor.github.io/Weather-Forecast-Application/"
      />
      <Project
        image={ticketMasterEventPlaner}
        title="Travelling-Event-Planner"
        subtitle="Built for travelers who want to plan out their vacation and save or delete events in calendar"
        github="https://github.com/Project1Group6/ticketmaster-event-planner"
        link="https://project1group6.github.io/ticketmaster-event-planner/"
      />
    </div>
  );
}

export default Projects;
