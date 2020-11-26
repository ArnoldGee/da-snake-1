import React, {useState, useEffect, useRef} from 'react';

import {createBoard, starterSnake, addFood} from './board.util';
import './board.css';

const Board = () => {
  const [board, setBoard] = useState(createBoard());
  const [direction, setDirection] = useState('right');
  const [snake, setSnake] = useState(starterSnake);

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);
    document.getElementById("left").addEventListener("click", ()=> {
      setDirection('left')
    })
    document.getElementById("top").addEventListener("click", ()=>{setDirection('up')})
    document.getElementById("bottom").addEventListener("click", ()=>{setDirection('down')})
    document.getElementById("right").addEventListener("click", ()=>{setDirection('right')})

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, []);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    snakeMove();
    updateBoard();
  }, 100);

  const snakeMove = () => {
    const newSnake = [...snake];

    let newX = newSnake[newSnake.length - 1].x;
    let newY = newSnake[newSnake.length - 1].y;

    switch (direction) {
      case 'right':
        newX = (newX + 1) % 16;
        break;
      case 'left':
        newX = (newX - 1 + 16) % 16;
        break;
      case 'up':
        newY = Math.abs(newY - 1 + 16) % 16;
        break;
      case 'down':
        newY = (newY + 1) % 16;
        break;
      default:
        break;
    }
    newSnake.push({
      x: newX,
      y: newY,
    });
    if (isEatingFood(newX, newY)) {
      setBoard(addFood(board));
    } else {
      newSnake.shift();
    }
    setSnake(newSnake);
  };

  const isEatingFood = (x, y) => {
    return board[y][x] === 'f';
  };

  const updateBoard = () => {
    const newBoard = [...board];
    newBoard[snake[snake.length - 1].y][snake[snake.length - 1].x] = 's';
    newBoard[snake[0].y][snake[0].x] = 'b';
    setBoard(newBoard);
  };

  const handleKeypress = (event) => {
    switch (event.keyCode) {
      case 37:
        setDirection('left');
        break;
      case 38:
        setDirection('up');
        break;
      case 39:
        setDirection('right');
        break;
      case 40:
        setDirection('down');
        break;
      default:
        break;
    }
  };

  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, index1) =>
          row.map((item, index2) => (
            <div
              key={index1 + '-' + index2}
              className={'square square--' + item}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
