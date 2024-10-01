import { useEffect, useState } from 'react'

// import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  
  useEffect(()=>{ //We can't use an hook inside an event listener or conditional
    const handleMove = (event) =>{
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if(enabled)
      window.addEventListener('pointermove', handleMove)

    //we can return a function to clean up the effect. This excutes:
    // - every time the component unmounts 
    // - when a dependency change its value, before execute the effect again
    return () => window.removeEventListener('pointermove', handleMove)
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        width: '10px',
        height: '10px',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}></div>
      <button onClick={()=>{setEnabled(!enabled)}}>{enabled ? 'Desactivate' :'Activate'} tracking</button>
    </>
  )
}

export default App
