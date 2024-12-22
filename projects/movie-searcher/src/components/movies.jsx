function listOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <img src={movie.poster} alt='poster' />
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

function noResult () {
  return <p>No results found</p>
}

export function Movies ({ movies }) {
  return movies ? listOfMovies({ movies }) : noResult()
}
