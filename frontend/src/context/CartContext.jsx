import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  /* 🔒 Persist cart */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* 🔒 LOCK BACKGROUND SCROLL WHEN CART IS OPEN */
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  /* 🛒 ADD TO CART */
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product._id);

      if (existing) {
        return prev.map((item) =>
          item.id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.images?.[0],
          quantity,
        },
      ];
    });

    // ✅ OPEN CART DRAWER
    setIsCartOpen(true);
  };

  /* ❌ REMOVE ITEM */
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* 🔄 UPDATE QUANTITY */
  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  /* 🔢 TOTAL ITEM COUNT */
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
