import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
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

  // const accordionItemClass = {
  //   "experience-arrow": true,
  //   "selected-toggle": isActive
  // }

  const accordionItemClass = [
    "experience-arrow",
    { "selected-toggle": isActive },
  ];

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
              className={clsx(accordionItemClass)}
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
