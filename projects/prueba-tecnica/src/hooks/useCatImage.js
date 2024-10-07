import {useState, useEffect} from 'react'

export default function useCatImage ({ fact }) {
  const CAT_PREFIX_URL = 'https://cataas.com'
  const [imageUrl, setImage] = useState()

  // Get the image every time we have a new fact
  useEffect(() => {
    if (!fact) return
    
    const firstWord = fact.split(' ')[0]
    // array.split(' ').slice(0, 3).join(' ') => Get the first 3 words
    const url = `/cat/says/${firstWord}`
    setImage(url)
  }, [fact])

  return {imageUrl: `${CAT_PREFIX_URL}${imageUrl}`}
}