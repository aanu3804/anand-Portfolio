import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiPython, SiTensorflow } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      name: "CureHouzz - Healthcare Platform",
      link: "https://cure-houzz.vercel.app/",
      github: "#",
      description: "A modern healthcare platform connecting patients and doctors with real-time consultations and health monitoring.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "FullStack"
    },
    {
      name: "Advanced Proxy Detection",
      link: "https://advanced-proxy-detection-reaidyio.vercel.app/",
      github: "#",
      description: "An advanced proxy detection system using face-api.min.js and JavaScript, achieving accurate detection of dual voices, unauthorized appearances, and eye gaze patterns.",
      technologies: ["JavaScript", "Face-API", "WebRTC", "AI/ML"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c8aa70eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "AI/ML"
    },
    {
      name: "Serene - Emotional Support Chatbot",
      link: "https://serene-pied.vercel.app/",
      github: "#",
      description: "Serene is an Emotional Support chatbot which helps users to act as an emotional supporter. It has features like Text Input, Voice Input and Output will be in the form of Both Text and Voice.",
      technologies: ["React", "OpenAI", "Speech Recognition", "Web Speech API"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f8aa5e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "AI/ML"
    },
    {
      name: "ZenithZap Beverages",
      link: "https://zenithzap.vercel.app/",
      github: "https://github.com/aanu3804/ZenithZap",
      description: "Dynamic product website for a beverage brand with product pages, team info for more than 1000+ users.",
      technologies: ["React", "Typescript", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "FullStack"
    },
    {
      name: "FitMetrixa – AI Fitness Assistant",
      link: "#",
      github: "https://github.com/aanu3804/Fitmetrixa",
      description: "AI-powered gym website providing fitness advice and tracking using ML-driven recommendations.It offers 5+ services to the users",
      technologies: ["React.js" ,"Flask", "Python", "Groq API", "node.js", "Express.js"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "FullStack + AI/ML"
    },
    {
      name: "SayHey – Conversation Summarizer",
      link: "https://huggingface.co/spaces/aanu3804/SayHey_Project-1",
      github: "hhttps://huggingface.co/spaces/aanu3804/SayHey_Project-1/tree/main",
      description: "Captures user audio, generates summaries, and analyzes emotions for therapy-like sessions. it involves 4 steps which is Diarization,STT,Summarizatio ,Progress tracking and recommendation.",
      technologies: ["FastAPI", "Python", "Groq API", "Whisper", "Gradio (Hugging face UI)"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "AI/ML"
    },
    
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getTechnologyIcon = (tech) => {
    const icons = {
      "React": <SiReact className="text-blue-400" />,
      "JavaScript": <SiJavascript className="text-yellow-400" />,
      "Node.js": <SiNodedotjs className="text-green-400" />,
      "Python": <SiPython className="text-blue-500" />,
      "AI/ML": <SiTensorflow className="text-orange-400" />,
    };
    return icons[tech] || <SiReact className="text-gray-400" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore my latest work showcasing innovative solutions and cutting-edge technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl relative z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback: Project Name when image fails */}
                <div 
                  className="hidden w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center text-center p-4"
                  style={{ display: 'none' }}
                >
                  <div className="text-white">
                    <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                    <p className="text-sm text-gray-200">{project.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md flex items-center gap-1"
                    >
                      {getTechnologyIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 relative z-20">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <FiEye className="text-sm" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <FiGithub className="text-sm" />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16 relative z-10"
      >
        <a
          href="https://github.com/aanu3804"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <FiGithub className="text-xl" />
          View More Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
