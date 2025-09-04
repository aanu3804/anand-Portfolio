import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // ✨

const experiences = [
  {
    company: "Ccube Netvix",
    role: "Chief Technology Officer",
    period: "Aug 2025 - Present",
    
  },
  {
    company: "Reaidy.io",
    role: "Software Developer Intern",
    period: "Aug 2024 - June 2025",
  
    description: "Built Advanced proxy Detection using React and Face-api.js models.This is used for Detecting the proxy in Online interviews. This Feature is used by more than 1000+ users in Reaidy.io ",
  },
  {
    company: "SayHey",
    role: "AI Model Developer",
    period: "May 2025 - August 2025",
    description: "Built AI-Driven Model to Diarize,Summarize,Recommendation and Rating to the Listener from the conversation.", 
  },
  {
    company: "ZenithZap",
    role: "Web Developer and AI Chatbot Develper",
    period: "May 2025 - August 2025",
    description: "Designed interactive websites and landing pages with animations to the Power-Induced Beverages company ZenithZap.",
  },
  {

    company: "CureHouzz",
    role: "Full Stack Intern",
    period: "Jan 2025 - Apr 2025",
    description: "Developed Full stack Website for real-time healthcare platforms and optimized APIs.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-4 py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
      >
        Experience
      </motion.h2>

      {/* Timeline Line */}
      <div className="relative w-full max-w-5xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-400 opacity-20"></div>

        <div className="flex flex-col space-y-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} w-full group`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-white group-hover:scale-125 transition"></div>

                {/* Card */}
                <div
                  data-tooltip-id={`tooltip-${index}`}
                  data-tooltip-content={exp.description}
                  className={`w-[calc(50%-2rem)] p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-cyan-400/30 hover:shadow-cyan-400/30 hover:scale-105 transform transition cursor-pointer`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <FaBriefcase className="text-cyan-400 text-2xl" />
                    <h3 className="text-xl md:text-2xl font-semibold">{exp.company}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{exp.role}</p>
                  <p className="text-gray-400 text-sm mt-2">{exp.period}</p>
                </div>

                {/* Tooltip for each */}
                <Tooltip id={`tooltip-${index}`} className="!bg-cyan-500 !text-black !text-sm !font-semibold" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
