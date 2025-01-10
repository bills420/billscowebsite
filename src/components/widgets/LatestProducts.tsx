import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: "Premium Beat Package",
    price: 299,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Web Development Bundle",
    price: 4999,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Beauty Treatment Pack",
    price: 199,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

const LatestProducts = () => {
  return (
    <div className="bg-matte-black/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-pure-white">Latest Products</h3>
        <Link to="/shop" className="text-sm text-off-white hover:text-pure-white flex items-center">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <div className="space-y-3">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-3">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex-grow">
              <div className="text-sm text-pure-white">{product.name}</div>
              <div className="text-sm text-off-white">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;