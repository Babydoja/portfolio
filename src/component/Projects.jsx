import React from 'react';
import img1 from '../assets/portfolio.png'
import img2 from '../assets/ecomerce.png'
import img3 from '../assets/taskmanager.png'
import img4 from '../assets/sport.png'
import img5 from '../assets/blog.png'
import img6 from '../assets/login.png'
export const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description:
        'A portfolio website showcasing my skills, projects, and work experience.',
      link: 'https://your-portfolio-link.com', // Replace with actual link
      image: img1, // Replace with actual project image
    },
    {
      title: 'E-commerce Website',
      description:
        'A fully functional e-commerce platform for buying and selling products online.',
      link: 'https://your-ecommerce-link.com', // Replace with actual link
      image: img2, // Replace with actual project image
    },
    {
      title: 'Task Management App',
      description:
        'A web app for managing tasks, deadlines, and collaboration within teams.',
      link: 'https://crudss-delta.vercel.app/', // Replace with actual link
      image: img3, // Replace with actual project image
    },
    {
      title: 'Sport Management App',
      description:
        'A web app for managing tasks, deadlines, and collaboration within teams.',
      link: 'https://reactsport-4198d.web.app/', // Replace with actual link
      image: img4, // Replace with actual project image
    },
    {
      title: 'Blog Management App',
      description:
        'A web app for creating blogs,add blogs,edit blog and delete blogs.',
      link: 'https://bloggs-iota.vercel.app/', // Replace with actual link
      image: img5, // Replace with actual project image
    },
    {
      title: 'Login Authentication',
      description:
        'A web app for managing tasks, deadlines, and collaboration within teams.',
      link: 'https://authfrontend-two.vercel.app/', // Replace with actual link
      image: img6, // Replace with actual project image
    },
  ];

  return (
    <section id="projects" className="bg-purple-700 text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-white">
          My Projects
        </h2>
        <p className="text-white text-center mt-4">
          Here are some of the projects I’ve worked on recently. Click on each project to explore further.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-purple-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="overflow-hidden mb-4 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-purple-200">{project.title}</h3>

              {/* Project Description */}
              <p className="text-purple-100 mt-2">{project.description}</p>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white font-bold hover:text-white hover:underline"
              >
                View Project → 
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
