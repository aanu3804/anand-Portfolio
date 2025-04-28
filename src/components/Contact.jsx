import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Contact Me
      </motion.h2>

      <p className="text-lg mb-6 text-center">
        Feel free to reach out via LinkedIn or Email.
      </p>

      <div className="flex gap-8">
        <motion.a
          href="https://www.linkedin.com/in/anand-sai-lattala-b2238b260"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-white font-semibold"
        >
          LinkedIn
        </motion.a>

        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg text-white font-semibold"
        >
          Email
        </motion.a>
      </div>

    </section>
  );
};

export default Contact;
