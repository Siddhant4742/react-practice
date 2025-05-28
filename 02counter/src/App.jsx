import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter] = useState(5);

  // let counter=5;
  const addvalue = () => {
    counter = counter + 1;
    if(counter>20)counter=20;
    setCounter(counter);
    console.log(counter, Math.random());
    // return counter;
  }
  const subtractValue = () => {
    counter = counter - 1;
    if(counter<0)counter=0; 
    setCounter(counter);
    console.log(counter, Math.random());
    // return counter;
  }
  return (
    <>
    <h1>react and vite</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={subtractValue}>Subtract value: {counter}</button>
    </>
  )
}

export default App
