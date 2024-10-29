import { useState } from 'react'

import './App.css'

function App() {
  const [Color, setColor] = useState("black")
  
  return (
    
    <div className="w-full h-screen" style = {{backgroundColor:Color}}>
      <div className="flex justify-center flex-wrap px-2"> 
        <div className='flex  flex-wrap justify-center gap-2 px-2 my-20 rounded-2xl  py-2 bg-white '>
              <button  onClick = {()=>setColor("red")}    className='rounded-2xl px-3 py-1' style={{backgroundColor:"red"}}> Red</button> 
              <button  onClick = {()=>setColor("green")} className='rounded-2xl px-3 py-1' style={{backgroundColor:"green"}}> Green</button> 
              <button  onClick = {()=>setColor("yellow ")}className='rounded-2xl px-3 py-1' style={{backgroundColor:"yellow"}}> yellow</button> 
              <button onClick = {()=>setColor("pink")} className='rounded-2xl px-3 py-1' style={{backgroundColor:"pink"}}> Pink</button> 
          
              
              </div>
      </div>
    </div>

       
    
  )
}

export default App
