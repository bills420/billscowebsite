import React from 'react';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/products/ProductGrid';
import { Product } from '../types/product';

const categories = [
  'All',
  'Labour',
  'Beautification',
  'Web',
  'Music'
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Fetch products from Supabase
    const fetchProducts = async () => {
      try {
        // TODO: Implement product fetching
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-black py-16">
        <div className="container mx-auto px-6">
          <div className="text-pure-white">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-pure-white mb-8">Shop</h1>
        
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-pure-white text-deep-black'
                  : 'bg-matte-black text-pure-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Shop;