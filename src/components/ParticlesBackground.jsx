import React from "react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground"; // Optional particle background

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Background Animation */}
      <ParticlesBackground />

      {/* Main Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-glow mb-4"
      >
        Anand Sai Lattala
      </motion.h1>

      {/* Typewriter Titles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl md:text-4xl font-semibold mb-6"
      >
        <TypeAnimation
          sequence={[
            "MERN Stack Engineer",
            2000,
            "Software Developer",
            2000,
            "Tech Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg md:text-xl max-w-3xl mx-auto px-4 opacity-80 leading-relaxed"
      >
        Passionate about building innovative tech solutions bridging real-world problems. 
        Focused on clean code, AI, and delivering impactful digital experiences.
      </motion.p>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-cyan-400 text-4xl hover:text-blue-500 transition-colors duration-300">
          <BsChevronDoubleDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
