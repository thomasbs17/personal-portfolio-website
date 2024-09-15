import "bootstrap/dist/css/bootstrap.min.css";
import {default as React, useContext} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {skillsSection} from "../../portfolio";

export default function WhyWorkingWithMe() {
  const {isDark} = useContext(StyleContext);
  const color = isDark ? "0" : "255";
  if (!skillsSection.display) {
    return null;
  }

  const highlightTextStyle = {
    color: isDark ? "white" : "black",
    backgroundColor: `rgb(${color} ${color} ${color} / 50%)`,
    borderRadius: "15px",
    position: "relative",
    boxShadow: `0 0 15px rgba(${color},${color},${color}, 0.5), 0 0 30px rgba(${color},${color},${color}, 0.3), 0 0 45px rgba(${color},${color},${color}, 0.1)`
  };

  return (
    <div
      className={isDark ? "dark-mode main" : "main"}
      id="working-with-me"
      style={{height: "500px"}}
    >
      <Fade left duration={1000}>
        <h1>Why Working With Me?</h1>
        <Carousel interval={null} variant={!isDark && "dark"}>
          {skillsSection.skills.map((skills, i) => {
            return (
              <Carousel.Item style={{height: "500px"}} key={i}>
                <DisplayLottie animationData={skills.lottieAnimation} />
                <Carousel.Caption>
                  <h3 style={highlightTextStyle}>{skills.title}</h3>
                  <p style={highlightTextStyle}>{skills.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Fade>
    </div>
  );
}
