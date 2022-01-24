import useStopwatch from './use-stopwatch';

type Props = {
  showModal: boolean;
};

const Stopwatch = ({ showModal }: Props) => {
  const { milliseconds, seconds, minutes, hours, isActive, isPaused, handleStart, handleStop, handleResume, handleReset } = useStopwatch();

  if (showModal) {
    return null;
  }

  return (
    <div className="código-center">
      <h1>STOPWATCH</h1>
      <h3>
        {hours ? `${hours}:` : ''}
        {minutes ? `${minutes}:` : ''}
        {`${`0${seconds}`.slice(-2)}:${`00${milliseconds}`.slice(-3, -1)}`}
      </h3>
      <div>
        {!isActive && isPaused && <button onClick={handleStart}>Start</button>}
        {isActive && isPaused && <button onClick={handleResume}>Resume</button>}
        {!isPaused && <button onClick={handleStop}>Stop</button>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
