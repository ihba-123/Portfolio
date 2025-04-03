import React from "react";
import { motion } from "framer-motion";
import "./Float.scss";

const FloatingBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Abhishek-bhatta-cv.pdf"; // Ensure the file is in the `public` folder
    link.download = "Abhishek-bhatta-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      className="floating-button"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -20, 10, 0], // Smooth bouncing effect
        transition: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
      }}
      onClick={handleDownload}
    >
      📄 <br /> See my <br /> CV!
    </motion.button>
  );
};

export default FloatingBtn;
