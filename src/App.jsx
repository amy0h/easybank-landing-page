import { useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import ChooseEasybank from './sections/ChooseEasybank/ChooseEasybank'
import LatestArticle from './sections/LatestArticle/LatestArticle'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <ChooseEasybank />
      <LatestArticle />
      <Footer />
    </div>
  )
}

export default App
