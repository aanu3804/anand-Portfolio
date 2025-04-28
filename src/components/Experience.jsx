import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    "Reaidy.io - Software Developer Intern",
    "CureHouzz - Full Stack Intern",
    "ZenithZap - Web Developer",
    "SayHey - AI Platform Developer"
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="p-5 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow"
          >
            {item}
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
