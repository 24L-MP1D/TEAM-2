"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://alyceparis.com/cdn/shop/files/4840_LIME_copy_1000x.jpg?v=1718994837"
  );
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [filledStars, setFilledStars] = useState<number>(0);
  const images = [
    "https://alyceparis.com/cdn/shop/files/4840_LIME_copy_1000x.jpg?v=1718994837",
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwoU7q12GMrTfGMBklEqDW0IELIjhV86xVw&s",
    "https://alyceparis.com/cdn/shop/files/4840_LIME_copy_1000x.jpg?v=1718994837",
    "https://alyceparis.com/cdn/shop/files/4840_LIME_copy_1000x.jpg?v=1718994837",
  ];
  return (
    <>
      <div className="flex gap-5">
        <div className="pt-[95px] flex flex-col gap-2">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-[67px] h-[67px] rounded cursor-pointer "
              width={67}
              height={67}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <Image
          src={selectedImage}
          alt="My Image"
          className="w-[422px] h-[521px] rounded-2xl "
          width={422}
          height={521}
        />
        <div className="pt-[100px] ">
          <button
            type="button"
            className=" px-[10px] border-[#2563EB] border-[1px] text-[#09090B] rounded-full"
          >
            шинэ
          </button>
          <div className="flex gap-4 items-center pt-2">
            <h2 className="font-bold text-2xl text-black">
              Wildflower Hoodie{" "}
            </h2>
            <Heart
              color={isSaved ? "red" : "black"}
              fill={isSaved ? "red" : "none"}
              onClick={() => setIsSaved(!isSaved)}
            />
          </div>

          <h3 className="font-normal text-base text-[#000000] pt-2">
            Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
          </h3>
          <h3 className="font-normal  text-[#000000] text-sm pt-4">
            Хэмжээний заавар
          </h3>

          <div className="flex gap-1 pt-2">
            {["S", "M", "L", "XL", "2XL"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`${
                  selectedSize === size
                    ? "bg-[#18181B] text-white"
                    : "bg-[#FFFFFF] text-[#09090B]"
                } border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-xs`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="pt-4 flex gap-2 items-center">
            <button
              type="button"
              className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B] "
              onClick={() =>
                setSelectedCount((prevCount) => Math.max(prevCount - 1, 0))
              }
            >
              -
            </button>
            <div className="text-black text-xs"> {selectedCount} </div>
            <button
              type="button"
              className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
              onClick={() => setSelectedCount(selectedCount + 1)}
            >
              +
            </button>
          </div>
          <div className="font-bold text-xl text-[#000000] pt-6">120’000₮</div>
          <button className="py-2 px-9 bg-[#2563EB] text-[#FFFFFF] text-sm font-medium rounded-[20px] pt-[10px]">
            Сагсанд нэмэх
          </button>

          <div className="flex gap-4  pt-[55px]">
            <div className="text-[#09090B] text-sm">Үнэлгээ</div>
            <a className="text-[#2563EB] text-sm underline underline-offset-1">
              бүгдийг харах
            </a>
          </div>
          <div className="flex">
            {[0, 1, 2, 3, 4].map((index) => (
              <Star
                key={index}
                color="yellow"
                fill={index < filledStars ? "yellow" : "white"}
                onClick={() => setFilledStars(index + 1)}
                style={{ cursor: "pointer" }}
              />
            ))}
            <div className="text-black">4.6 (24)</div>
          </div>
        </div>
      </div>
    </>
  );
}
