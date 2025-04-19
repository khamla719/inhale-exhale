'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: "Remove Cap",
    description: "Gently twist and remove the protective cap from your inhaler.",
    icon: "/images/step1-remove.svg"
  },
  {
    id: 2,
    title: "Hold Inhaler",
    description: "Hold the inhaler comfortably between your thumb and fingers.",
    icon: "/images/step2-hold.svg"
  },
  {
    id: 3,
    title: "Breathe In",
    description: "Take a slow, deep breath through your nose, drawing in the natural herbal essence.",
    icon: "/images/step3-inhale.svg"
  },
  {
    id: 4,
    title: "Hold & Release",
    description: "Hold the breath for 3-5 seconds, then slowly exhale through your mouth.",
    icon: "/images/step4-exhale.svg"
  }
];

const sourcingSteps = [
  {
    title: "Ethical Sourcing",
    description: "We partner with sustainable farms that practice organic cultivation methods.",
    image: "/images/sourcing-farms.svg"
  },
  {
    title: "Quality Testing",
    description: "Each batch undergoes rigorous testing for purity and potency.",
    image: "/images/sourcing-lab.svg"
  },
  {
    title: "Careful Extraction",
    description: "Our proprietary extraction process preserves the full spectrum of beneficial compounds.",
    image: "/images/sourcing-extraction.svg"
  }
];

export default function HowItWorks() {
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
              How It Works
            </h1>
            <p className="text-text-medium text-lg md:text-xl max-w-2xl mx-auto">
              Experience the natural power of herbal wellness through our simple, effective delivery system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-bg-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-glassmorphic-bg backdrop-blur-md rounded-2xl p-6 shadow-glass"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 relative">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif text-text-dark text-center mb-16"
          >
            Our Sourcing Story
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sourcingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-elevated"
              >
                <div className="relative h-48">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-glassmorphic-bg backdrop-blur-md rounded-2xl p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to Experience Natural Wellness?
            </h2>
            <Link href="/shop">
              <button className="bg-white text-primary-500 px-8 py-3 rounded-full font-medium shadow-elevated hover:shadow-lg transition-shadow duration-300">
                Shop Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 