import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99/month',
      features: [
        'Up to 10 properties',
        'Basic property management',
        'Predictive maintenance alerts',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$299/month',
      features: [
        'Up to 50 properties',
        'Advanced predictive maintenance',
        'Energy optimization tools',
        'API access',
        'Priority support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited properties',
        'Custom dashboards and reports',
        'Dedicated account manager',
        '24/7 priority support',
        'Onboarding and training',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id='pricing'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the plan that best fits your needs. Start small and scale as your portfolio grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500">✔</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;