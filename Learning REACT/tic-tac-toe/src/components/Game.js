import React from 'react';
import { useState } from 'react/cjs/react.development';
import Board from './Board';

function Game() {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
  });

  const handleClick = (i) => {
    const squares = state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      squares: squares,
      xIsNext: !state.xIsNext,
    });
  };

  //Calculate the winner
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const history = state.history;
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  //Show the game status
  let status;
  if (winner) {
    status = 'Winner' + winner;
  } else {
    status = 'Next player is: ' + (state.xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)} 
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{}</ol>
      </div>
    </div>
  );
}

export default Game;
