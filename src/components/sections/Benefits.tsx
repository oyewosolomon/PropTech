import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
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
    </div>
  );
};

export default BenefitsSection;