import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Delivery from './Components/Delivery'
import Menu from './Components/Menu'
import Customer from './Components/Customer'
function App() {


  return (
    <> 
      <Header/>
      <Hero/>
      <About/>
      <Delivery/>
      <Menu/>
      <Customer/>
    </>
  )
}

export default App
