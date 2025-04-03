import React, { useContext } from "react";
import { NavigationDots, SocialMedia } from "../components";
import { ThemeContext } from "../Context/ThemeContext"; // Import ThemeContext

const AppWrap = (Component, idName, classNames) =>
  function HOC(props) { // Accept props properly
    const { darkMode } = useContext(ThemeContext); // ✅ Get darkMode inside the function

    return (
      <div id={idName} className={`app__container ${classNames} ${darkMode ? "dark" : "light"}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component {...props} /> {/* ✅ Correctly passing props */}
          <div className="copyright">
            <p className="p-text" style={{color:"gray", fontSize:"15px"}}>@2025 Abhishek</p>
            <p className="p-text"style={{color:"gray",fontSize:"15px"}}>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
