import {useState} from 'react' 
// import App from "./App.css"

function App() {
   let [Counter , setCounter ]= useState(12) ;
  // let Counter = 0 ;
  const addvalue = () => {
    
    if (Counter == 20){
      return ;
    }
    setCounter(Counter +1)
    // ArihantCounter(Counter +1)

  }
  const removevalue = () =>{
    if(Counter == 0) return ;
    setCounter(Counter -1)
  }
  return (
  
    <>
     <h1>  Arihant Start with new Project  in react</h1>
     <h2> Count Num :{Counter} </h2>
     <button
      onClick={addvalue}> Add Value {Counter} </button> <br/>
     <button
     onClick={removevalue}> Remove Value {Counter}</button>
     
     </>
  
  )
}

export default App
