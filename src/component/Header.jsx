import React, { useState } from 'react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-purple-600 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-500">Wura.</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <a
              href="#home"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              My Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-purple-500 hover:border hover:border-purple-500 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
            >
              Testimonials
            </a>
          </li>
        </ul>

        {/* talk */}
        <div className='hidden'>
           <button className='hover:bg-purple-600  hover:text-white text-purple-500 border border-purple-500 rounded-full px-2 py-2 transition-all duration-300 ease-in-out'>Let talk</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="text-purple-500 focus:outline-none "
          >
          {isMobileMenuOpen ? <i className='pi pi-times'></i>:<i className='pi pi-align-justify'></i>}
           
          </button>
        </div>
      </div>

      

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-600 text-white">
          <ul className="space-y-4 text-center py-4">
            <li>
              <a
                href="#home"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                My Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={toggleMobileMenu}
                className="hover:text-purple-500 block hover:bg-gray-800 rounded-md py-2 transition-all duration-300 ease-in-out"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
