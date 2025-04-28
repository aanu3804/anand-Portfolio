import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase, SiExpress } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";


const skillsMain = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#f06529" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" />, level: 85 },
  { name: "JavaScript", icon: <FaJs size={40} color="#f0db4f" />, level: 80 },
  { name: "React", icon: <FaReact size={40} color="#61dafb" />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68a063" />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4db33d" />, level: 70 },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#38bdf8" />, level: 80 },
  { name: "Firebase", icon: <SiFirebase size={40} color="#ffcb2b" />, level: 65 },
  { name: "Express.js", icon: <SiExpress size={40} color="#ffffff" />, level: 70 },
  { name: "C", icon: <CgCPlusPlus size={40} color="#00599C" />, level: 90 },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" />, level: 90 },
  { name: "Java", icon: <FaJava size={40} color="#f89820" />, level: 60 },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden"
    >
      

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center relative z-10"
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {skillsMain.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={500}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#00ffff"
            >
              <motion.div
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px 10px rgba(0, 255, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-md transition-all duration-300 ease-in-out cursor-pointer min-w-[140px] min-h-[160px]"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <p className="mt-3 font-semibold">{skill.name}</p>

                {/* Progress Bar on Hover */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="w-full mt-4"
                  >
                    <div className="flex justify-between mb-1 text-sm px-1">
                      <span>Proficiency &nbsp;</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 backdrop-blur-md rounded-full h-2.5 border border-white/30">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ type: "spring", duration: 0.7 }}
                        className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2.5 rounded-full"
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
