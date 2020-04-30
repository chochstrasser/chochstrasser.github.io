import React, { useState } from "react";
import Board from "./board";
import useCalculateWinner from "./useCalculateWinner";
import { GameWrapper, Game, GameBoard, GameInfo } from "./tic-tac-toe-style";
import Moves from "./moves";

const INITIAL_STATE = {
  history: [
    {
      squares: Array(9).fill(null),
      position: null,
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};

const TicTacToe = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const current = state.history[state.stepNumber];
  const { status, winner } = useCalculateWinner({ ...current });

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const squares = current.squares.slice(0);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState((prevState) => ({
      ...prevState,
      xIsNext: !prevState.xIsNext,
      stepNumber: history.length,
      history: [...history, { squares, position: i }],
    }));
  };

  const jumpTo = (step) => {
    setState((prevState) => ({
      ...prevState,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    }));
  };

  return (
    <GameWrapper>
      <Game>
        <GameBoard>
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </GameBoard>
        <GameInfo>
          <div>{status}</div>
          <ol>
            <Moves history={state.history} jumpTo={jumpTo} />
          </ol>
        </GameInfo>
      </Game>
    </GameWrapper>
  );
};

export default TicTacToe;
