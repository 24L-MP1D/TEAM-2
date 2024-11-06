"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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

    let updatedProducts;
    if (savedProducts.find((item) => item._id === product._id)) {
      updatedProducts = savedProducts.filter((item) => item._id !== product._id);
    } else {
      updatedProducts = [...savedProducts, product];
    }
    
    localStorage.setItem("savedProducts", JSON.stringify(updatedProducts));
    setSavedProductIds(updatedProducts.map((item) => item._id));
    updateWishlistCount(updatedProducts.length);  // Update wishlist count
  };

  const updateWishlistCount = (count: number) => {
    localStorage.setItem("wishlistCount", JSON.stringify(count));
    window.dispatchEvent(new Event("wishlistCountUpdated")); // Trigger update in header
  };

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
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="ml-2 text-black">Loading...</span>
        </div>
      ) : (
        <>
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={product._id} id={`slide${index + 1}`}>
                  <CardContent className="flex items-center justify-center pt-6 pb-4">
                    <Image src={product.uploadedPhotos[0]} alt={product.name} width={1040} height={446} className="w-full h-[446px] object-cover rounded-xl relative" />
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="grid lg:grid-cols-4 gap-x-5 gap-y-12 mb-10">
            {products.slice(0, 8).map((product, index) => (
              <Link href={`/product/${product._id}`} key={product._id}>
                <div className={`${index === 6 || index === 7 ? "col-span-2 row-span-2" : ""}`}>
                  <div className="overflow-hidden relative h-[330px] rounded-xl">
                    <Image
                      src={product.uploadedPhotos[0]}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover rounded-xl w-full"
                    />
                    <Heart
                      className="absolute top-2 right-2 cursor-pointer"
                      color={savedProductIds.includes(product._id) ? "black" : "gray"}
                      fill={savedProductIds.includes(product._id) ? "black" : "none"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSaveClick(product);
                      }}
                    />
                  </div>
                  <p className="text-black font-normal pt-2">{product.name}</p>
                  <p className="text-black font-bold pt-1">{product.price} ₮</p>
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
