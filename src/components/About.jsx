import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaBrain, FaEye, FaRocket } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiTensorflow } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "Web Development", icon: <FaCode className="text-blue-400" />, color: "from-blue-500 to-cyan-500" },
    { name: "Machine Learning", icon: <FaBrain className="text-purple-400" />, color: "from-purple-500 to-pink-500" },
    { name: "Computer Vision", icon: <FaEye className="text-green-400" />, color: "from-green-500 to-emerald-500" },
    { name: "AI Solutions", icon: <FaRocket className="text-orange-400" />, color: "from-orange-500 to-red-500" },
  ];

  const techStack = [
    { name: "MERN Stack", icon: <SiReact className="text-blue-400" /> },
    { name: "Python", icon: <SiPython className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Anand Sai Lattala 
              </h3>
              <p className="text-lg leading-8 text-gray-300 mb-6">
                A Final-year passionate Software Developer, focused on building modern web apps, AI tools, and efficient solutions to real-world problems.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                I have worked across multiple domains like Web Development, Machine Learning, and Computer Vision. Constantly learning, improving, and pushing my limits!
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/14YlzKfM5cRjqgv4X-VqXKFE6THdTW0sn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700"
              >
                <FaDownload className="group-hover:animate-bounce" />
                View Resume
              </a>
            </motion.div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-center text-white">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-300">Internship Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-300">Certifications</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
