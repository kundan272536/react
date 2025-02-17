import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const myObj={
    name:"Kundan",
    age:12,
  }
  let newArr=[1,4,5];
  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 text-black mb-4'>Tailwind</h1>
      <Card username="Chai or code" someObj={myObj} arry={newArr} btnText="Click me"/>
    </>
  )
}

export default App
