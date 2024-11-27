import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-slate-900'>Tailwind CSS</h1>
      <Card btnOne="Buy Now" btnTwo="Add to Cart"/>
    </>
  )
}

export default App
