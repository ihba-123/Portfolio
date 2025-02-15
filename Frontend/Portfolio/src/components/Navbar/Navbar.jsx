import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constant";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleLogoClick = () => {
    // Scroll to the element with id 'home'
    window.location.hash = '#home';
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img src={images.logo} alt="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}/>
      </div>
      <ul className="app__navbar-links">
        {["home",
        "about",
        "work",
        "skills",
        "testimonial",
        "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a className="app__flex" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            className="app__navbar-menu-mobile"
            initial={{ x: 300 }} // Start off-screen
            animate={{ x: 0 }}    // Animate to visible
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'About', 'content', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;