import React, { useState } from 'react';


export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'I specialize in UI/UX design, application design, and website development to provide comprehensive solutions.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on complexity but typically range from 2 to 8 weeks.',
    },
    {
      question: 'Do you offer post-launch support?',
      answer:
        'Yes, I provide ongoing support to ensure your project is successful even after launch.',
    },
    {
      question: 'Are you available for freelance work?',
      answer:
        'Yes, I provide ongoing support to ensure your project is successful even after launch.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-purple-700 text-white py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* FAQs Section */}
        <div>
          <h2 className="text-4xl font-bold text-purple-300 text-center md:text-left">
            Frequently Asked Questions
          </h2>
          <p className="text-purple-100 mt-4 text-center md:text-left">
            Find answers to some of the most common questions I receive.
          </p>

          {/* FAQ Items */}
          <div className="mt-10 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-purple-600 p-4 rounded-lg mb-4 shadow-lg transition-all duration-300 ${
                  activeIndex === index ? 'shadow-xl' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center font-bold text-purple-200 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl text-purple-300">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="text-purple-100 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* "Ask a Question" Section */}
        <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <i
              className={`pi pi-envelope text-purple-400 text-4xl mr-4`}
              aria-hidden="true"
            ></i>
            <h3 className="text-2xl font-bold text-purple-300">
              Do you have a different question?
            </h3>
          </div>
          <p className="text-purple-200 mt-4">
            Ask your question, and I’ll get back to you with quick answers.
          </p>
          <form className="mt-6">
            {/* Question Input */}
            <textarea
              className="w-full bg-purple-600 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              placeholder="Type your question here..."
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Submit Question
            </button>
          </form>
          <p className="text-purple-200 mt-4 text-sm">
            Or contact me directly at{' '}
            <a href="mailto:your.email@example.com" className="underline">
              oladojabolatito29@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
