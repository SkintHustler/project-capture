import React, { useState } from "react";
import { motion } from "framer-motion";
import { fade } from "../animation";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div variants={fade} className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
