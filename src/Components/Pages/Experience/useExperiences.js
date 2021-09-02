import React, { useEffect, useMemo, useState } from "react";
import { Experience1 } from "./Experience-items/Experience1";
import { Experience2 } from "./Experience-items/Experience2";
import { Experience3 } from "./Experience-items/Experience3";
import { Experience4 } from "./Experience-items/Experience4";
import { Experience5 } from "./Experience-items/Experience5";
import { Experience6 } from "./Experience-items/Experience6";

export const useExperiences = () => {
  const [experiences, setExperiences] = useState([
    // {
    //   title: "Nov 2019 - Jun 2020: Scoala Informala de IT",
    //   content: Experience1,
    // },
    // {
    //   title: "Jan 2018 - Nov 2019: Research and testing",
    //   content: Experience2,
    // },
    {
      title:
        "Oct 2011 - Jan 2018: Sales Consultant at GALT Orologerie Elvetiana",
      content: <Experience3 />,
    },
    // {
    //   title: "Aug 2010 - Jul 2011: Account Manager at infoLocal",
    //   content: Experience4,
    // },
    // {
    //   title: "May 2010 - Aug 2010: Loans Consultant at Patria Bank",
    //   content: Experience5,
    // },
    // {
    //   title:
    //     "Apr 2009 - Nov 2009: Financial Consultant at Consultanta Financiara Germana",
    //   content: Experience6,
    // },
  ]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [toggleClick, setToggleClick] = useState(
    () => (index) =>
      setActiveIndex((currentIndex) => (currentIndex !== index ? index : -1))
  );

  //useMemo
  const totalChar = useMemo(() => {
    console.log("useMemo called");
    return experiences
      .map((experience) => experience.title.length)
      .reduce((accum, length) => accum + length);
  }, [experiences]);
  //---

  //useEffect w/ setTimeout
  //   useEffect(() => {
  //     const timeOut = setTimeout(() => {
  //       setExperiences((e) => [...e, { title: "3", content: Experience2 }]);
  //       setToggleClick(() => (index) => {
  //         console.log(`${index} index`);
  //         setActiveIndex((currentIndex) => (currentIndex !== index ? index : -1));
  //       });
  //     }, 5000);
  //     return () => {
  //       clearTimeout(timeOut);
  //     };
  //   }, []);
  //---

  return { activeIndex, onToggleClick: toggleClick, experiences, totalChar };
};
