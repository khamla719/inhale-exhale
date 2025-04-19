'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: "Wellness Tips", slug: "wellness-tips" },
  { name: "Ingredient Deep-Dives", slug: "ingredients" },
  { name: "User Stories", slug: "user-stories" },
  { name: "Aromatherapy", slug: "aromatherapy" },
  { name: "Mindfulness", slug: "mindfulness" }
];

const featuredPost = {
  title: "The Science Behind Herbal Inhalation",
  excerpt: "Discover how the ancient practice of herbal inhalation combines with modern science to enhance wellness.",
  category: "Wellness Tips",
  date: "March 15, 2024",
  image: "/images/blog/featured-post.svg",
  slug: "science-behind-herbal-inhalation"
};

const blogPosts = [
  {
    title: "Understanding Lavender: Nature's Calming Agent",
    excerpt: "Deep dive into the properties and benefits of lavender in aromatherapy and wellness.",
    category: "Ingredient Deep-Dives",
    date: "March 12, 2024",
    image: "/images/blog/lavender-post.svg",
    slug: "understanding-lavender"
  },
  {
    title: "From Stress to Serenity: Sarah's Journey",
    excerpt: "How one user transformed her daily routine with herbal wellness practices.",
    category: "User Stories",
    date: "March 10, 2024",
    image: "/images/blog/user-story-post.svg",
    slug: "stress-to-serenity"
  },
  {
    title: "5 Breathing Techniques for Better Focus",
    excerpt: "Simple yet effective breathing exercises to enhance concentration and mental clarity.",
    category: "Wellness Tips",
    date: "March 8, 2024",
    image: "/images/blog/breathing-post.svg",
    slug: "breathing-techniques-focus"
  },
  {
    title: "The Power of Peppermint",
    excerpt: "Exploring the invigorating properties of peppermint in herbal wellness.",
    category: "Ingredient Deep-Dives",
    date: "March 5, 2024",
    image: "/images/blog/peppermint-post.svg",
    slug: "power-of-peppermint"
  },
  {
    title: "Mindful Moments: A Beginner's Guide",
    excerpt: "Start your mindfulness journey with these simple daily practices.",
    category: "Mindfulness",
    date: "March 3, 2024",
    image: "/images/blog/mindful-post.svg",
    slug: "mindful-moments-guide"
  }
];

export default function Blog() {
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
              Our Blog
            </h1>
            <p className="text-text-medium text-lg md:text-xl max-w-2xl mx-auto">
              Explore wellness tips, ingredient insights, and inspiring stories from our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-2 rounded-full bg-white shadow-subtle hover:shadow-elevated transition-shadow duration-300 text-text-medium hover:text-primary-500"
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary-500 font-medium mb-2">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-text-dark mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-medium text-lg mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <span className="text-text-light">
                    {featuredPost.date}
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary-500 font-medium text-sm mb-2 block">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-xl text-text-dark mb-3">
                      {post.title}
                    </h3>
                    <p className="text-text-medium mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-text-light text-sm">
                      {post.date}
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 