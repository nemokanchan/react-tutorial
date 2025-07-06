import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter=15

  const addValue =() => {
    // counter=counter+1;
    setCounter(counter+1)
    console.log("clicked",counter);
    

  }

  
  const decValue = () => {
    // counter=counter-1;
    setCounter(counter - 1);
    console.log("clicked", counter);
  };
 
  return (
    <>
      <h1> CHAI aur React</h1>
      <h2>Counter Value:{counter} </h2>
      <br />
      <br />
      <button onClick ={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App
