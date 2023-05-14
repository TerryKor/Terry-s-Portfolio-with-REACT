import React from "react";
import "./Portfolio.css"
import Project from "../components/Projects"

function Projects(){
    return(
        <div>
            <Project title="My new tile" subtitle="subtitle"/>
            <Project title="My  tile" subtitle="subtitle2"/>
            <Project title="My " subtitle="subtitle3"/>
        </div>
    )
}

export default Projects;