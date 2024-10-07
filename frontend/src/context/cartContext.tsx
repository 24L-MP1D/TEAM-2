// context/CartContext.tsx
'use client'
import { useRouter } from "next/router";
import { createContext, useState, ReactNode, useEffect } from "react";

interface Product {
    _id: string,
    name: string,
    id: string,
    price: number,
    category: String,
    selectedColors: string[],
    uploadedPhotos: string[],
    selectedSizes: string[],
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
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState<Product[]>([]);
    const router = useRouter;



    // useEffect(() =>{
    //     fetch('http://localhost:4000/products')
    //         .then((response) => response.json())
    //         .then((data) => setCart((data))
    //  }, []);

    // const addItemToCart = async ({
    //     product,
    //      name, 
    //      price, 
    //      _id,
    //      selectedColors, 
    //      selectedSizes, 
    //      uploadedPhotos, 
    //      category.qty = 1
    // }) => {
    //     const item = {
    //         product,
    //      name, 
    //      price, 
    //      _id, 
    //      selectedColors,
    //       selectedSizes, 
    //       uploadedPhotos, 
    //       category, 
    //       qty = 1
    //     }
    //     const isItemExist = cart?.cartItem?.find((i) => i.product === item.product)
    //     let newCartItems;
    //     if (isItemExist) {
    //         newCartItems = cart?.cartItems?.map((i) => i.product === isItemExist.product ? item : i)
    //     } else {
    //         newCartItems= [...(cart?.cartItems) || [], item]
    //     }
    // }


    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item._id !== id));
    };
    console.log(cart);

;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>

    )

};
