import './app.css'
import { useState } from 'react'

export function App() {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(value + 1)
  }
  return (
    <>
    <button onClick={handleClick}>Click me</button>
    <div>click counter: {value}</div>
    </>
  )
}
