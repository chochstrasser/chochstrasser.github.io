import React from "react";

const POSITIONS = {
  "0": "(0,0)",
  "1": "(0,1)",
  "2": "(0,2)",
  "3": "(1,0)",
  "4": "(1,1)",
  "5": "(1,2)",
  "6": "(2,0)",
  "7": "(2,1)",
  "8": "(2,2)",
};

const Moves = ({ history, jumpTo }) =>
  history.map((step, move) => {
    const desc = move
      ? `Go to move # ${move} ${POSITIONS[step.position]}`
      : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

export default Moves;
