import React from 'react';
import ProductCard from '../../components/products/ProductCard';
import { Product } from '../../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Warm Audio WA-47 Microphone',
    description: 'Professional tube condenser microphone',
    price: 899.99,
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Premium Beat Bundle',
    description: '50 exclusive beats with full rights',
    price: 499.99,
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Add more products...
];

const MusicProducts = () => {
  return (
    <div className="bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-pure-white mb-8">Music Production Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicProducts;