import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function savedProducts() {
  return (
    <div className="bg-[#F7F7F8]">
      <div className="pt-[57px] px-[240px] font-bold text-xl">
        <div className="text-black mb-4 ">Хадгалсан бараа ()</div>
        <div className="bg-[#ffffff] rounded-[16px] p-4 flex gap-x-6">
            <div>
                <Image src="/image.png" alt="" width={100} height={100} className="w-[100px] h-[100px]" />
            </div>
            <div>
            <div className="text-[16px] text-black font-normal">Chunky Glyph Tee</div>
            <div className="font-bold  text-black text-[14px]">120’000₮</div>
            <button className="rounded-[14px] font-medium bg-[#2563EB] px-3 text-[14px]">Сагслах</button>
            </div>
            <div>
            <Heart
                className="absolute top-2 right-2 z-10 cursor-pointer"
                color= "black" 
                fill="black" 
              />
            </div>
        </div>
      </div>
    </div>
  );
}
