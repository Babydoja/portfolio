import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-black text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h4 className="text-2xl font-bold text-purple-400">About Us</h4>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            We provide top-notch solutions tailored to your needs. Stay connected with us for updates and insights.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-2xl font-bold text-purple-400">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="hover:text-purple-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

                {/* Social Media Section */}
                <div>
          <h4 className="text-2xl font-bold text-purple-400">Follow Us</h4>
          <p className="text-gray-300 mt-4 text-sm">
            Connect with us on our social media platforms.
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-2xl font-bold text-purple-400">Newsletter</h4>
          <p className="text-gray-300 mt-4 text-sm">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-black placeholder-gray-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-black font-bold py-2 rounded-md hover:bg-purple-400 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>


      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} wura. All rights reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li className="hover:text-purple-300">
              <a href="#terms">Terms of Service</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
