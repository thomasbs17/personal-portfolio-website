import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Thomas Bouamoud | ")}
          <a
            href="https://github.com/thomasbs17/personal-portfolio-website"
            rel="noreferrer"
            target="_blank"
          >
            View this website's source code
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Bootstrapped with{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
