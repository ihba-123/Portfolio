import React, { useContext } from 'react'
import {BsTwitter , BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { ThemeContext } from '../Context/ThemeContext'
function SocialMedia() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <a className={`app__social ${darkMode ? 'dark':'light'}`}>
      <a href='https://x.com/Abhishek8311212' target="_blank" rel="noopener noreferrer"  style={{cursor:"pointer"}}>
        <BsTwitter />
      </a>
      <a href="https://www.facebook.com/abhishek.bhatta.1023" target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
        <FaFacebookF />
      </a>
      <a href='https://www.instagram.com/abhibhatta1023/' target="_blank" rel="noopener noreferrer"  style={{cursor:"pointer"}}>
        <BsInstagram/>
      </a>
    </a>
  )
}

export default SocialMedia
