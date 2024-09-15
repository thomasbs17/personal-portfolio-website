import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import {TypeAnimation} from "react-type-animation";
import landingPerson from "../../assets/lottie/landingPerson";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./Greeting.scss";

import StyleContext from "../../contexts/StyleContext";
import {greeting, illustration} from "../../portfolio";

function AnimatedText() {
  const sequences = [
    "I am a full stack software engineer 👨‍💻",
    1000,
    "I am a Financial Industry professional 💹",
    1000,
    "I am currently based in London ☕ 💂",
    1000,
    "I am from France 🥐 🍷 🧀",
    1000,
    "I am a dancer 🕺 and a boxer 🥊",
    1000
  ];
  return (
    <TypeAnimation
      preRenderFirstString={true}
      speed={75}
      sequence={sequences}
      repeat={Infinity}
      style={{
        fontSize: "30px",
        display: "inline-block",
        color: "rgba(255, 0, 255, 0.6)"
      }}
    />
    // <div><span>I</span><span>am</span></div>
  );
}

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <Fade bottom duration={1000} distance="40px">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                <AnimatedText />
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
