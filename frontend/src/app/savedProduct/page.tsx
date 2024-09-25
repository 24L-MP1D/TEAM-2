"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardData {
  title: string;
  price: string;
}

// Эхний card-ийн өгөгдөл
const cardData: CardData = {
  title: "Chunky Glyph Tee",
  price: "120,000₮",
};

export default function Save() {
  // Хартны төлөвийг удирдах state
  const [isFilled, setIsFilled] = useState(false);

  // Хартны товчлуур дарсан үед гүйцэтгэх үйлдэл
  const handleHeartClick = () => {
    setIsFilled((prev) => !prev);

    // Card-ыг анимацины дараа устгана
    setTimeout(() => {
      // Here you can implement card removal logic if needed
    }, 700); // Анимацийн хугацаатай тохируулах
  };

  return (
    <div className="flex flex-col gap-4 items-center pt-36 h-[1000px]">
      <div className="mr-[420px]">
        <h1 className="font-bold text-xl leading-7">
          Хадгалсан бараа <span className="text-zinc-600 font-medium">(1)</span>
        </h1>
      </div>
      <div className="flex flex-col gap-4 max-w-[622px] w-full">
        <div
          className={`flex gap-6 p-4 h-[132px] rounded-2xl border border-gray-200 duration-700 overflow-hidden bg-white ${
            isFilled ? "opacity-0 h-0" : "opacity-100 h-[132px]"
          }`}
          style={{
            transition: "height 0.7s ease-out, opacity 0.7s ease-out",
          }}
        >
          <div>
            <Image
              src="/image.png"
              alt={cardData.title}
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-xl"
            />
          </div>
          <div className="flex flex-col w-[402px]">
            <div className="gap-1 text-black">
              <h1 className="font-normal text-base leading-6">{cardData.title}</h1>
              <p className="font-bold text-sm leading-5">{cardData.price}</p>
            </div>
            <div>
              <Button className="mt-2 mb-4 w-20 h-7 bg-blue-600 rounded-[14px] px-3 py-1">
                <p className="font-medium text-sm leading-5 text-white">Сагслах</p>
              </Button>
            </div>
          </div>
          <div>
            <button
              aria-label="Save"
              onClick={handleHeartClick}
              aria-pressed={isFilled}
              className="focus:outline-none"
            >
              <Heart
                className={`duration-700 ${isFilled ? "text-red-500" : "text-black"}`}
                fill={isFilled ? "none" : "black"}
                style={{ cursor: "pointer" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
