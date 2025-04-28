import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center flex flex-col items-center gap-2">
      <p className="text-sm">&copy; {new Date().getFullYear()} Anand Sai Lattala. All Rights Reserved.</p>

      <div className="flex gap-6">
        <a 
          href="https://github.com/aanu3804" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/anand-sai-lattala-b2238b260" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
