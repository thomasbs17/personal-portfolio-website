import "bootstrap/dist/css/bootstrap.min.css";
import React, {useContext} from "react";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../contexts/StyleContext";
import {illustration, skillsSection} from "../../portfolio";
import "./Skills.scss";

import Carousel from "react-bootstrap/Carousel";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <>
            <div className="skills-text-div">
              <h1
                className={
                  isDark ? "dark-mode skills-heading" : "skills-heading"
                }
              >
                {skillsSection.title}{" "}
              </h1>
              <p className={isDark && "dark-mode"}>{skillsSection.subTitle}</p>
              <SoftwareSkill />
            </div>
          </>
        </Fade>
      </div>
      <div style={{height: "500px"}}>
        <Fade left duration={1000}>
          <h1>Why Working With Me?</h1>
          <Carousel>
            {skillsSection.skills.map((skills, i) => {
              return (
                <Carousel.Item style={{height: "300px"}}>
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
    </div>
  );
}
