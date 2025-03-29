import { useRef, useState } from "react";

export const useTimer = (maxTime: number) => {
  const [timer, setTimer] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const starTimer = () => {
    setTimer(maxTime);
    interval.current = setInterval(() => {
      setTimer((prevtimer) => prevtimer - 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(interval.current);
  };
  return {
    timer,
    starTimer,
    clearTimer,
  };
};
