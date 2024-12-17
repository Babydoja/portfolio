import React from 'react';

export const PriceTable = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$29 / month',
      features: [
        '1 Project',
        'Basic Support',
        'Responsive Design',
        'Access to Templates',
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
    },
    {
      name: 'Pro Plan',
      price: '$49 / month',
      features: [
        '5 Projects',
        'Priority Support',
        'Custom Designs',
        'SEO Optimization',
      ],
      buttonText: 'Get Started',
      buttonLink: '#contact',
    },
    {
      name: 'Enterprise Plan',
      price: '$99 / month',
      features: [
        'Unlimited Projects',
        '24/7 Support',
        'Advanced Analytics',
        'Dedicated Account Manager',
      ],
      buttonText: 'Contact Us',
      buttonLink: '#contact',
    },
  ];

  return (
    <section id="pricing" className=" text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-purple-600">Pricing Plans</h2>
        <p className="text-purple-600 mt-4">
          Choose a plan that fits your needs. Each plan includes top-quality service and support.
        </p>

        {/* Plans Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-purple-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-purple-200">{plan.name}</h3>
              {/* Plan Price */}
              <p className="text-3xl font-semibold text-purple-100 mt-4">{plan.price}</p>

              {/* Plan Features */}
              <ul className="text-left mt-6 text-purple-100 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-4 h-4 text-purple-300 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Plan Button */}
              <a
                href={plan.buttonLink}
                className="mt-6 inline-block bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-md transition-all duration-300"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
