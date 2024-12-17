import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>my app</h2>
      <Box />
    </>
  )
}

export default App
