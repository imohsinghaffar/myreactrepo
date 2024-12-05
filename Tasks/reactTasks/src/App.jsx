import { useCallback, useState } from 'react'

function App() {
  let [clickCount, setclickCount] = useState(0) // we use state to handle every inner operation
  //by react we don't need to understand inside what's happening, react manage itself.

  function Counter()
  {
    if(clickCount>=0)
      setclickCount(clickCount + 1)
    }
    if(clickCount>40)
    {
      setclickCount(clickCount=0)
    }

  return (
    <>
      <div className=' w-full h-screen flex items-center justify-center'>
      <div className='w-52 h-55 py-6 bg-violet-700	text-center rounded-lg'>
      <h1 className='font-serif text-4xl text-white my-2'>Counter</h1>  
      <h1 className='text-white text-lg my-2'>Total Count : {clickCount}</h1>
      <button className='bg-fuchsia-50 hover:bg-white-600 rounded-lg px-4 py-2 items-center text-2xl my-3 mx-8' 
        onClick={Counter}>Click Here</button>
      </div>
      </div>
    </>
  )
}

export default App
