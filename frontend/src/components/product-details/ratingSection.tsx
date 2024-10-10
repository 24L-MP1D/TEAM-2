"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default function RatingSection() {
  const [filledStars, setFilledStars] = useState<number>(0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 pt-[55px]">
        <div className="text-[#09090B] text-sm">Үнэлгээ</div>
        <a
          className="text-[#2563EB] text-sm underline underline-offset-1 cursor-pointer"
          // onClick={toggleReviews}
        >
          бүгдийг хураах
        </a>
      </div>

      <div className="text-black">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((index) => (
            <Star
              key={index}
              color="yellow"
              fill={index < filledStars ? "#FDE047" : "white"}
              onClick={() => setFilledStars(index + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        4.6 (24)
      </div>

      <div className="flex flex-col gap-[21px]">
        <div className="border-t-[1px] border-dashed border-[#E4E4E7] pt-4 gap-1">
          <div className="text-black flex">
            <div>Saraa</div>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((index) => (
                <Star
                  key={index}
                  color="yellow"
                  fill={index < filledStars ? "#FDE047" : "white"}
                  onClick={() => setFilledStars(index + 1)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
          <div className="text-[#71717A]">wow nice materials</div>
        </div>
      </div>

      <div className="bg-[#F4F4F5] rounded-2xl p-6 flex flex-col  gap-6 font-medium text-sm text-black">
        <div className="flex flex-col gap-2">
          <div>Одоор үнэлэх:</div>
          <div>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((index) => (
                <Star
                  key={index}
                  color="yellow"
                  fill={index < filledStars ? "#FDE047" : "white"}
                  onClick={() => setFilledStars(index + 1)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Сэтгэгдэл үлдээх:</div>
          <Textarea
            className="h-[94px] bg-white text-black"
            placeholder="Энд бичнэ үү"
          />
        </div>
        <div>
          <Button variant={"default3"} className="px-9">
            Үнэлэх
          </Button>
        </div>
      </div>
    </div>
  );
}
