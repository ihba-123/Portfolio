import React from 'react'
import {Navbar}  from './components';
import {About, Footer, Header, Skills, Testimonial, Works} from './container';
import './App.scss'
import Cursor from './components/Cursor/Cursor';
const App = () => {
  return (
    <div className='app'>
      <Cursor/>
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