import React from "react";

const GameInfo = ({ status, onReset }) => {
  return (
    <div className="game-info">
      <div>{status}</div>
      <button onClick={onReset}>New Game</button>
    </div>
  );
};

export default GameInfo;
