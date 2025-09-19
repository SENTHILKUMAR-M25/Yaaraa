import React from "react";
import Hero from "../Hero";
import { motion } from "framer-motion";
import Testimonials from "../Testimonials";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start faded and slightly down
      animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <Hero />
      <Testimonials />
    </motion.div>
  );
};

export default HomePage;
