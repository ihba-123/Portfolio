import React from 'react'
import {Navbar}  from './components';
import {About, Footer, Header, Skills, Testimonial, Works} from './container';
import './App.scss'
import FloatingBtn from './Floating icon/FloatingBtn';
import SplashCursor from './Animation/SplashCursor';
const App = () => {
  return (
    <div className='app'>
      <SplashCursor/>
      <FloatingBtn/>
      <Navbar/>
      <Header/>
      <About />
      <Works/>
      <Skills/>
      <Testimonial/>
      <Footer/>
      
    </div>
  )
}

export default App