// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, count: item.count + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, count: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
//   };
//   const updateCount = (id, count) => {
//     setCartItems((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, count: Math.max(count, 1) } : item
//       )
//     );
//   };
//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateCount, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);












import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!product || !product.id) return; 

    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateCount = (id, count) => {
    setCartItems((prevCart) =>
      count <= 0
        ? prevCart.filter((item) => item.id !== id)
        : prevCart.map((item) =>
            item.id === id ? { ...item, count } : item
          )
    );
  };
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
