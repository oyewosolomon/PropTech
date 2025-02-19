import React from 'react';
import { UserCheck, Home, PieChart, Settings } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserCheck size={28} />,
      title: "Onboard Your Properties",
      description: "Easily integrate your properties into our platform with a seamless onboarding process.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      number: "01",
    },
    {
      icon: <Home size={28} />,
      title: "Connect Tenant Data",
      description: "Sync tenant information, lease agreements, and maintenance requests in one place.",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      number: "02",
    },
    {
      icon: <PieChart size={28} />,
      title: "Analyze Property Performance",
      description: "Gain real-time insights into energy usage, maintenance needs, and tenant satisfaction.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      number: "03",
    },
    {
      icon: <Settings size={28} />,
      title: "Optimize Operations",
      description: "Use predictive analytics to reduce costs, improve efficiency, and enhance tenant experiences.",
      color: "bg-teal-100",
      iconColor: "text-teal-600",
      number: "04",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>

        {/* Content Container */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How PropTech Solutions Works
            </h2>
            <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto text-lg">
              Our platform simplifies property management with a seamless, four-step process designed to optimize your operations.
            </p>
          </div>

          {/* Connected Steps */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 hidden md:block" aria-hidden="true"></div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`rounded-xl ${step.color} p-8 h-full transition-all duration-300 hover:shadow-lg`}>
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
                      <div className={`${step.iconColor} ${step.color} rounded-full w-16 h-16 flex items-center justify-center relative z-10`}>
                        {step.icon}
                      </div>
                    </div>

                    <div className="pt-12 text-center">
                      <span className="text-4xl font-bold text-gray-600">{step.number}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-2">{step.title}</h3>
                      <p className="text-gray-600 mt-3">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition duration-200">
              Learn more about our platform
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;