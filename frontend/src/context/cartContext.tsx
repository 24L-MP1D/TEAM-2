// // context/CartContext.tsx

// import { createContext, useState, ReactNode } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
// }

// export const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item._id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
