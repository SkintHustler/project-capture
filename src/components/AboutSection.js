import React from "react";
import home1 from "../img/home1.png";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
//Styled
import { About, Description, Image, Hide } from "../styles";
import Wave from "./Wave";

const AboustSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams </span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboustSection;
