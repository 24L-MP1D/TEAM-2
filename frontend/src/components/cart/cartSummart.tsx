// // components/CategoryList.tsx

// import { useContext, useEffect, useState } from "react";
// import { Heart } from "lucide-react";
// import Image from "next/image";
// import { CartContext } from "@/context/CartContext"; // Import your CartContext

// interface Product {
//   _id: string;
//   name: string;
//   size: string;
//   images: string;
//   price: number;
// }

// export default function CategoryList() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { cart, addToCart } = useContext(CartContext); // Use context

//   const handleSaveClick = (product: Product) => {
//     addToCart(product); // Add to cart using context
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/products');
//         if (!response.ok) throw new Error("Failed to fetch products");
//         const data: Product[] = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="flex gap-5 pt-[52px] justify-between mx-auto">
//       <div className="grid lg:grid-cols-3 gap-x-5 gap-y-12 overflow-hidden sm:grid-cols-1 md:grid-cols-2">
//         {products.map((product) => (
//           <div key={product._id}>
//             <div className="overflow-hidden relative w-[244px] h-[331px] rounded-xl">
//               <Image
//                 src={product.images}
//                 alt={product.name}
//                 width={244}
//                 height={331}
//                 className="relative transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover rounded-xl w-full"
//               />
//               <Heart
//                 className="absolute top-2 right-2 z-10 cursor-pointer"
//                 color="gray"
//                 fill="none"
//                 onClick={() => handleSaveClick(product)}
//               />
//             </div>
//             <p className="text-[#000000] text-base font-normal pt-2">{product.name}</p>
//             <p className="text-[#000000] text-base font-bold pt-1">{product.price} ₮</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
