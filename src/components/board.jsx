import React, {useState, useEffect, useRef} from 'react';

import {createBoard} from './board.util';
import './board.css';

const starterSnake = [
  {
    x: 2,
    y: 3,
  },
  {
    x: 3,
    y: 3,
  },
  {
    x: 4,
    y: 3,
  },
  {
    x: 5,
    y: 3
  }
];

const Board = () => {
  const [board, setBoard] = useState(createBoard());
  const [direction, setDirection] = useState('right');
  const [snake, setSnake] = useState(starterSnake);

  useEffect(() => {
    
    document.addEventListener('keydown', handleKeypress);
    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, []);

  const handleTime = () => {
    snakeMove();
    // cleanup snake path
    // make the snake move forward
    // update the board
    updateBoard();
  };

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

  useInterval(handleTime, 100);

  const snakeMove = () => {
    const newSnake = [...snake];
    // const movement = {
    //   x: {
    //     up: 0,
    //     down: 0,
    //     left: -1,
    //     right: 1,
    //   },
    //   y: {
    //     up: -1,
    //     down: 1,
    //     left: 0,
    //     right: 0,
    //   },
    // };

    let newX = newSnake[newSnake.length - 1].x;
    let newY = newSnake[newSnake.length - 1].y;

    switch(direction){
      case 'right':
        newX = (newX + 1) % 16
        break;
      case 'left': 
        newX = (newX - 1 + 16) % 16
        break;
      case 'up':
        newY = Math.abs(newY - 1 + 16) % 16
        break;
      case 'down':
        newY = (newY + 1) % 16
        break;
      default:
        break;
    } 

    newSnake.shift();
    newSnake.push({
      x: newX,
      y: newY
    });
    setSnake(newSnake);
    console.log(snake)
  };

  const updateBoard = () => {
    const newBoard = [...board]
    newBoard[snake[snake.length-1].y][snake[snake.length-1].x] = 's'
    newBoard[snake[0].y][snake[0].x] = 'b'
    setBoard(newBoard);
  }

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
        <h1 style={{position: 'absolute'}}>{direction}</h1>
      </div>
    </div>
  );
};

export default Board;
