import { StyledSquare } from './tic-tac-toe-style';

const Square = ({ value, onClick }) => {
  return <StyledSquare onClick={onClick}>{value}</StyledSquare>;
};

export default Square;
