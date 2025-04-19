'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sustainabilityPractices = [
  {
    title: "Sustainable Packaging",
    description: "Our inhalers are crafted from recyclable materials, and we use minimal packaging to reduce waste.",
    icon: "🌱"
  },
  {
    title: "Ethical Sourcing",
    description: "We work directly with small-scale organic farmers who practice sustainable agriculture.",
    icon: "🤝"
  },
  {
    title: "Zero Waste",
    description: "Our production process is designed to minimize waste, and we reuse or recycle all materials possible.",
    icon: "♻️"
  }
];

const teamValues = [
  {
    title: "Natural Wellness",
    description: "We believe in the power of nature to enhance well-being.",
  },
  {
    title: "Transparency",
    description: "We're open about our ingredients, processes, and practices.",
  },
  {
    title: "Innovation",
    description: "We continuously improve our products through research and feedback.",
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-text-dark mb-6">
              Our Story
            </h1>
            <p className="text-text-medium text-lg md:text-xl max-w-2xl mx-auto">
              Transforming traditional herbal wisdom into modern wellness solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/mission-herbs.svg"
                alt="Natural herbs and ingredients"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl text-text-dark">Our Mission</h2>
              <p className="text-text-medium text-lg">
                At Inhale-Exhale, we're on a mission to make the ancient wisdom of herbal wellness accessible to modern life. We believe that natural remedies shouldn't be complicated – they should seamlessly integrate into your daily routine.
              </p>
              <p className="text-text-medium text-lg">
                Through innovative delivery systems and carefully sourced ingredients, we're creating a new standard for natural wellness products that are both effective and convenient.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 bg-bg-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-glassmorphic-bg backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-glass"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-4xl text-text-dark">Founder's Story</h2>
                <p className="text-text-medium">
                  Our journey began when our founder, seeking natural alternatives to synthetic wellness products, discovered the untapped potential of traditional herbal remedies. Inspired by ancient practices and driven by modern science, we developed our proprietary herbal inhalers.
                </p>
                <p className="text-text-medium">
                  What started as a personal quest has grown into a mission to share these natural solutions with others who seek a more balanced, natural approach to wellness.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/founder-story.svg"
                  alt="Founder's journey illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl text-text-dark text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-elevated"
              >
                <h3 className="text-xl font-serif text-text-dark mb-4">{value.title}</h3>
                <p className="text-text-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl text-white text-center mb-12"
          >
            Sustainability Practices
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sustainabilityPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-glassmorphic-bg backdrop-blur-md rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{practice.icon}</div>
                <h3 className="text-xl font-serif text-white mb-4">{practice.title}</h3>
                <p className="text-white text-opacity-90">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 