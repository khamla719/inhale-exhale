'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// FAQ type definition
type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How long does each inhaler last?",
    answer: "Each inhaler typically lasts for 2-3 months with regular daily use. The duration may vary depending on frequency of use and storage conditions."
  },
  {
    question: "Are your inhalers safe to use?",
    answer: "Yes, our inhalers are made with 100% natural, food-grade essential oils and herbs. However, if you have any specific allergies or concerns, please consult your healthcare provider before use."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us for a full refund or replacement."
  },
  {
    question: "How should I store my inhaler?",
    answer: "Store your inhaler in a cool, dry place away from direct sunlight. Avoid exposure to extreme temperatures to maintain the potency of the essential oils."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! Shipping times and costs vary by location. International shipping typically takes 7-14 business days."
  }
];

export default function Contact() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-text-dark mb-6">
            Get in Touch
          </h1>
          <p className="text-text-medium text-lg md:text-xl max-w-2xl mx-auto">
            Have questions about our products? We're here to help you breathe easier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 shadow-subtle"
          >
            <h2 className="font-serif text-3xl text-text-dark mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-text-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-subtle hover:shadow-elevated transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="font-serif text-3xl text-text-dark mb-6">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 backdrop-blur-lg rounded-xl overflow-hidden shadow-subtle"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white hover:bg-opacity-50 transition-all duration-300"
                >
                  <span className="font-medium text-text-dark">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeAccordion === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 py-4 text-text-medium border-t border-gray-100">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
} 