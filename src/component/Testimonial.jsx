import React from 'react';

export const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, TechCorp',
      testimonial:
        'Wura is a phenomenal web developer. Her attention to detail and ability to understand client needs have been critical to the success of our projects.',
      image: 'https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlb3xlbnwwfHwwfHx8MA%3D%3D', // Replace with actual client images
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Director, Creative Co.',
      testimonial:
        'I have worked with many developers in the past, but none as talented and efficient as Wura. The websites she designed have helped us boost our sales.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D', // Replace with actual client images
    },
    {
      name: 'Samuel Lee',
      title: 'Founder, Design Studios',
      testimonial:
        'Wura has a great eye for design and user experience. The work she did for our website was exactly what we needed and exceeded expectations.',
      image: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DtB4a1dFa3A7aCqgvRB5NXEqH3ZI-KoNXtqduWv982g=', // Replace with actual client images
    },
  ];

  return (
    <section id="testimonials" className="bg-purple-700 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-purple-300">What Clients Say</h2>
        <p className="text-purple-100 mt-4">Our clients love what we do!</p>

        {/* Testimonial Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-purple-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-80"
            >
              {/* Client Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-6"
              />
              {/* Client Name */}
              <h3 className="text-xl font-bold text-purple-200">{testimonial.name}</h3>
              <p className="text-purple-300 text-sm">{testimonial.title}</p>

              {/* Testimonial Text */}
              <p className="mt-4 text-purple-100">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
