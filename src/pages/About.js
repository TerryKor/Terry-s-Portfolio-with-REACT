import React from "react";
import "./About.css";
import me from "../assets/images/me.png";
import { TypeAnimation } from "react-type-animation";
function About() {
  return (
    // <div className="homeAboutMe">
    <div className="sectionAboutMe">
      <div>
        <h2 className="aboutMe">My name is Terry</h2>
        <h1 className="aboutMe">
          And I'm a{" "}
          <TypeAnimation
            sequence={[
                1000,
              "Web Developer", // Types 'One'
              1000, // Waits 1s
              "Crypto Enthusiast",
              1000,
              "Traveller",
              1000,
              () => {
                
              },
            ]}
            speed={{type:"keyStrokeDelayInMs", value:100}}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </h1>
        <p className="aboutMe">
          Hello. My name is Terry: a newby full stack web developer, formerly a
          Project Manager in construction, living in Toronto, Canada. I am
          passionate about building simple and organic websites in HTML5, CSS
          and JavaScript. I am always looking to expand my skills, and am up for
          new challenges. I believe, my extensive Project Management experience
          along with some web development background makes me an excellent
          candidate for your projects. Please feel free to browse through my
          portfolio.
        </p>
      </div>
      <div>
        <img
          className="aboutMe"
          id="myPicture"
          src={me}
          alt="profilePicture"
        ></img>
      </div>
    </div>
    // </div>
  );
}

export default About;
