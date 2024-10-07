import useCatFact from './hooks/useCatFact.js'
import useCatImage from './hooks/useCatImage.js'

export default function App() {
  
  // We are getting a method that refresh the internal state in the hook without export its own setState
  const{fact, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt="cat generated randomnly base to one  fact" />}
    </main>
  )
}