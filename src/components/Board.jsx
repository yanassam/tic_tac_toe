import React from "react";
import Squares from "./Squares";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return <Squares value={squares[i]} onClick={() => onClick(i)} />;
  };
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Squares key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
