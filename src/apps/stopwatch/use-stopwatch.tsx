import * as React from 'react';

const useStopwatch = () => {
  const [turnedOn, setTurnedOn] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const timeRef = React.useRef<number>();

  React.useEffect(() => {
    if (turnedOn) {
      timeRef.current = window.setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else {
      window.clearInterval(timeRef.current);
    }

    return () => window.clearInterval(timeRef.current);
  }, [turnedOn]);

  return { timer, turnedOn, setTurnedOn, setTimer };
};

export default useStopwatch;
