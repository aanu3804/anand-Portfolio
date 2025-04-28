import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    'Data Science for Engineers – NPTEL',
    'Python Data Structures – Coursera',
    'Full Stack Web Development Bootcamp – Udemy'
  ];

  return (
    <section id="certifications" className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-8 text-center"
      >
        Certifications
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="space-y-6 max-w-2xl w-full"
      >
        {certs.map((cert, index) => (
          <li key={index} className="bg-gray-800 p-6 rounded-lg shadow hover:bg-primary transition">
            {cert}
          </li>
        ))}
      </motion.ul>

    </section>
  );
};

export default Certifications;
