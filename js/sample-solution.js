
/**
 * Global variables
 */
const TURN = {
  CROSS: 'cross',
  CIRCLE: 'circle',
};
let currentTurn = 'cross';
let isGameEnded = false;
let cellValues = Array.from(new Array(9).keys()).map(() => '');


const getCurrentTurnElement = () => {
  // Current turn will be set with id=currentTurn
  return document.querySelector('#currentTurn');
};

const getCellElementsList = () => {
  return document.querySelectorAll('.game .game-board ul.board-cells-list > li') || [];
};

const getCellElementAtIdx = (idx) => {
  const selector = `.game .game-board ul.board-cells-list > li:nth-child(${idx + 1})`;
  return document.querySelector(selector);
};

const getReplayElement = () => {
  return document.querySelector('#replayGame');
}

const toggleCurrentTurn = () => {
  currentTurn = currentTurn === TURN.CROSS ? TURN.CIRCLE : TURN.CROSS;
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CROSS, TURN.CIRCLE);
    currentTurnElement.classList.add(currentTurn);
  }
};

/**
 * Loop through all cell elements 
 * and remove the two classes: cross and circle.
 */
const resetGameBoard = () => {
  const cellElements = getCellElementsList();
  cellElements.forEach(cell => {
    cell.classList.remove('cross', 'circle', 'win');
  })
};

const resetWinner = () => {
  isGameEnded = false;
  const replayElement = getReplayElement();
  if (replayElement) {
    replayElement.classList.remove('show');
  }
};

const resetGame = () => {
  // Reset current turn to X
  currentTurn = TURN.CROSS;
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CROSS, TURN.CIRCLE);
    currentTurnElement.classList.add(currentTurn);
  }

  // Reset cell values
  cellValues = cellValues.map(() => '');

  // Reset game board
  resetGameBoard();

  // Reset winner string
  resetWinner();
};

const checkWin = () => {
  const checkedSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Loop through these sets 
  // and confirm if they have the same value and that value is not empty
  let foundIndex = checkedSets.findIndex(set => {
    const first = cellValues[set[0]];
    const second = cellValues[set[1]];
    const third = cellValues[set[2]];

    return first !== '' && first === second && second === third;
  });
  return foundIndex >= 0 ? checkedSets[foundIndex] : null;
};

const highlightWinCells = (cellIndexesList) => {
  if (!cellIndexesList || cellIndexesList.length === 0) return;

  cellIndexesList.forEach(idx => {
    const cell = getCellElementAtIdx(idx);
    if (cell) {
      cell.classList.add('win');
    }
  });
};

const handleCellClick = (cell, index) => {
  // Do nothing if cell is not existed or already has value
  const alreadyClicked = cell.classList.contains(TURN.CIRCLE) || cell.classList.contains(TURN.CROSS);
  if (!cell || alreadyClicked || isGameEnded) return;

  // Otherwise, add class currentT  urn to cell
  cell.classList.add(currentTurn);

  // Update cell value at index
  cellValues[index] = currentTurn;

  // Check win
  const winCellsIndex = checkWin();
  if (winCellsIndex) {
    // Mark current game is ended
    isGameEnded = true;

    // Highlight win cells
    highlightWinCells(winCellsIndex);

    // Show replay button
    const replayElement = getReplayElement();
    if (replayElement) replayElement.classList.add('show');
  } else {
    // Continue to play
    // Then, toggle currentTurn class
    toggleCurrentTurn();
  }
};

const registerClickForAllCellElements = () => {
  const cellElements = getCellElementsList();
  cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
  });
};

/**
 * 
 * START GAME
 * 
 */
resetGame();
registerClickForAllCellElements();

console.log('Current turn: ', getCurrentTurnElement());
console.log('Cell list: ', getCellElementsList());
console.log('Cell index: ', getCellElementAtIdx(5));
