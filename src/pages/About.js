import React from "react";
import "./About.css";
import me from "../assets/images/me.png";
import { TypeAnimation } from "react-type-animation";
function About() {
  return (
    <div className="sectionAboutMe">
      <div className="leftSideData">
        <h2 className="aboutMe">My name is Terry</h2>
        {/* Displaying the dynamic typed text */}
        <h1 className="aboutMe">
          And I'm a <br />
          {/* Using the TypeAnimation component */}
          <TypeAnimation
            className="animation"
            sequence={[
              1000,
              "Web Developer",
              1000,
              "Crypto Enthusiast",
              1000,
              "Traveller",
              1000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </h1>
        <p className="contentAboutMe">
          ... a full-stack web developer based in Toronto, Canada. I have a
          background in project management in the construction industry, but I
          decided to transition into web development to pursue my passion for
          building simple and organic websites using HTML5, CSS, and JavaScript.
          I'm always eager to expand my skills and take on new challenges. With
          my extensive project management experience and web development
          background, I believe I bring a unique perspective to projects. Feel
          free to explore my portfolio to see examples of my work. In addition
          to coding, I enjoy traveling, cooking, camping, and trading
          cryptocurrencies.
        </p>
      </div>

      {/* Display the profile picture */}
      <div
        className="myGlow myBlock"
        style={{ backgroundImage: `url(${me})` }}
      ></div>
    </div>
  );
}

export default About;
