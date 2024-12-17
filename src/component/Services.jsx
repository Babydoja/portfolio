import React from 'react';

export const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description:
        'Crafting intuitive and visually appealing user interfaces and experiences.',
      icon: '🎨',
    },
    {
      title: 'Application Design',
      description:
        'Designing seamless applications tailored to your specific needs.',
      icon: '🛠️',
    },
    {
      title: 'Website Design',
      description:
        'Building responsive and attractive websites for your business.',
      icon: '🌐',
    },
  ];

  return (
    <section
      id="services"
      className="  py-16 px-6 text-center"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-purple-600">Services</h2>
        <p className="text-black mt-4 max-w-xl mx-auto">
          My specialization ensures high-quality work across various areas.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-white bg-purple-600  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-white text-5xl mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-white mt-2">{service.description}</p>
              {/* Learn More */}
              <a
                href="#"
                className="text-white font-bold mt-4 inline-block hover:underline hover:text-purple-300"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
