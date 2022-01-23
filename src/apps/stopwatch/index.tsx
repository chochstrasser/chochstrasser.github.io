import * as React from 'react';
import useStopwatch from './use-stopwatch';

type Props = {
  showModal: boolean;
};

const Stopwatch = ({ showModal }: Props) => {
  const { time, isActive, isPaused, handleStart, handleStop, handleResume, handleReset } = useStopwatch();

  if (showModal) {
    return null;
  }

  return (
    <>
      <h1>STOPWATCH</h1>
      <p>{time}</p>
      <>
        {!isActive && isPaused && <button onClick={handleStart}>Start</button>}
        {isActive && isPaused && <button onClick={handleResume}>Resume</button>}
        {!isPaused && <button onClick={handleStop}>Stop</button>}
        <button onClick={handleReset}>Reset</button>
      </>
    </>
  );
};

export default Stopwatch;
