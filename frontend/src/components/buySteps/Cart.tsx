"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PiTrashLight } from "react-icons/pi";
import numeral from "numeral";

export function Cart({ setVisible }: { setVisible: Dispatch<SetStateAction<number>> }) {
  
  interface Product {
    productId: string;
    productName: string[];
    productTag: string;
    uploadedPhotos: string[];
    productAddinfo: string;
    size: string[];
    qty: number;
    price: number;
  }

  const [products, setProducts] = useState<Product[]>([]);

  const addPieces = (index: number) => {
    const updatedProducts = [...products];
    if (updatedProducts[index]) {
      updatedProducts[index].qty++;
      setProducts(updatedProducts);
    }
  };

  const removePieces = (index: number) => {
    const updatedProducts = [...products];
    if (updatedProducts[index]?.qty > 1) {
      updatedProducts[index].qty--;
      setProducts(updatedProducts);
    }
  };

  const removeProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("savedProducts") || "[]");
    if (Array.isArray(existingCart)) {
      setProducts(existingCart);
    } else {
      console.warn("Expected an array in localStorage, resetting to empty array.");
      setProducts([]);
    }
  }, []);

  return (
    <div className="bg-white p-8 rounded-2xl mx-auto">
      <div className="w-[574px] flex flex-col gap-6 mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-black text-xl flex">
            1.Сагс &nbsp;
            <div className="text-[#71717A]">({products?.length || 0})</div>
          </div>

          {products?.map((product, index) => (
            product && (
              <div
                className="flex items-start gap-6 p-4 rounded-2xl border-[#ECEDF0] border-solid border-[1px]"
                key={product.productId}
              >
                <Image
                  src={product.uploadedPhotos?.[0] || "/default-image.jpg"} // Use placeholder if no image
                  width={100}
                  height={100}
                  alt={product.productId || "Product Image"}
                  className="w-[100px] h-[100px] rounded-2xl overflow-hidden text-[#000000]"
                />
                <div className="flex flex-1 flex-col gap-1">
                  <div className="text-base font-normal">
                    {product.productName?.[0] || "Unnamed Product"}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <Button
                        className="w-8 h-8 rounded-full border-solid border-[1px] border-black bg-transparent text-black text-lg hover:bg-slate-300"
                        onClick={() => removePieces(index)}
                        disabled={product.qty < 2}
                      >
                        -
                      </Button>
                      <span className="px-4 text-black">{product.qty || 0}</span>
                      <Button
                        className="w-8 h-8 rounded-full border-solid border-[1px] border-black bg-transparent text-black text-lg hover:bg-slate-300"
                        onClick={() => addPieces(index)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="font-bold text-base">
                      {numeral((product.price || 0) * (product.qty || 0)).format("0,0")}
                      &#8366;
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 flex justify-center items-center">
                  <PiTrashLight
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => removeProduct(index)}
                  />
                </div>
              </div>
            )
          ))}
          <div className="flex justify-between pb-6">
            <div className="text-lg font-normal">Нийт төлөх дүн:</div>
            <div className="font-bold text-xl">
              {numeral(
                products?.reduce(
                  (total, product) => total + (product.price || 0) * (product.qty || 0),
                  0
                )
              ).format("0,0")}
              &#8366;
            </div>
          </div>
        </div>
        <div className="h-[9] text-end">
          <Button variant={"default3"} onClick={() => setVisible(2)}>
            Худалдан авах
          </Button>
        </div>
      </div>
    </div>
  );
}
