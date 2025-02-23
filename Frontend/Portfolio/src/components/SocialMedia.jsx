import React, { useContext } from 'react'
import {BsTwitter , BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { ThemeContext } from '../Context/ThemeContext'
function SocialMedia() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`app__social ${darkMode ? 'dark':'light'}`}>
      <div>
        <BsTwitter/>
      </div>
      <div>
        <FaFacebookF/>
      </div>
      <div>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default SocialMedia
