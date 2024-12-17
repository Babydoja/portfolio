import React from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4h5r845', // Replace with your EmailJS Service ID
        'template_krmz5tw', // Replace with your EmailJS Template ID
        e.target,
        'jrAunNg9hQinVURjN' // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          // alert('Message sent successfully!');
          toast.success('Message sent successfully')
          e.target.reset();
        },
        (error) => {
          toast.success('Failed to send message. Please try again.')
          // alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className=" text-white py-16 px-6">
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Connect and Collaborate */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <i className="pi pi-comment text-6xl text-purple-500"></i>
          </div>
          <h3 className="text-3xl font-bold text-purple-500">Let’s Connect and Collaborate</h3>
          <p className="text-purple-500 mt-4">
            Got a question or want to work together? I'm just a message away. Reach out via phone or connect with me on my social media channels.
          </p>
          <div className="mt-6">
            {/* Phone Number */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <FaPhone className="text-xl text-purple-500 mr-3" />
              <span className="text-purple-500 font-bold text-lg">08083016392</span>
            </div>

            {/* Social Media Icons */}
            <div>
              {[
                { Icon: FaFacebookF, link: "https://facebook.com", label: "Babdydoja001" },
                { Icon: FaTwitter, link: "https://twitter.com", label: "babydoja" },
                { Icon: FaLinkedinIn, link: "https://linkedin.com", label: "Bolatito oladoja" },
                { Icon: FaInstagram, link: "https://instagram.com", label: "Babydoja001" },
              ].map(({ Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mb-4 text-purple-500 hover:text-purple-400 text-lg transition-all duration-300"
                >
                  <Icon className="text-xl text-purple-500 mr-3" />
                  <span className="font-bold">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white text-black p-6 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:bg-purple-400 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
