import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Experience.css";
import { ExperienceItem } from "./ExperienceItem";
import { useExperiences } from "./useExperiences";

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
                <experience.content></experience.content>
              </ExperienceItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
