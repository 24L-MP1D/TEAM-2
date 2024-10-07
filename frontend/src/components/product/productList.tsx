"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Products {
  uploadedPhotos: string[];
  _id: string;
  name: string;
  size: string;
  price: number;

}
export default function CategoryList() {
  const [products, setProducts] = useState<Products[]>([]);
  const [savedProducts, setSavedProducts] = useState<Set<string>>(new Set());

  const handleSaveClick = (id: string) => {
    setSavedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/products');
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  
  return (
    <div className="flex gap-5 pt-[52px] justify-between mx-auto ">

      <div className="grid lg:grid-cols-3 gap-x-5 gap-y-12 overflow-hidden sm:grid-cols-1 md:grid-cols-2 " >
        {
          products.map((product) => (
          <Link href={`/productdetails/?id=${product._id}`} className="relative">
            <div
              key={product._id}
            >
                <div className="overflow-hidden   w-[244px] h-[331px] rounded-xl">

                  <Image
                    src={product.uploadedPhotos[0]}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="relative transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover rounded-xl w-full"
                  />

                  <Heart
                    className="absolute top-2 right-2 z-10 cursor-pointer"
                    color={savedProducts.has(product._id) ? "black" : "gray"}
                    fill={savedProducts.has(product._id) ? "black" : "none"}
                    onClick={() => handleSaveClick(product._id)}
                  />

                </div>
          
              <p className="text-[#000000] text-base font-normal pt-2">
                {product.name}
              </p>

              <p className="text-[#000000] text-base font-bold pt-1">
                {product.price} ₮
              </p>

            </div>
                </Link> 

          ))}
      </div>

    </div>


  );
}
