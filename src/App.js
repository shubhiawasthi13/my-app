import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(1) //hooks

  //let counter = 15 
  const addValue = () =>{
    if(counter>=0)
      setCounter(counter + 1);
    // setCounter(prev => prev + 1);
    // setCounter(prev => prev + 1);
    // setCounter(prev => prev + 1);
    // setCounter(prev => prev + 1);
    
    
  }
  const removeValue = () =>{
    if(counter>0)
    setCounter(counter - 1);
    
  }
return(
  <>
  <h1>counter value: {counter}</h1>
  <button onClick={addValue}>add value {counter}</button>
  <br />
  <button onClick={removeValue}>decrease value {counter}</button>
  </>
)
}

export default App;
