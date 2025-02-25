import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = ({ darkMode }) => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <h2 className="head-text">
        <span style={{ color: "gray" }}>I know that</span>
        <span> Good Dev </span>
        <br />
        <span style={{ color: "gray" }}>means</span>
        <span> Good Business </span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ color: "gray", fontSize: "15px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__about_bg"
);
