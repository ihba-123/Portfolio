import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
const NavigationDots = ({ active }) => {
  const {darkMode , setDarkMode} = useContext(ThemeContext)
  return (
    <div className={`app__navigation ${darkMode ? 'dark':'light'}`}>
      {[
        "home",
        "about",
        "work",
        "skills",
        "testimonial",
        "contact",
      ].map((item,index) => (
        <a href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313bac" } : {}}
        />
                      
      ))}
    </div>
  );
};

export default NavigationDots