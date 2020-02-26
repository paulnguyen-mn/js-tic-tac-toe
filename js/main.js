
/**
 * Global variables
 */
const TURN = {
  CROSS: 'cross',
  CIRCLE: 'circle',
};
let currentTurn = 'cross';
let isGameEnded = false;
let cellValues = new Array(9).fill('');


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


const resetGame = () => {
  // HOMEWORK
  // Reset current turn 
  // Reset game board
  // Hide replay game
};

const highlightWinCells = (winPositions) => {
  for (const position of winPositions) {
    const cell = getCellElementAtIdx(position);
    cell.classList.add('win');
  }
};

const handleCellClick = (cell, idx) => {
  if (cellValues[idx] !== '') return;

  // Add class current turn to li
  cell.classList.add(currentTurn);
  cellValues[idx] = currentTurn;

  // Toggle current turn
  toggleCurrentTurn();

  // Check game status
  const winPositions = checkWin();
  if (winPositions) {
    // X or O win
    highlightWinCells(winPositions);

    console.log('Win', winPositions);
    const replayButton = getReplayElement();
    replayButton.classList.add('show');
  } else {
    // Playing or Ended
    const emptyCellsCount = cellValues.filter(x => x === '').length;
    if (emptyCellsCount === 0) {
      console.log('Game ended');
    } else {
      console.log('Playing')
    }
  }


  // If playing, nothing happens
  // If ended, show replay button
  // If win, hight win cells, show replay button

};

const registerClickForAllCellElements = () => {
  const cellListElement = getCellElementsList();
  cellListElement.forEach((cellElement, index) => {
    cellElement.addEventListener(
      'click',
      () => handleCellClick(cellElement, index)
    );
  });

  // for (const cellElement of cellListElement) {
  //   cellElement.addEventListener('click', () => handleCellClick(cellElement, index));
  // }
};



/**
 * 
 * START GAME
 * 
 */
resetGame();
registerClickForAllCellElements();


