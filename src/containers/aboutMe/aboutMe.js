import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./aboutMe.scss";

export default function AboutMe() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="about-main" id="about-me">
      <div className="about-me-main">
        <div className="about-me-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode about-me-text" : "about-me-text"}
            >
              About Me
            </h1>
            <Fade bottom duration={1000} distance="40px">
              <iframe
                title="my-international-experience"
                src="https://uploads.knightlab.com/storymapjs/3330b7db611d6e61ed30c87f21850b4b/my-international-experiences/index.html"
                width="90%"
                height="600"
              ></iframe>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
