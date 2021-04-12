import React from "react";
import AboustSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Faqsection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboustSection />
      <ServicesSection />
      <Faqsection />
    </motion.div>
  );
};

export default AboutUs;
