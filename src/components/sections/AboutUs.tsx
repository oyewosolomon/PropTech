import React from "react";
import { motion } from "framer-motion";
import { Clock, Settings, Users, Globe } from "lucide-react";

const AboutUs = () => {
  // Statistics data
  const stats = [
    { id: 1, value: "10+", label: "Years of Experience", icon: <Clock className="h-8 w-8" /> },
    { id: 2, value: "500+", label: "Clients Worldwide", icon: <Globe className="h-8 w-8" /> },
    { id: 3, value: "24/7", label: "Expert Support", icon: <Settings className="h-8 w-8" /> },
    { id: 4, value: "100+", label: "Skilled Team Members", icon: <Users className="h-8 w-8" /> },
  ];

  // Timeline data
  const timeline = [
    { year: "2013", event: "Founded RoboTech Industries" },
    { year: "2015", event: "Launched First Collaborative Robot" },
    { year: "2018", event: "Expanded to International Markets" },
    { year: "2021", event: "Introduced AI-Powered Quality Control Systems" },
    { year: "2023", event: "Celebrated 10 Years of Innovation" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16" id="about">
       {/* <div className="py-16 bg-white"> */}
          <div className="container dark:bg-gray-800mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  At <strong>PropTech Solutions</strong>, we are revolutionizing the way commercial real estate is managed. Founded in 2015, our mission is to empower property managers and owners with cutting-edge technology that simplifies operations, reduces costs, and enhances tenant satisfaction.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  With over <strong>50 million square feet</strong> of property under management, we’ve proven that our platform delivers real results. Our team of experts is dedicated to helping you achieve your goals through predictive maintenance, tenant management, and energy optimization.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
                  Learn More
                </button>
              </div>
              <div className="flex justify-center">
                <img src="/images/team.jpg" alt="PropTech Solutions Team" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        {/* </div> */}
      <div className="container mx-auto px-6">
      

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
