import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-white text-2xl font-bold">Anand Sai Lattala</h1>

      <ul className="flex gap-8 text-white font-semibold text-lg">
        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
        <li><a href="#certifications" className="hover:text-blue-400 transition">Certifications</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
