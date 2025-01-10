import React from 'react';
import ProductCard from '../../components/products/ProductCard';
import { Product } from '../../types/product';

const products: Product[] = [
  {
    id: '1',
    name: 'Professional Tool Set',
    description: 'Complete set of construction tools for professionals',
    price: 599.99,
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1581147036324-c1a98e404e79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Safety Equipment Bundle',
    description: 'Full PPE kit including helmet, vest, and boots',
    price: 299.99,
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1542766788-a2f588f447ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Add more products...
];

const LabourProducts = () => {
  return (
    <div className="bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-pure-white mb-8">Construction & Labour Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabourProducts;