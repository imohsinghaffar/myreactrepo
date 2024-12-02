import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const[length,setLength] = useState(8)
  const[numAllowed,setNumAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] = useState("")
  //useref Hook
  const passReference = useRef(null)
const passGen = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str+='0123456789'
  if(charAllowed) str+='!#$%&()*+,-./:;<=>?@[]^_{|}~'
  for(let i=1;i<= length;i++){
    let char = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)

},[length, numAllowed, charAllowed, setPassword])

const passwordCopyToClip = useCallback(()=>{
  passReference.current?.select()
  passReference.current?.setSelectionRange(0,100)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passGen()
},[length, numAllowed, charAllowed])
  return (
    <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
      <h3 className='text-center text-white mb-3'>Password Generator</h3>
      <div  className='flex rounded-lg overflow-hidden text-center mx-4'>
      <input type="text"
      value={password}
      placeholder='Password'
      className='outline-none w-full py-1 px-3'
      ref={passReference}
      readOnly/>
      <button onClick={passwordCopyToClip} className='bg-blue-500 text-white px-3 py-1'>Copy</button>
      </div>
      <div className='flex text gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cusor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numInput'
          onChange={()=>{
            setNumAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='numInput'>Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='charInput'>Characters</label>
         </div>
      </div>
    </div>
  )
}

export default App
