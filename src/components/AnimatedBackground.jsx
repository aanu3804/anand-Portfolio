import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="w-[140%] h-[140%] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradientBlur"></div>
    </div>
  );
};

export default AnimatedBackground;
