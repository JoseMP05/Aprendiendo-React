import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovie ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    previousSearch.current = search
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.year - b.year) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies }
}
