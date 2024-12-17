import React from 'react';

export const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Espam Formation University',
      year: '2020 - 2024',
      description:
        'Graduated with honors, focusing on web development, algorithms, and data structures.',
    },
    {
      degree: 'Master of Science in Web Design',
      institution: 'XYZ Design University',
      year: '2020 - 2022',
      description:
        'Advanced coursework in UI/UX design, front-end technologies, and responsive design.',
    },
  ];

  const workExperience = [
    {
      jobTitle: 'Frontend Developer',
      company: 'Parach ICT Academy',
      year: '2020 - Present',
      description:
        'Developing responsive websites and web applications using React and other modern front-end technologies.',
    },
    {
      jobTitle: 'Backend Developer',
      company: 'Parach ICT Academy',
      year: '2018 - 2020',
      description:
        'Designed websites, optimized user interfaces, and improved user experience for various clients.',
    },
  ];

  return (
    <section
      id="education"
      className=" text-white py-16 px-6"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-purple-600">
          My Education & Work Experience
        </h2>
        <p className=" text-purple-500 text-center mt-4">
          Here’s a look at both my educational background and professional
          work experience.
        </p>

        {/* Education and Work Experience Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-purple-600 p-6 rounded-lg shadow-lg mb-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl text-purple-400 mr-6">
                    <i className="pi pi-graduation-cap"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-200">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-300">{edu.institution}</p>
                    <p className="text-purple-100 text-sm">{edu.year}</p>
                  </div>
                </div>
                <p className="text-purple-100">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Work Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Work Experience
            </h3>
            {workExperience.map((work, index) => (
              <div
                key={index}
                className="bg-purple-600 p-6 rounded-lg shadow-lg mb-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl text-purple-400 mr-6">
                    <i className="pi pi-briefcase"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-200">
                      {work.jobTitle}
                    </h4>
                    <p className="text-purple-300">{work.company}</p>
                    <p className="text-purple-100 text-sm">{work.year}</p>
                  </div>
                </div>
                <p className="text-purple-100">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
