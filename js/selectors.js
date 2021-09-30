// Implement selector function to get elements needed
// 1. Cell List
// 2. Current Turn
// 3. Replay Game
// 4. Game status
export function getCellElementList() {
  return document.querySelectorAll("#cellList > li");
}

export function getCurrentTurnElement() {
  return document.getElementById("currentTurn");
}

export function getCellElementAtIdx(index) {
  return document.querySelector(`#cellList > li:nth-child(${index + 1})`);
}

export function getGameStatusElement() {
  return document.getElementById("gameStatus");
}
