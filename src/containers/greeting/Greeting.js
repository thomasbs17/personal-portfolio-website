import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import {TypeAnimation} from "react-type-animation";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./Greeting.scss";

import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

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
        <div className="greeting-main" style={{height: "100%"}}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%"
            }}
          >
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
            <img
              alt="profile-picture"
              src={require("../../assets/images/profilePicture.jpg")}
              style={{
                borderRadius: "12px",
                maxHeight: "100%",
                width: "auto",
                opacity: "70%",
                maskImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0) 100%)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" // Subtle shadow for blending
              }}
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  );
}
