import { useCallback, useState } from 'react'
import { useMovie } from './hooks/useMovie.js'
import { useSearch } from './hooks/useSearch.js'
import { Movies } from './components/movies.jsx'
import './App.css'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovie({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(event.target.value)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header className='header'>
        <h1>Search For a Movie</h1>
        <form className='form' action='' onSubmit={handleSubmit}>
          <div>
            <input onChange={handleChange} value={search} type='search' name='query' id='search' placeholder='Avengers, Rambo, Terminator...' />
            <button type='submit'>Search</button>
          </div>
          <div>
            <input id='sort' type='checkbox' onChange={handleSort} checked={sort} />
            <label htmlFor='sort'>Sort movies by year</label>
          </div>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main>
        {Movies({ movies })}
      </main>
    </>
  )
}

export default App
