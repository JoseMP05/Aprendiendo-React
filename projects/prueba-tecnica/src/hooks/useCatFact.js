import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

export default function useCatFact () {
  const [fact, setFact] = useState()

  // Get the fact when the page is loaded / Update internal state
  const refreshFact = () => {
    getRandomFact().then(setFact) // This is the same that .then((newFact) => setFact(Fact))
  }
  
  useEffect(refreshFact, [])

  return {fact, refreshFact}
}