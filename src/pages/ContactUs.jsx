import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./../animation";
const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Contact US</h1>
    </motion.div>
  );
};

export default ContactUs;
