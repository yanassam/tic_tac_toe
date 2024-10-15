import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import { playSoundWithTimeout } from "./utils/soundUtils";

const soundX = new Audio("/public/sounds/Kantata.mp3");
const soundO = new Audio("/public/sounds/Minuet.mp3");
const soundWin = new Audio("/public/sounds/Bah.mp3");
const soundDraw = new Audio("/public/sounds/Minuet.mp3");

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXISNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newSquares = squares.slice();

    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }

    newSquares[index] = xIsNext ? "X" : "O";

    const potentialWinner = calculateWinner(newSquares);

    if (potentialWinner) {
      playSoundWithTimeout(soundWin, 10000);
      setWinner(potentialWinner);
    } else if (squares.every((square) => square !== null)) {
      playSoundWithTimeout(soundDraw, 4000);
    } else {
      if (xIsNext) {
        playSoundWithTimeout(soundX, 4000);
      } else {
        playSoundWithTimeout(soundO, 4000);
      }
    }

    setSquares(newSquares);
    setXISNext(!xIsNext);
  };

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every((square) => square !== null)) {
    status = "It's a Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXISNext(true);
    setWinner(null);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <GameInfo status={status} onReset={resetGame} />
    </div>
  );
}

export default App;
