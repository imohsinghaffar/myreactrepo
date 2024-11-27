import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(10)
  // let count = 5;
  // let getAddBtn = document.querySelector('.add');
  // let getRemoveBtn = document.querySelector('.remove');
  // getAddBtn.addEventListener('click',()=>{
  //   console.log(count++);
  // })
  // getRemoveBtn.addEventListener('click',()=>{
  //   console.log(count--);
  // })
function addNum()
{
  if(count<20)
  {
    setCounter(count+1);
  }
}
function removeNum()
{
  if(count>0)
  {
    setCounter(count-1);
  }
}


  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value:{count}</h3>
      <button className='add' onClick={addNum}>Add</button>
      <button className='remove' onClick={removeNum}>Remove</button>

    </>
  )
}

export default App
