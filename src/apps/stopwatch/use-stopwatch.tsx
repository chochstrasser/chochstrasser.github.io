import * as React from 'react';

const useStopwatch = () => {
  const [milliseconds, setMilliseconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false); // isActive is defined to see if the timer is active or not.
  const [isPaused, setIsPaused] = React.useState(true); // isPaused is defined to see if the timer is paused or not.
  const counterRef = React.useRef<number>(); // useRef helps us to get or control any element's reference.

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    counterRef.current = window.setInterval(() => {
      setMilliseconds((milliseconds) => milliseconds + 1);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(counterRef.current);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    counterRef.current = window.setInterval(() => {
      setMilliseconds((milliseconds) => milliseconds + 1);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(counterRef.current);
    setIsActive(false);
    setIsPaused(true);
    setMilliseconds(0);
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 100);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const seconds = `0${totalSeconds % 60}`.slice(-2);
    const minutes = `0${totalMinutes % 60}`.slice(-2);
    const hours = `0${totalHours % 24}`.slice(-2);
    const ms = `0${milliseconds}`.slice(-2);

    return `${hours} : ${minutes} : ${seconds}: ${ms}`;
  };

  const time = formatTime(milliseconds);

  return { time, isActive, isPaused, handleStart, handleStop, handleResume, handleReset };
};

export default useStopwatch;
