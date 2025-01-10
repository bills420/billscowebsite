import React from 'react';
import { Product } from '../../types/product';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-matte-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-pure-white mb-2">{product.name}</h3>
        <p className="text-off-white mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-pure-white font-bold">${product.price}</span>
          <button className="bg-pure-white text-deep-black px-4 py-2 rounded-lg flex items-center hover:bg-off-white transition-colors">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;