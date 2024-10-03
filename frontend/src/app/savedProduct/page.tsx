"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardData {
  id: number;
  title: string;
  price: string;
}

const initialCardData: CardData[] = [
  { id: 1, title: "Chunky Glyph Tee", price: "120,000₮" },
  { id: 2, title: "Doodle Hoodie", price: "130,000₮" },
  { id: 3, title: "Local Styles Crewneck", price: "140,000₮" },
];

export default function Save() {
  const [cards, setCards] = useState<CardData[]>(initialCardData);
  const [filledCards, setFilledCards] = useState<Set<number>>(new Set());
  const [removingCard, setRemovingCard] = useState<number | null>(null);

  const handleHeartClick = (id: number) => {
    setFilledCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });

    // Start the removal process
    setRemovingCard(id);
    
    // Wait for the transition duration before actually removing the card
    setTimeout(() => {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      setRemovingCard(null); // Reset removing state
    }, 700); // Duration must match CSS transition time
  };

  return (
    <div className="flex flex-col gap-4 items-center pt-36 h-[1000px]">
      <div className="mr-[420px]">
        <h1 className="font-bold text-xl leading-7">
          Хадгалсан бараа <span className="text-zinc-600 font-medium">({cards.length})</span>
        </h1>
      </div>
      <div className="flex flex-col gap-4 max-w-[622px] w-full">
        {/* Card-уудыг гаргах */}
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex gap-6 p-4 h-[132px] rounded-2xl border border-gray-200 duration-700 overflow-hidden bg-white ${
              removingCard === card.id ? "opacity-0 h-0" : "opacity-100 h-[132px]"
            }`}
            style={{
              transition: "height 0.7s ease-out, opacity 0.7s ease-out",
            }}
          >
            <div>
              <Image
                src="/image.png"
                alt={card.title}
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-xl"
              />
            </div>
            <div className="flex flex-col w-[402px]">
              <div className="gap-1 text-black">
                <h1 className="font-normal text-base leading-6">{card.title}</h1>
                <p className="font-bold text-sm leading-5">{card.price}</p>
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
                onClick={() => handleHeartClick(card.id)}
                aria-pressed={filledCards.has(card.id)}
                className="focus:outline-none"
              >
                <Heart
                  className={`duration-700 ${filledCards.has(card.id) ? "text-red-500" : "text-black"}`}
                  fill={filledCards.has(card.id) ? "none" : "black"}
                  style={{ cursor: "pointer" }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
