'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Product type definition
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Re-invigorate' | 'Calm' | 'Focus';
  image: string;
};

// Sample product data
const products: Product[] = [
  {
    id: '1',
    name: 'Calm Inhaler',
    description: 'A blend of lavender, chamomile, and vanilla for relaxation and stress relief.',
    price: 24.99,
    category: 'Calm',
    image: '/images/shop/calm-inhaler.svg'
  },
  {
    id: '2',
    name: 'Focus Inhaler',
    description: 'Peppermint, rosemary, and eucalyptus blend for enhanced concentration.',
    price: 24.99,
    category: 'Focus',
    image: '/images/shop/focus-inhaler.svg'
  },
  {
    id: '3',
    name: 'Re-invigorate Inhaler',
    description: 'Citrus, ginger, and mint blend for energy and vitality.',
    price: 24.99,
    category: 'Re-invigorate',
    image: '/images/shop/reinvigorate-inhaler.svg'
  }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = ['Re-invigorate', 'Calm', 'Focus'];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

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
              Shop Our Collection
            </h1>
            <p className="text-text-medium text-lg md:text-xl max-w-2xl mx-auto">
              Discover our range of natural herbal inhalers for every moment of your day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Grid with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <aside className="md:col-span-1">
              <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 shadow-subtle sticky top-24">
                <h2 className="font-serif text-2xl text-text-dark mb-6">Filter By</h2>
                <div className="space-y-4">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className={`w-full px-4 py-2 rounded-xl transition-all duration-300 ${
                        category === selectedCategory
                          ? 'bg-primary-500 text-white shadow-elevated'
                          : 'bg-white bg-opacity-50 hover:bg-opacity-100 text-text-medium shadow-subtle'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="md:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 shadow-subtle hover:shadow-elevated transition-all duration-300"
                      >
                        Quick View
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-text-dark mb-2">
                        {product.name}
                      </h3>
                      <p className="text-text-medium mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-text-dark font-medium">
                          ${product.price}
                        </span>
                        <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-subtle hover:shadow-elevated transition-all duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-elevated"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-text-dark mb-4">
                    {quickViewProduct.name}
                  </h3>
                  <p className="text-text-medium mb-6">
                    {quickViewProduct.description}
                  </p>
                  <div className="space-y-4">
                    <p className="text-text-dark text-xl font-medium">
                      ${quickViewProduct.price}
                    </p>
                    <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-subtle hover:shadow-elevated transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 