import React from "react";
import "./GenerateImageHeading.css";
import { motion } from "framer-motion";

function GenerateImageHeading() {
  return (
    <>
    
      <img className="logo" src={require("../assets/logo.png")}></img>
    
    
    <motion.h2
      initial={{ opacity: 0.5, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="generateImageHeading"
    >
      Generate An Image
    </motion.h2>
    
    </>
  );
}

export default GenerateImageHeading;
