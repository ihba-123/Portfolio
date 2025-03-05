import React from "react";
import { motion } from "framer-motion";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import "./Float.scss";
const FloatingBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = './CV.pdf'
    link.download = "Abhishek CV.pdf";
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
        x: [0, 0, -0, 0],
        y: [0, -40, 20, 0],
        transition: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        },
      }}
      onClick={handleDownload}
    >
      📄 <br/>See my 
      <br/>
       CV!
    </motion.button>
  );
};

export default FloatingBtn;
