import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <p className="text-lg md:text-xl mb-6 text-center max-w-3xl">
        I'm always open to discussing new opportunities, collaborations, or just having a friendly chat. Feel free to reach out through LinkedIn, Email, or Phone, and I'll get back to you as soon as possible!
      </p>

      {/* Contact buttons */}
      <div className="flex gap-8">
        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/anand-sai-lattala-b2238b260"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 255, 255, 0.4)" }}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-lg font-semibold"
        >
          LinkedIn
        </motion.a>

        {/* Email Button */}
        <motion.a
          href="mailto:anandsai2004@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(76, 175, 80, 0.4)" }}
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-lg font-semibold"
        >
          Email
        </motion.a>

        {/* Phone Button */}
        <motion.a
          href="tel:+919110388960"  // Replace with your actual phone number
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(255, 165, 0, 0.4)" }}
          className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-lg font-semibold"
        >
          Phone
        </motion.a>
      </div>

      {/* Optional: Add a Footer or Custom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-center text-sm text-gray-400"
      >
        <p>Feel free to explore more of my work and projects on the rest of my portfolio.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
