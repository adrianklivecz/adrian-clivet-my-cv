import { useState, useEffect } from "react";
import React from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div style={{ marginTop: 10 }}>
      {" "}
      <h5>{time.toLocaleTimeString()}</h5>
      <p>{time.toDateString()}</p>
    </div>
  );
};

export default Timer;
