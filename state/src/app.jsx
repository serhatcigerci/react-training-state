import './app.css'
import { useState } from 'react'
 
export function App() {
  const [value, setValue] = useState(0)

  function handleClick() {
    setValue( value + 1)
  }
  return (
    <>
      
      <button onClick={handleClick}>Click</button>
      <div>Click counter: {value}</div>
    </>
  )
}
