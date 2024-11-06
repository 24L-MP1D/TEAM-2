"use client";


import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ProductList } from "@/components/productList/productList";
import { CardContent } from "@/components/ui/card";

interface Product {
  index: null | undefined;
  uploadedPhotos: string[];
  _id: string;
  name: string;
  size: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [savedProductIds, setSavedProductIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true); 

  const handleSaveClick = (product: Product) => {
    const saved = localStorage.getItem("savedProducts");
    const savedProducts: Product[] = saved ? JSON.parse(saved) : [];

    if (savedProducts.find((item) => item._id === product._id)) {
      const newProducts = savedProducts.filter(
        (item) => item._id !== product._id
      );
      localStorage.setItem("savedProducts", JSON.stringify(newProducts));
      updateSavedProductIds();
    } else {
      savedProducts.push(product);
      localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
      updateSavedProductIds();
    }
  };

  function updateSavedProductIds() {
    const saved = localStorage.getItem("savedProducts");
    const savedProducts: Product[] = saved ? JSON.parse(saved) : [];
    if (saved) {
      setSavedProductIds(savedProducts.map((item) => item._id));
    }
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
        setLoading(false); 
      } catch (err) {
        console.log(err); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:max-w-full md:max-w-96 mx-auto mb-20">
      {loading ?( 
        <div className="flex justify-center items-center h-screen">
          
          <svg
            className="animate-spin h-10 w-10 text-purple-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <span className="ml-2 text-black">Loading...</span>
        </div>
      ) : (
        <>
          {products?.length > 0 && (
            <Carousel className="w-full">
              <CarouselContent>
                {products?.map((product, index) => (
                  <CarouselItem key={product.index} id={`slide${index + 1}`}>
                    <div className="relative">
                      <CardContent className="flex items-center justify-center pt-6 pb-4">
                        <Image
                          key={product._id}
                          src={product.uploadedPhotos[0]}
                          alt={product.name}
                          width={1040}
                          height={446}
                          className="w-full h-[446px] object-cover rounded-xl relative"
                        />
                        <div className="absolute bottom-24 left-16">
                          <div className="absolute text-nowrap 28px">
                            {product.name}
                          </div>
                          <div className="absolute mt-6 font-bold text-3xl text-nowrap">
                            {product.price} ₮
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}

          <div className="grid lg:grid-cols-4 gap-x-5 gap-y-12 overflow-hidden mb-10 md:grid-cols-2 sm:grid-cols-1">
          {products?.slice(0,8).map((product,index) => (
              <Link href={`/product/${product._id}`} key={product._id}>
                <div
                  key={product._id}
                  className={`${
                    index === 6 || index === 7 ? "col-span-2 row-span-2 w-[508p]" : ""
                  }`}
                >
                  <div className="overflow-hidden relative h-[330px] rounded-xl">
                    <Image
                      src={product.uploadedPhotos[0]}
                      alt={product.name}
                      key={product._id}
                      width={100}
                      height={100}
                      className="relative transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover rounded-xl w-full"
                    />
                    <Heart
                      className="absolute top-2 right-2 z-10 cursor-pointer"
                      color={savedProductIds.includes(product._id) ? "black" : "gray"}
                      fill={savedProductIds.includes(product._id) ? "black" : "none"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSaveClick(product);
                      }}
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
          <ProductList />
        </>
      )}
    </div>
  );
}
