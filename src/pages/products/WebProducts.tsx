import React from 'react';
import ProductCard from '../../components/products/ProductCard';
import { Product } from '../../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Antivirus Suite',
    description: 'Complete digital security solution',
    price: 149.99,
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'SEO Optimization Package',
    description: 'Comprehensive SEO service bundle',
    price: 999.99,
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Add more products...
];

const WebProducts = () => {
  return (
    <div className="bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-pure-white mb-8">Web Development Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebProducts;