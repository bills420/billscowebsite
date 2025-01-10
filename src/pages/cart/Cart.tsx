import React from 'react';
import { useCart } from '../../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, removeFromCart, updateQuantity } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-deep-black py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-pure-white mb-4">Your Cart is Empty</h2>
          <Link 
            to="/products" 
            className="inline-block bg-pure-white text-deep-black px-6 py-2 rounded hover:bg-off-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-pure-white mb-8">Shopping Cart</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-matte-black p-4 rounded-lg flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-pure-white font-semibold">{item.name}</h3>
                  <p className="text-off-white">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <Minus className="h-4 w-4 text-pure-white" />
                  </button>
                  <span className="text-pure-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <Plus className="h-4 w-4 text-pure-white" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 p-2 hover:bg-gray-700 rounded"
                >
                  <Trash2 className="h-5 w-5 text-pure-white" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-matte-black p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold text-pure-white mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-off-white">
                <span>Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-off-white">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-700 pt-2 flex justify-between text-pure-white font-semibold">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-pure-white text-deep-black text-center py-2 rounded hover:bg-off-white transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;