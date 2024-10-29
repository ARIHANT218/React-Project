import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [charater, setcharater] = useState(0)
  const [Password, setpassword]= useState('')
  const passwordGenerator = useCallback( () => { 
    let pass ="";
    let str = "ABCDEFabcd"
    for(let i= 1 ; i<length ; i++){
      let ran = Math.floor(Math.random( )*str.length +1 );
      pass = pass + str.charAt(ran);

    }
    setpassword(pass);
  
  
  } , [length,Number ,charater , setpassword])
  


  return (
    
    <div className="w-full  flex max-w-md rounded-lg py-3 px-3 bg-gray-700 text-orange-400  justify-center"> 
    <div className='flex shadow  rounded-lg mb-4 '> 
      <input 
      type='text' value={Password} placeholder="Password"
       ></input>
       </div>
       
       
     
       
    </div>


    
  )
}

export default App
