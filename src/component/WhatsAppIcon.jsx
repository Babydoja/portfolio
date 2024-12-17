import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppIcon = () => {
  const phoneNumber = "+2348083016392";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-purple-800 text-white p-4 rounded-full shadow-lg hover:bg-purple-500 transition-all duration-300 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};
