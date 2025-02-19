import React, { useState, FC } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg px-4 font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 mx-3 text-indigo-500" />
        ) : (
          <ChevronDown className="w-5 h-5 mx-3 text-indigo-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pr-4 px-4 text-base text-gray-600">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs: FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How does PropTech Solutions help reduce operating costs?",
      answer: "Our platform uses predictive maintenance and energy optimization tools to reduce operating costs by up to 20%. By identifying inefficiencies and automating processes, we help you save money while maintaining high property standards.",
    },
    {
      question: "Can I manage multiple properties with PropTech Solutions?",
      answer: "Yes, our platform is designed to handle portfolios of any size. Whether you manage one building or hundreds, our tools scale to meet your needs.",
    },
    {
      question: "How does predictive maintenance work?",
      answer: "Our AI-driven system analyzes equipment performance data to predict potential failures before they occur. This allows you to schedule maintenance proactively, reducing downtime and repair costs.",
    },
    {
      question: "Is PropTech Solutions suitable for residential properties?",
      answer: "While our platform is optimized for commercial real estate, many of our tools, such as tenant management and energy optimization, can also benefit residential property managers.",
    },
    {
      question: "How secure is my data on PropTech Solutions?",
      answer: "We take data security seriously. Our platform uses 256-bit encryption and complies with industry standards like ISO 27001 to ensure your data is protected at all times.",
    },
    {
      question: "Can I integrate PropTech Solutions with other software?",
      answer: "Yes, our platform integrates seamlessly with popular property management, ERP, and CRM systems. We also offer a comprehensive API for custom integrations.",
    },
    {
      question: "What kind of support does PropTech Solutions offer?",
      answer: "We provide 24/7 support through email, chat, and phone. Our dedicated support team is always available to help you with any questions or issues.",
    },
    {
      question: "How do I get started with PropTech Solutions?",
      answer: "Getting started is easy! Simply sign up for a free trial, and our team will guide you through the onboarding process. You can start optimizing your properties in no time.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id='faqs'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get answers to the most common questions about our platform
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-base text-gray-600">
            Still have questions?{' '}
            <a
              href="#contact"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;