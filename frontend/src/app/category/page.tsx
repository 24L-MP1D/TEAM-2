"use client";

import Searcharea from "@/components/layout/searchArea";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);
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
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex gap-5 pt-[52px] justify-between">
      <div>
        <div className="text-[#000000] text-base font-bold">Ангилал</div>
        {products.map((product,index)=>(
          <div className="flex items-center space-x-2 pt-4">
          <Checkbox id="terms" />
          <label
            className="text-[#09090B] font-medium text-sm"
          >
           {product.productName}
          </label>
        </div>

        ))}
        <div className="text-[#000000] text-base font-bold pt-12">Хэмжээ</div>
        {products.map((product,index)=>(
          <div className="flex items-center space-x-2 pt-4">
          <Checkbox id="terms" />
          <label
            className="text-[#09090B] font-medium text-sm"
          >
           {product.size}
          </label>
        </div>

        ))}

      </div>

      <div className="grid grid-cols-3 gap-x-5 gap-y-12 overflow-hidden ">
        {products.slice(1).map((product, index) => (
          <div
            key={product._id}
            
          >
            <div className="overflow-hidden relative  w-[244px] h-[331px] rounded-xl">
              <Image
                src={product.images}
                alt={product.productName}
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
              {product.description}
            </p>
            <p className="text-[#000000] text-base font-bold pt-1">
              {product.price} ₮
            </p>
          </div>
        ))}
      </div>

    </div>
      
    
  );
}
