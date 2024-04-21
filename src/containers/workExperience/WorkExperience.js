import React, {useContext} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Fade} from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StyleContext";
import {workExperiences} from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                <Carousel interval={null} variant={!isDark && "dark"}>
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <Carousel.Item>
                        <ExperienceCard
                          key={i}
                          isDark={isDark}
                          cardInfo={{
                            company: card.company,
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.companylogo,
                            role: card.role,
                            descBullets: card.descBullets,
                            url: card.url
                          }}
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
