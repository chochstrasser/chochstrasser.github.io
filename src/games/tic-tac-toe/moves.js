import { ListItem } from './tic-tac-toe-style';

const POSITIONS = {
  0: '(0,0)',
  1: '(0,1)',
  2: '(0,2)',
  3: '(1,0)',
  4: '(1,1)',
  5: '(1,2)',
  6: '(2,0)',
  7: '(2,1)',
  8: '(2,2)',
};

const Moves = ({ history, jumpTo, stepNumber }) =>
  history.map((step, move) => {
    const desc = move ? `Go to move #${move} ${POSITIONS[step.position]}` : 'Go to game start';

    console.log('step number', stepNumber, move);
    return (
      <ListItem key={move} onClick={() => jumpTo(move)} active={stepNumber - move === 0}>
        {desc}
      </ListItem>
    );
  });

export default Moves;
