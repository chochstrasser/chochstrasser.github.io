import * as React from 'react';

type Props = {
  showModal: boolean;
};

const Stopwatch = ({ showModal }: Props) => {
  const [timer, setTimer] = React.useState(0);

  const handleStart = () => {
    setTimer(1);
  };

  if (showModal) {
    return null;
  }

  return (
    <>
      <h1>STOPWATCH</h1>
      <div>{timer}</div>
      <button onClick={handleStart}>START</button>
    </>
  );
};

export default Stopwatch;
