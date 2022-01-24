import * as React from 'react';
import { timerParts } from '../../utils/time';

const useStopwatch = () => {
  const [milliseconds, setMilliseconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false); // isActive is defined to see if the timer is active or not.
  const [isPaused, setIsPaused] = React.useState(true); // isPaused is defined to see if the timer is paused or not.
  const counterRef = React.useRef<number>(); // useRef helps us to get or control any element's reference.

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);

    if (counterRef.current) {
      clearInterval(counterRef.current);
    }

    counterRef.current = window.setInterval(() => {
      setMilliseconds((milliseconds) => milliseconds + 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(counterRef.current);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    counterRef.current = window.setInterval(() => {
      setMilliseconds((milliseconds) => milliseconds + 10);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(counterRef.current);
    setIsActive(false);
    setIsPaused(true);
    setMilliseconds(0);
  };

  const { seconds, minutes, hours } = timerParts(milliseconds);

  return { milliseconds, seconds, minutes, hours, isActive, isPaused, handleStart, handleStop, handleResume, handleReset };
};

export default useStopwatch;
