import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 400, 0);
  const translateY = Math.min(scrollY / 5, 50);

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent opacity-30 animate-pulse"></div>

      {/* Main Content with fade and move on scroll */}
      <motion.div
        style={{ opacity, transform: `translateY(-${translateY}px)` }}
        className="relative z-10 flex flex-col items-center justify-center -mt-20"
      >
        {/* Floating Profile Image with Glow Ring */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-8"
        >
          {/* Animated Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-cyan-400/30 animate-pulse blur-md"></div>
          </motion.div>

          {/* Actual Photo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-full p-2 bg-white/10 backdrop-blur-md border-2 border-cyan-400 shadow-lg overflow-hidden w-40 h-40 md:w-52 md:h-52 flex items-center justify-center"
          >
            <img
              src="/anand.jpeg"
              alt="Anand Sai Lattala"
              className="rounded-full object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg mb-4"
        >
          Anand Sai Lattala
        </motion.h1>

        {/* Typewriter Animation */}
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

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-gray-300 shadow-md mb-12"
        >
          Passionate about crafting innovative tech solutions that bridge real-world problems
          with clean code, cutting-edge AI, and impactful digital experiences.
        </motion.p>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, y: [0, 15, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
>
  <a
    href="#about"
    className="cursor-pointer text-cyan-400 text-4xl hover:text-blue-500 transition duration-300"
  >
    <BsChevronDoubleDown />
  </a>
</motion.div>

    </div>
  );
};

export default Home;
