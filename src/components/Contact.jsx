import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.subject.trim() || !formData.message.trim()) {
      setError("All fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSending(true);

    const emailParams = {
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "anandsai2004@gmail.com", // Replace with your receiving email
    };

    emailjs
      .send(
        "service_g75c4vv",
        "template_y66kwgv",
        emailParams,
        "TAaM-8S0e6GrGpLpS"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center px-6 py-20"
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
      <div className="flex flex-wrap gap-8 mb-16 justify-center">
        <motion.a
          href="https://www.linkedin.com/in/anand-sai-lattala-b2238b260"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg font-semibold shadow-lg transition duration-300"
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="mailto:anandsai2004@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-white text-lg font-semibold shadow-lg transition duration-300"
        >
          Email
        </motion.a>
        <motion.a
          href="tel:+919110388960"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg text-white text-lg font-semibold shadow-lg transition duration-300"
        >
          Phone
        </motion.a>
      </div>

      {/* Help Form */}
      <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-700">
        <h3 className="text-3xl font-bold text-center mb-6 text-cyan-400">Need Help or Have a Query?</h3>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
              placeholder="e.g. Collaboration idea"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Your Message</label>
            <textarea
              id="message"
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
              placeholder="What would you like to say?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition text-white"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Footer Note */}
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
