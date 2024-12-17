import React from 'react';

export const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Years of Experience */}
        <div className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-lg p-8 w-full md:w-1/3">
          <h1 className="text-[120px] font-bold leading-none">5</h1>
          <p className="mt-4 text-xl font-medium uppercase tracking-widest">
            Years of Experience
          </p>
          <p className="mt-2 text-sm">OLATAWURA</p>
        </div>

        {/* Right Side: About Me Content */}
        <div className="text-center md:text-left w-full md:w-2/3">
          {/* Section Title */}
          <p className="text-purple-600 font-semibold text-sm uppercase">
            About Me
          </p>
          <h2 className="text-4xl font-bold mt-4">
            Who is <span className="text-purple-600">Wura?</span>
          </h2>
          <p className="text-gray-600 mt-4">
           wura is a lady that is passoinate, hardworking , smart to provide seamless work for your service
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 mt-6">
            <div>
              <h3 className="text-purple-600 text-2xl font-bold">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-purple-600 text-2xl font-bold">50+</h3>
              <p className="text-gray-600">Student Trained</p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700"
            >
              <span className="material-icons">download</span>
              Download CV
            </a>
            <span className="text-gray-600 italic">Olatawura</span>
          </div>
        </div>
      </div>
    </section>
  );
};
