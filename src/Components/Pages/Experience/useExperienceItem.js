import { useCallback, useEffect } from "react";

export const useExperienceItem = (tabIndex, isActive, toggleActive) => {
  useEffect(() => {
    console.log("Whatever", tabIndex);
  }, [tabIndex]);

  useEffect(() => {
    console.log(`${tabIndex} is ${isActive ? "active" : "inactive"}`);
  }, [isActive, tabIndex]);

  const onToggle = useCallback(
    () => toggleActive(tabIndex),
    [tabIndex, toggleActive]
  );

  return { onToggle };
};
