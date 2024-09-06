//To export th e logic in a separate file, we could use this same logic with another framework or library, or even in a different project. This is a good practice to keep the code clean and organized.

export const checkWinner = (boardToCheck) => {
  for (let i  = 0; i < 3; i++) {
    if (
      boardToCheck[i] &&
      boardToCheck[i] === boardToCheck[i+3] && 
      boardToCheck[i] === boardToCheck[i+6]){
      return boardToCheck[i]
    }
  }

  for (let i = 0; i <= 6; i += 3) {
    if (
      boardToCheck[i] &&
      boardToCheck[i] === boardToCheck[i+1] && 
      boardToCheck[i] === boardToCheck[i+2])
      return boardToCheck[i]
  }

  if (boardToCheck[0] === boardToCheck[4] && boardToCheck[0] === boardToCheck[8])
    return boardToCheck[0]
  else if (boardToCheck[2] === boardToCheck[4] && boardToCheck[2] === boardToCheck[6])
    return boardToCheck[2]

  return null
}

export function checkEndGame(newBoard) {
  return (newBoard.every((square) => square !== null))
}