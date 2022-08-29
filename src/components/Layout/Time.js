import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState({
    time: () => {
      let currTime = new Date();
      let TIME =
        (currTime.getHours() > 12
          ? currTime.getHours() % 12
          : currTime.getHours()) +
        ":" +
        currTime.getMinutes() +
        ":" +
        currTime.getSeconds();
      return TIME;
    },
  });

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTime({
          time: () => {
            let currTime = new Date();
            let TIME =
              (currTime.getHours() > 12
                ? currTime.getHours() % 12
                : currTime.getHours()) +
              ":" +
              currTime.getMinutes() +
              " " +
              (currTime.getHours() > 12 ? "PM" : "AM");
            return TIME;
          },
        }),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <span className="time">{time.time()}</span>;
}

export default Time;
