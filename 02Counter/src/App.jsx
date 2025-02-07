import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(10)
let addValue=()=>{
  if(counter<15){
  counter=counter+1;

  setCounter(counter);
    // return alert("You can not go up to 15")
  }
  console.log("Inside the function counter is ",counter);
}
let removeValue=()=>{
  if(counter>=1){
  counter=counter-1;
  setCounter(counter);

    // return alert("dskjfdshfj");
  }
}
  return (
    <>
      <h1>Chai or react</h1>
      <p>Counter value:{counter}</p>
      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
