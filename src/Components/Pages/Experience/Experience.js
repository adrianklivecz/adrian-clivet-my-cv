import { Carousel } from "bootstrap";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Experience.css";
import { ExperienceItem } from "./ExperienceItem";
import { useExperiences } from "./useExperiences";
import galt6 from "./images/galt6.jpg";

import galt2 from "./images/galt2.jpg";
import galt3 from "./images/galt3.jpg";
import galt4 from "./images/galt4.jpg";
import galt5 from "./images/galt5.jpg";

export const Experience = () => {
  const { activeIndex, onToggleClick, experiences } = useExperiences();

  return (
    <div className="experience-container">
      <p id="experience-page-title">My journey, so far:</p>
      <div className="era-container-first">
        <div className="experience-details">
          <Accordion>
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.title}
                title={experience.title}
                isActive={activeIndex === index}
                toggleActive={onToggleClick}
                tabIndex={index}
              >
                {experience.content}
              </ExperienceItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
