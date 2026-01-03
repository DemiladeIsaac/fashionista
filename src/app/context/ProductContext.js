"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product, size, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.text === product.text && item.size === size
      );

      if (existing) {
        return prevCart.map((item) =>
          item.text === product.text && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          size,
          quantity,
          priceValue: parseFloat(product.price.replace(/[^0-9.]/g, "")), // for math
        },
      ];
    });
  };

  const increaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        addToCart,
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProductContext must be used within ProductProvider");
  return context;
}
