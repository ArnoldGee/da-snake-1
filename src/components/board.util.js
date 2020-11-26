function createBoard() {
  let arr = [];

  /********************************
   * BOARD CODE:
   * b -> board
   * s -> snake
   * f -> food
   * o -> obstacle
   *******************************/

  for (let i = 0; i < 16; i++) {
    arr.push([]);
    for (let j = 0; j < 16; j++) {
      arr[i].push('b');
    }
  }
  arr = addFood(arr)

  return arr;
}

function addFood(board) {
  const newBoard = [...board];
  newBoard[Math.floor(Math.random()*16)][Math.floor(Math.random()*16)] = 'f'
  return newBoard;
}

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

export {createBoard, starterSnake, addFood};
