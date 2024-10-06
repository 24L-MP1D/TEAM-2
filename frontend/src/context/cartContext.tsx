// context/CartContext.tsx
'use client'
import { createContext, useState, ReactNode, useEffect } from "react";

interface Product {
    _id: string;
    name: string;
    price: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}
export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { }
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
const [products, setProducts]=useState([]);
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item._id !== id));
    };
    console.log(cart);

    // useEffect(() =>{
    //     fetch('http://localhost:4000/products')
    //         .then((response) => response.json())
    //         .then((data) => setCart((data))
    //  }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>

    )

};
