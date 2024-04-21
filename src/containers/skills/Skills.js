import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useContext, useEffect, useState} from "react";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../contexts/StyleContext";
import {illustration, skillsSection} from "../../portfolio";
import "./Skills.scss";

export default function Skills() {
  const [lottieData, setLottieData] = useState({});

  useEffect(() => {
    async function loadData() {
      const data = await axios.get(
        "https://lottie.host/f83a8446-f025-458d-899b-b14689dca0b8/7FlxzJyP2v.json"
      );
      setLottieData({test: data});
    }
    loadData();
    console.log(lottieData);
  });

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
              <DisplayLottie animationData={codingPerson} height={600} />
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
    </div>
  );
}
