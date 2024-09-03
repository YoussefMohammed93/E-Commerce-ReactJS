import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [uniqueCartCount, setUniqueCartCount] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    setCartCount(
      savedCartItems.reduce((count, item) => count + item.quantity, 0)
    );
    setUniqueCartCount(savedCartItems.length);
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      updatedCartItems = [...cartItems, item];
    }
    updateCartState(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartState(updatedCartItems);
  };

  const updateCartState = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    setCartCount(
      updatedCartItems.reduce((count, item) => count + item.quantity, 0)
    );
    setUniqueCartCount(updatedCartItems.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        uniqueCartCount,
        setCartItems,
        addToCart,
        removeFromCart,
        setCartCount,
        setUniqueCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
