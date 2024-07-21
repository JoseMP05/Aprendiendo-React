import { useState } from "react"

export function Card({name, usarName, initialIsFollowing}) {
  // Use state return in the first position the value of the state and the second how to update it
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const classNameButton = isFollowing ? 'card__button' : 'card__button card__button--follow'

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }
  const imgSource = `https://unavatar.io/${usarName}`
  return (
    <article className="card">
      <header className="card__header">
        <img className="card__picture" src={imgSource} alt="user picture" width='40' height='40'/>
        <strong className="card__name">{name}</strong>
        <small className="card__usarname">@{usarName}</small>
      </header>
      <button className={classNameButton} onClick={handleFollow}>{text}</button>
    </article>
  )
}