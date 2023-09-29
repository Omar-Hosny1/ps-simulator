import React, { useEffect, useState } from "react";
import { formatTime } from "../../utils/helper-functions";

function Time() {
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const currTime = new Date();
      setCurrentTime(formatTime(currTime));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className="time">{currentTime}</span>;
}

export default Time;
