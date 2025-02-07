import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chai from './chai.jsx'
import App from './App.jsx'

function MyApp(){
  return (
  <h1>Created function</h1>
  )
}
/*
const reactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank',
  },
  children:'Click me to visit google',
}*/

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="Chai or code";
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
//  anotherElement
reactElement
)
