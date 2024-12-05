import { useState } from 'react'


function App() {
  const [color, setColor] = useState('teal')

  return (
      <div className='clr w-full h-full h-screen duran=200' style={{backgroundColor:color}} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full' onClick={()=>setColor('green')} style={{backgroundColor:'green',color:'white'}}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full' onClick={()=>setColor('red')} style={{backgroundColor:'red',color:'white'}}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full' onClick={()=>setColor('blue')} style={{backgroundColor:'blue',color:'white'}}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full' onClick={()=>setColor('black')} style={{backgroundColor:'black',color:'white'}}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full' onClick={()=>setColor('grey')} style={{backgroundColor:'grey',color:'white'}}>Grey</button>
          </div>
        </div>
      </div>
      
  )
}

export default App
