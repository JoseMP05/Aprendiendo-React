import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

import Square from './components/square.jsx'
import { WinnerModal } from './components/winnerModal.jsx'
import './App.css'

import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'

function App() {
  
  //The state always must be in the principal scope of the component
  const [board, setBoard] = useState(()=>{
    //Initial state of the board. This only is executed one time
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return 

    // board[index] = turn //NO update or mutate never the props or the state
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard) //The dates to render a new state always must be have news

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //save game
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', newTurn)

    //THE STATE UPDATING IS ASYNCHRONOUS
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard))
      setWinner(false)//empate
  }

  useEffect(()=>{
    //No dependencies => Execute every time component is rendered
    //Empty array dependencies => Execute only one time when the component is mounted
    // Dependencies => Execute every time the dependencies change
    //A dependency could be every variable, function or state inside of the component
    console.log(board)
  }, [turn])

  function resetGame() {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  return (
    //only can return one element, so we need a wrap. Commmonly is use <> </> to wrap
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Reinicar Juego</button>
      <section className='game'>
        {
          board.map((square,index)=>{
            return <Square
              key={index}//React needs a key to identify each element
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          })
        }
      </section>

      <section>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
