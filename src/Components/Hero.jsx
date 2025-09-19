// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import learningAnim from "../assets/RobotSaludando.json";
import Courses from "./Courses";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/courses"); // ✅ Navigates to Courses List page
  };

  return (
    <>
    <section
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url('https://mrwallpaper.com/images/hd/minimalist-best-laptop-for-coding-glt27d3cmfygaipy.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Left Section */}
        <div className="space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: "Libertinus Serif Display, system-ui" }}
          >
            Learn From <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Best Teachers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-lg mx-auto md:mx-0 text-gray-300 text-base sm:text-[25px]   "
             style={{ fontFamily: "Libertinus Serif Display" }}
          >
            Unlock your potential with world-class mentors, innovative courses,
            and hands-on learning experiences designed for the future.
          </motion.p>

          {/* Only Get Started Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <button
              onClick={handleGetStarted}
              className="px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-transform font-semibold"
               style={{ fontFamily: "Libertinus Serif Display" }}
            >
              🚀 Get Started
            </button>
          </motion.div>
        </div>

        {/* Right Section - Lottie Animation + Tagline */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1, 1.05, 1], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          className="relative flex flex-col items-center gap-6"
        >
          {/* Glow Background */}
          <div className="absolute w-[280px] sm:w-[400px] md:w-[560px] h-[280px] sm:h-[400px] md:h-[560px] rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl animate-pulse"></div>

          {/* Lottie */}
          <Lottie
            animationData={learningAnim}
            loop
            autoplay
            className="relative z-10 w-[260px] sm:w-[380px] md:w-[520px] h-[260px] sm:h-[380px] md:h-[520px]"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-white"
          >
            Learn · Earn · Expertise
          </motion.p>
        </motion.div>
      </div>
    
    </section>
      <Courses />
      </>
  );
};

export default HeroSection;
