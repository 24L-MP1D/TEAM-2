"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
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
    <div className="max-w-[1040px]">
      {products.length > 0 && (
        <div className="carousel relative pt-[56px]">
          {products.map((product, index) => (
            <div
              key={product._id}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <Image
                src={product.images}
                alt={product.productName}
                width={1040}
                height={446}
                className="w-full h-[446px] object-cover rounded-xl"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? products.length : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index + 2 > products.length ? 1 : index + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-4 gap-x-5 gap-y-12 overflow-hidden">
        {products.slice(1).map((product, index) => (
          <div
            key={product._id}
            className={`${
              index === 6 || index === 7 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <div className="overflow-hidden relative  h-[330px] rounded-xl">
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
