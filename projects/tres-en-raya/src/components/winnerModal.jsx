import Square from "./square.jsx"

export function WinnerModal ({winner, resetGame}) {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Ganador:'

  return (//A good practice is have a clean rendering return
    <section className='winner'>
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner && (<Square>{winner}</Square>)}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}