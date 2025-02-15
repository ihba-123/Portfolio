import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import {urlFor , client} from '../../client'
import { AppWrap, MotionWrap } from "../../wrapper";
const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Dev </span>
        <br />
        means
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
            <p className="p-text" style={{ color: "gray" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
