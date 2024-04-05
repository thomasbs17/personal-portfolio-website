import "bootstrap/dist/css/bootstrap.min.css";
import {default as React, useContext} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {skillsSection} from "../../portfolio";

export default function WhyWorkingWithMe() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div
      className={isDark ? "dark-mode main" : "main"}
      id="working-with-me"
      style={{height: "500px"}}
    >
      <Fade left duration={1000}>
        <h1>Why Working With Me?</h1>
        <Carousel>
          {skillsSection.skills.map((skills, i) => {
            return (
              <Carousel.Item style={{height: "500px"}}>
                <DisplayLottie animationData={skills.lottieAnimation} />
                <Carousel.Caption>
                  <h3>{skills.title}</h3>
                  <p>{skills.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Fade>
    </div>
  );
}
