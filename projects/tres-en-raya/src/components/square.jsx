const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? ' is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index) //Function pass as prop
  }
  return (
    <button className={className} onClick={handleClick}>{children}</button>
  )
}
export default Square