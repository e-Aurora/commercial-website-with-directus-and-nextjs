"use client";

import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext<CartContextType>({cartItems: [], addToCart: () => {}, removeFromCart: () => {}, clearCart: () => {}, getCartTotal: () => 0})

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
};

type CartProviderProps = {
  children: React.ReactNode;
}

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export function CartProvider({ children }: CartProviderProps) {
  const isBrowser = typeof window !== 'undefined';

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (isBrowser) {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
  });

  const addToCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCartItems([...cartItems, { ...item }]);
    }
  };

  const removeFromCart = (item: CartItem) => {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  useEffect(() => {
    if (isBrowser) {
      const data = localStorage.getItem('cartItems');
      if (data) {
        setCartItems(JSON.parse(data));
      }
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [isBrowser,cartItems]);

  return (
    <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );

};