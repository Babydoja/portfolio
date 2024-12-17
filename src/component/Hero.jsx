import React from 'react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-purple-600 text-white h-screen flex items-center text-center relative"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hello There!
        </h1>
        {/* Subheading */}
        <p className="text-xl md:text-2xl mt-4 text-white">
          I’m Wura, a Web Developer and Designer dedicated to creating impactful, 
          user-friendly, and visually stunning digital experiences.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex justify-center">
          {/* Button 1 */}
          <a
            href="#contact"
            className="bg-purple-300 hover:border hover:border-purple-500 hover:bg-transparent hover:text-white text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Let’s Work Together
          </a>
          {/* Button 2 */}
          <a
            href="#projects"
            className="ml-4 border border-purple-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-purple-500 hover:text-black transition-all duration-300"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};
