import React from 'react';
import ProductCard from '../../components/products/ProductCard';
import { Product } from '../../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Hair Care Set',
    description: 'Complete hair treatment and styling kit',
    price: 129.99,
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Facial Treatment Bundle',
    description: 'Professional-grade skincare products',
    price: 199.99,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Add more products...
];

const BeautificationProducts = () => {
  return (
    <div className="bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-pure-white mb-8">Beauty & Care Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeautificationProducts;