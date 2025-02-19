import React, { useState } from 'react';
import { Home, Settings, Users, Zap, PieChart, Check } from 'lucide-react';
import { SiSalesforce, SiSap, SiOracle, SiZendesk } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <Home size={20} />,
      title: "Property Management",
      features: [
        "Centralized dashboard for all properties",
        "Automated lease management",
        "Real-time maintenance tracking",
        "Tenant communication portal",
        "Customizable reporting tools",
      ],
      image: "/images/dash.webp",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Settings size={20} />,
      title: "Predictive Maintenance",
      features: [
        "AI-driven maintenance predictions",
        "Reduced downtime and costs",
        "Automated work order generation",
        "Equipment health monitoring",
        "Historical performance analysis",
      ],
      image: "/images/dash.webp",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Users size={20} />,
      title: "Tenant Management",
      features: [
        "Streamlined tenant onboarding",
        "Automated rent collection",
        "Tenant satisfaction surveys",
        "Lease renewal reminders",
        "24/7 tenant support portal",
      ],
      image: "/images/dash.webp",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: <Zap size={20} />,
      title: "Energy Optimization",
      features: [
        "Smart energy usage tracking",
        "Cost reduction by up to 20%",
        "Real-time energy consumption data",
        "Automated energy-saving recommendations",
        "Integration with smart building systems",
      ],
      image: "/images/dash.webp",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id='features'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Property Management
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how PropTech Solutions empowers you to optimize operations, reduce costs, and enhance tenant satisfaction.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className="max-w-6xl mx-auto">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${
                activeTab === index ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Feature Image */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tab.color} opacity-70 z-10`}></div>
                    <img
                      src={tab.image}
                      alt={`${tab.title} visualization`}
                      className="w-full h-full object-cover relative"
                      style={{ minHeight: '320px' }}
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                      <h3 className="text-white text-3xl font-bold mb-4 text-shadow">{tab.title}</h3>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                        <span className="text-white text-sm">
                          Trusted by property managers worldwide
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Capabilities</h4>
                    <ul className="space-y-4">
                      {tab.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-1 flex-shrink-0 bg-green-100 text-green-600 rounded-full p-1">
                            <Check size={16} />
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 inline-flex items-center">
                        Learn More About {tab.title}
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;