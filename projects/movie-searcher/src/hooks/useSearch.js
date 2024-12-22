import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a movie name')
      return
    }
    if (search.length < 3) {
      setError('Please enter at least 3 characters')
      return
    }

    setError(false)
  }, [search])

  return { search, setSearch, error }
}
