import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-blue-600 py-24" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Property Management?</h2>
            <p className="text-blue-100 mb-8">
              Get in touch with our team to discover how PropTech Solutions can optimize your commercial real estate operations.
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-400 placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-400 placeholder-blue-200 focus:outline-none focus:border-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-400 placeholder-blue-200 focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-400 placeholder-blue-200 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-blue-400 placeholder-blue-200 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-white">Email Us</h3>
                <p className="text-blue-100">support@proptechsolutions.com</p>
                <p className="text-blue-100">sales@proptechsolutions.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-white">Call Us</h3>
                <p className="text-blue-100">+1 (888) 123-4567</p>
                <p className="text-blue-100">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-white">Visit Us</h3>
                <p className="text-blue-100">456 Property Avenue</p>
                <p className="text-blue-100">San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;