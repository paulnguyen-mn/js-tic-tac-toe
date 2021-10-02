import { GAME_STATUS, CELL_VALUE } from "./constants.js";

// Write a function to check status of tic-tac-toe game
// Ref: what is tic-tac-toe game: https://en.wikipedia.org/wiki/Tic-tac-toe
// In summary, tic-tac-toe game has 9 cells divided into 3 rows of 3 cells.
// Each cell can have 3 values: either X, O or empty.
// We say X is win if there are 3 'X' in either horizontal, vertical or diagonal row.
// The same to O.
// If 9 cells is full of values but no one win, then the game is ended.
//
// Given an array of 9 items: [a0, a1, ..., a7, a8] represent for the tic-tac-toe game cells value:
// |  a0  | a1  | a2  |
// |  a3  | a4  | a5  |
// |  a6  | a7  | a8  |
// Each item will receive either of 3 values: empty, X or O.
// Return an object includes two keys:
// - `status`: a string indicate status of the game. It can be one of the following values:
//    - 'X': if X is win
//    - `O`: if O is win
//    - 'END': if game is ended and no one win
//    - 'PLAYING': if no one is win and game is not ended yet.
//
// - `winPositions`:
//    - If X or O is win, return indexes of the 3 winning marks(X/O).
//    - Return empty array.
//
// Example:
// Input array: cellValues = ['X', 'O', 'O', '', 'X', '', '', 'O', 'X']; represent for
// |  X  | O  | O  |
// |     | X  |    |
// |     | O  | X  |
// -----
// ANSWER:
// {
//    status: 'X',
//    winPositions: [0, 4, 8],
// }
//
// END GAME
// |  X  | O  | X  |
// |  X  | O  | X  |
// |  O  | X  | O  |
// ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O']

// Input: an array of 9 items
// Output: an object as mentioned above
export function checkGameStatus(cellValues) {
  // Write your code here ...
  // Please feel free to add more helper function if you want.
  // It's not required to write everything just in this function.
  if (!Array.isArray(cellValues) || cellValues.length !== 9) {
    throw new Error("Invalid cell values");
  }

  // win
  const checkSetList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];
  const winSetIndex = checkSetList.findIndex((set) => {
    const first = cellValues[set[0]];
    const second = cellValues[set[1]];
    const third = cellValues[set[2]];

    return first !== "" && first === second && second === third;
  });

  if (winSetIndex >= 0) {
    const winValueIndex = checkSetList[winSetIndex][1];
    const winValue = cellValues[winValueIndex];

    return {
      status:
        winValue === CELL_VALUE.CIRCLE ? GAME_STATUS.O_WIN : GAME_STATUS.X_WIN,
      winPositions: checkSetList[winSetIndex],
    };
  }

  // end game
  // playing
  const isEndGame = cellValues.filter((x) => x === "").length === 0;
  return {
    status: isEndGame ? GAME_STATUS.ENDED : GAME_STATUS.PLAYING,
    winPositions: [],
  };
}
