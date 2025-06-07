import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // ✨

const educationData = [
  {
    institution: "Gitam University",
    degree: "Bachelor of Technology (B.Tech) Computer Science Engineering",
    period: "2022 - Present",
    CGPA:"8.02",
    description: "A comprehensive program that covers core computer science subjects, including algorithms, data structures, and machine learning.",
  },
  {
    institution: "Narayana Junior College ",
    degree: "Intermediate Education",
    period: "2020-2022",
    CGPA:"92.8%",
    description: "Completed Intermediate with a focus on Mathematics and Science, building a strong foundation in problem-solving and critical thinking.",
  },
  {
    institution: "Kendriya Vidyalaya No.2 SriVijaya Nagar ",
    degree: "Secondary School",
    period: "2020 ",
    CGPA:"86.2%",
    description: "Completed high school with a focus on Mathematics and Science, building a strong foundation in problem-solving and critical thinking.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-4 py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
      >
        Education
      </motion.h2>

      {/* Timeline Line */}
      <div className="relative w-full max-w-5xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-400 opacity-20"></div>

        <div className="flex flex-col space-y-20">
          {educationData.map((edu, index) => {
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
                  data-tooltip-content={edu.description}
                  className={`w-[calc(50%-2rem)] p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-cyan-400/30 hover:shadow-cyan-400/30 hover:scale-105 transform transition cursor-pointer`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <FaUniversity className="text-cyan-400 text-2xl" />
                    <h3 className="text-xl md:text-2xl font-semibold">{edu.institution}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{edu.degree}</p>
                  <p className="text-gray-300 text-lg">{edu.CGPA}</p>
                  <p className="text-gray-400 text-sm mt-2">{edu.period}</p>
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

export default Education;
