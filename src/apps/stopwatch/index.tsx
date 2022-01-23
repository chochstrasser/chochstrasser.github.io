import * as React from 'react';

type Props = {
  showModal: boolean;
};

const Stopwatch = ({ showModal }: Props) => {
  const [timer, setTimer] = React.useState(0);

  if (showModal) {
    return null;
  }

  return (
    <>
      <h1>STOPWATCH</h1>
      <div>{timer}</div>
    </>
  );
};

export default Stopwatch;
