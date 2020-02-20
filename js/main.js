
/**
 * Global variables
 */
// const TURN = {
//   CROSS: 'cross',
//   CIRCLE: 'circle',
// };
// let currentTurn = 'cross';
// let isGameEnded = false;
// let cellValues = Array.from(new Array(9).keys()).map(() => '');


// const getCurrentTurnElement = () => {
//   // Current turn will be set with id=currentTurn
//   return document.querySelector('#currentTurn');
// };

// const getCellElementsList = () => {
//   return document.querySelectorAll('.game .game-board ul.board-cells-list > li') || [];
// };

// const getCellElementAtIdx = (idx) => {
//   const selector = `.game .game-board ul.board-cells-list > li:nth-child(${idx + 1})`;
//   return document.querySelector(selector);
// };

// const getReplayElement = () => {
//   return document.querySelector('#replayGame');
// }

// const toggleCurrentTurn = () => {
//   currentTurn = currentTurn === TURN.CROSS ? TURN.CIRCLE : TURN.CROSS;
//   const currentTurnElement = getCurrentTurnElement();
//   if (currentTurnElement) {
//     currentTurnElement.classList.remove(TURN.CROSS, TURN.CIRCLE);
//     currentTurnElement.classList.add(currentTurn);
//   }
// };

// const checkWin = () => {
//   const checkedSets = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   // Loop through these sets 
//   // and confirm if they have the same value and that value is not empty
//   let foundIndex = checkedSets.findIndex(set => {
//     const first = cellValues[set[0]];
//     const second = cellValues[set[1]];
//     const third = cellValues[set[2]];

//     return first !== '' && first === second && second === third;
//   });
//   return foundIndex >= 0 ? checkedSets[foundIndex] : null;
// };


