import React from "react";
import "./Projects.css"

function Project(props){
    return(
        <div className="">
            <h3 className="">{props.title}</h3>
            <p className="">{props.subtitle}</p>
        </div>
    )
}

export default Project