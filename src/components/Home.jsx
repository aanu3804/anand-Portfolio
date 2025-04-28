import React from "react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import AnimatedBackground from "./AnimatedBackground";


const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Particles */}
      {/*<AnimatedBackground /> */}


      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent opacity-30 animate-pulse"></div>

      {/* Main Content */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg mb-4"
      >
        Anand Sai Lattala
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-3xl font-medium text-gray-300 mb-6"
      >
        <TypeAnimation
          sequence={[
            "MERN Stack Engineer 🚀",
            1500,
            "Software Developer 💻",
            1500,
            "Tech Enthusiast 🔥",
            1500,
            "Problem Solver 🧠",
            1500,
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
        className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-gray-300 shadow-md"
      >
        Passionate about crafting innovative tech solutions that bridge real-world problems with clean code, cutting-edge AI, and impactful digital experiences.
      </motion.p>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-cyan-400 text-4xl animate-bounce hover:text-blue-500 transition">
          <BsChevronDoubleDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
