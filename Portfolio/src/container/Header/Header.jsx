import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { motion } from "framer-motion";
import { images } from "../../constant";
import "./Header.scss";
import RotatingText from "../../Animation/RotatingText";
import { AppWrap } from "../../wrapper";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      id=""
      className={`app__header app__flex ${darkMode ? "dark" : "light"}`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 ,color:"white"}}>
              <p className="p-text"  style={{color:"white"}} >Hello, I am</p>
              <h1 className="head-text" style={{color:"white"}}>Abhishek</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <RotatingText
              texts={["I", "AM","A", "GOOD", "PROGRAMMER", "RESEARCHER", "PROBLEM SOLVER", "LISTENER"]}
              mainClassName={
                "margin-left: 0.5rem; margin-right: 0.5rem; padding-left: 0.5rem; padding-right: 0.5rem; padding-left: 0.75rem; padding-right: 0.75rem; background-color: #cffafe; color: #000000; overflow: hidden; padding-top: 0.125rem; padding-bottom: 0.125rem; padding-top: 0.25rem; padding-bottom: 0.25rem; padding-top: 0.5rem; padding-bottom: 0.5rem; justify-content: center; border-radius: 0.5rem"
              }
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName={
                "overflow: hidden;padding-bottom: 0.25rem;"
              }
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.node, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
