import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.product.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.product.price
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
        total: state.total + action.product.price
      };

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.productId);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
        total: state.items.reduce((total, item) => {
          const quantity = item.id === action.productId ? action.quantity : item.quantity;
          return total + item.price * quantity;
        }, 0)
      };

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const { items, total } = JSON.parse(savedCart);
      dispatch({ type: 'RESTORE_CART', items, total });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};