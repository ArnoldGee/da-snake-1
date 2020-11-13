function createBoard() {
  const arr = [];

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
  return arr;
}

export {createBoard};
