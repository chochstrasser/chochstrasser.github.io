import { timerParts } from '../../utils/time';
import useStopwatch from './use-stopwatch';

type Props = {
  showModal: boolean;
};

const Stopwatch = ({ showModal }: Props) => {
  const { timer, turnedOn, setTurnedOn, setTimer } = useStopwatch();
  const { seconds, minutes, hours } = timerParts(timer);

  if (showModal) {
    return null;
  }

  return (
    <div className="código-center">
      <h1>STOPWATCH</h1>
      <h3>
        {hours ? `${hours}:` : ''}
        {minutes ? `${minutes}:` : ''}
        {`${`0${seconds}`.slice(-2)}:${`00${timer}`.slice(-3, -1)}`}
      </h3>
      <div>
        {!turnedOn && timer === 0 && <button onClick={() => setTurnedOn(true)}>Start</button>}
        {turnedOn && <button onClick={() => setTurnedOn(false)}>Stop</button>}
        {!turnedOn && timer !== 0 && <button onClick={() => setTurnedOn(true)}>Resume</button>}
        {!turnedOn && timer > 0 && <button onClick={() => setTimer(0)}>Reset</button>}
      </div>
    </div>
  );
};

export default Stopwatch;
