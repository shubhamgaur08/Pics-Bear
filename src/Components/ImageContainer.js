import React from "react";
import { motion } from "framer-motion";
import "./ImageContainer.css";
  import CircularWithValueLabel from "./Progress"

const ImageContainer = ({
  isError,
  errorMessage,
  isLoading,
  hasImage,
  imageUrl,
  userPrompt,
  imageLoaded,
  setImageLoaded,
}) => {
  return (
    <>
      {isError ? (
        <motion.p
          initial={{ opacity: 0.5, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="errorMessage"
        >
          {errorMessage}
        </motion.p>
      ) : isLoading ? (
        <CircularWithValueLabel  />
      ) : hasImage ? (
        <motion.img
          
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="image"
          src={imageUrl}
          alt={userPrompt}
          onLoad={() => setImageLoaded(true)}
          style={imageLoaded ? {} : { display: "none" }}
        />
      ) : (
        <motion.img
          initial={{ opacity: 0.5, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="image"
          src={require("../assets/astronaut.jpg")}
          alt="Astronaut riding a horse"
          loading="eager"
        />
      )}
    </>
  );
};

export default ImageContainer;
