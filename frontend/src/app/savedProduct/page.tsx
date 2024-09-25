"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CardData {
  id: number;
  title: string;
  price: string;
}

const initialCardData : CardData[] = [
  {id: 1, title:"Chunky Glyph Tee", price:"120,000₮"},
  {id: 2, title:"Doodle Hoodie", price:"130,000₮"},
  {id: 3, title:"Local Styles Crewneck", price:"140,000₮"},
]


export default function savedProducts() {
  const [fillheart, setFillheart] = useState(true);

      
  return (
    <div className="bg-[#F7F7F8]">
      <div className="pt-[57px] px-[240px] font-bold text-xl" >
        <div className="text-black mb-4 ">Хадгалсан бараа ()</div>
        <div className="bg-[#ffffff] rounded-[16px] p-4 flex mb-4 ">
          <div>
            <Image
              src="/image.png"
              alt=""
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-[16px]"
            />
          </div>
          <div className="pl-6">
            <div className="text-[16px] text-black font-normal">
            Chunky Glyph Tee
            </div>
            <div className="font-bold  text-black text-[14px]">120’000₮</div>
            <button className="rounded-[14px] font-medium bg-[#2563EB] px-3 text-[14px] text-white hover:bg-black">
              Сагслах
            </button>
          </div>
          <div className="pl-[249px]">
            <Heart
              fill={fillheart == true ? "" : "none"}
              onClick={() => setFillheart(!fillheart)}
            />
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-[16px] p-4 flex mb-4 ">
          <div>
            <Image
              src="/image.png"
              alt=""
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-[16px]"
            />
          </div>
          <div className="pl-6">
            <div className="text-[16px] text-black font-normal">
            Chunky Glyph Tee
            </div>
            <div className="font-bold  text-black text-[14px]">120’000₮</div>
            <button className="rounded-[14px] font-medium bg-[#2563EB] px-3 text-[14px] text-white hover:bg-black">
              Сагслах
            </button>
          </div>
          <div className="pl-[249px]">
            <Heart
              fill={fillheart == true ? "" : "none"}
              onClick={() => setFillheart(!fillheart)}
            />
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-[16px] p-4 flex mb-4">
          <div>
            <Image
              src="/image.png"
              alt=""
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-[16px]"
            />
          </div>
          <div className="pl-6">
            <div className="text-[16px] text-black font-normal">
            Chunky Glyph Tee
            </div>
            <div className="font-bold  text-black text-[14px]">120’000₮</div>
            <button className="rounded-[14px] font-medium bg-[#2563EB] px-3 text-[14px] text-white hover:bg-black">
              Сагслах
            </button>
          </div>
          <div className="pl-[249px]">
            <Heart
              fill={fillheart == true ? "" : "none"}
              onClick={() => setFillheart(!fillheart)}
            />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
