import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Delivery from './Components/Delivery'
import Menu from './Components/Menu'
import Customer from './Components/Customer'
import Faqs from'./Components/Faqs'
import Footer from "../src/Components/Footer"
function App() {


  return (
    <> 
      <Header/>
      <Hero/>
      <About/>
      <Delivery/>
      <Menu/>
      <Customer/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default App
