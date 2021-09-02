import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useExperienceItem } from "./useExperienceItem";

export const ExperienceItem = ({
  title,
  children,
  isActive,
  toggleActive,
  tabIndex,
}) => {
  const { onToggle } = useExperienceItem(tabIndex, isActive, toggleActive);

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Card.Header}
          variant="link"
          eventKey={tabIndex}
          onClick={onToggle}
        >
          <div className="accordion-header">
            <p className="experience-title">{title}</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={
                isActive
                  ? "experience-arrow selected-toggle"
                  : "experience-arrow"
              }
            />
          </div>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={tabIndex}>
        <Card.Body>{children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
