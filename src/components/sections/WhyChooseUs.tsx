import React from 'react';
import { Settings, Users, Zap, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Settings size={24} />,
      title: "Predictive Maintenance",
      description: "Leverage AI-driven insights to predict and prevent equipment failures, reducing downtime and maintenance costs.",
      color: "bg-blue-500",
      hoverColor: "group-hover:bg-blue-600",
    },
    {
      icon: <Users size={24} />,
      title: "Tenant Management",
      description: "Streamline tenant interactions, automate lease management, and improve satisfaction with our intuitive platform.",
      color: "bg-indigo-500",
      hoverColor: "group-hover:bg-indigo-600",
    },
    {
      icon: <Zap size={24} />,
      title: "Energy Optimization",
      description: "Cut energy costs by up to 20% with smart energy management tools that optimize usage across your properties.",
      color: "bg-purple-500",
      hoverColor: "group-hover:bg-purple-600",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Data-Driven Insights",
      description: "Gain actionable insights with real-time analytics to make informed decisions and maximize property performance.",
      color: "bg-teal-500",
      hoverColor: "group-hover:bg-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="why-choose-us">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose PropTech Solutions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform empowers property managers and owners with cutting-edge tools to optimize operations, reduce costs, and enhance tenant satisfaction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="p-1">
                <div className={`${feature.color} ${feature.hoverColor} text-white p-5 rounded-t-lg transition-colors duration-300`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Reduce Operating Costs by 20%</h3>
            <p className="text-gray-600">Our platform optimizes resources and minimizes waste, saving you money.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Scalable for Any Property Size</h3>
            <p className="text-gray-600">From small buildings to large portfolios, we’ve got you covered.</p>
          </div>
        </div>
      </div>
        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 inline-flex items-center">
            Get Started
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;