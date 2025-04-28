import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "CureHouzz - Healthcare Platform",
      link: "https://cure-houzz.vercel.app/",
      description: "A modern healthcare platform connecting patients and doctors with real-time consultations and health monitoring.",
    },
    {
      name: "Advanced Proxy Detection",
      link: "https://advanced-proxy-detection-reaidyio.vercel.app/",
      description: "An advanced proxy detection system using face-api.min.js and JavaScript, achieving accurate detection of dual voices, unauthorized appearances, and eye gaze patterns..",
    },
    {
      name: "Serene - Emotional Support Chatbot",
      link: "https://serene-pied.vercel.app/",
      description: "Serene is an Emotional Support chatbot Which helps users to act as an emotional supporter.It has features like Text Input, Voice Input and Outout will be in the form of Both Text and Voice .",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-5xl font-bold mb-14 text-center bg-gradient-to-r from-sky-400 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ${
              hoveredIndex === index ? "h-[300px]" : "h-[150px]"
            }`}
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project →
                </a>
              </div>

              {/* Show description only if hovered */}
              {hoveredIndex === index && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400">{project.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Learn More
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
