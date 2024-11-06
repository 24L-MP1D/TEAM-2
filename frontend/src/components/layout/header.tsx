"use client";

import { CiSearch } from "react-icons/ci";
import { PiHeartStraight } from "react-icons/pi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Cookies from 'js-cookie';
import Link from "next/link";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  const clothes = [
    {
      name: "Chunky Glyph Tee",
      price: 120.0,
      image: "/image.png",
    },
    {
      name: "Chunky Glyph gsr5",
      price: 120.0,
      image: "/image.png",
    },
    {
      name: "Chunky Glyph ergs",
      price: 120.0,
      image: "/image.png",
    },
    {
      name: "Chunky Glyph ergs",
      price: 120.0,
      image: "/image.png",
    },
  ];

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token); 
  }, []);

  return (
    <div className="bg-black ">
      <header className="mx-auto max-w-[1440px] px-6 py-4">
        <div className="flex justify-between items-center text-white h-9 ">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-[6px]">
              <Link href="/" className="flex items-center gap-1">
                <Image alt="src" src='/symbol.png' width={32} height={32} />
                <div className="text-sm font-normal ">ECOMMERCE</div>
              </Link>
            </div>
            <Link href="/category">
              <button className="font-normal text-sm text-[#FFFFFF] text-opacity-75">
                Ангилал
              </button>
            </Link>
          </div>
          <div className="w-[300px] h-[40px] bg-[#18181b] px-4 py-2 rounded-[20px] flex items-center gap-2">
            <CiSearch className="size-6" />
            <input
              onFocus={() => setOpenSearch(true)} 
              onBlur={() => setTimeout(() => setOpenSearch(false), 100)} 
              placeholder="Бүтээгдэхүүн хайх"
              className="bg-[#18181b] outline-none placeholder-[#71717a]"
            />
            {openSearch && (
              <Popover>
                <PopoverTrigger>SEARCH</PopoverTrigger>
                <PopoverContent className="border-1 w-[610px]">
                  {clothes.map((item) => (
                    <div key={item.name} className="flex items-center border-b py-2">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
                      <div className="ml-2">
                        <p className="font-bold">{item.name}</p>
                        <p className="">{item.price} ₮</p>
                      </div>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            )}
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/wishlist">
              <PiHeartStraight className="w-6 h-6" />
            </Link>
            <Link href="/buySteps">
              <PiShoppingCartSimple className="w-6 h-6" />
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                
                <button
                  onClick={() => {
                    Cookies.remove('token');
                    setIsLoggedIn(false);
                    router.push('/'); 
                  }}
                  className="py-2 px-3 border-solid border-[1px] text-white hover:text-opacity-50 border-red-600 rounded-[18px] font-normal text-sm hover:bg-slate-900 hover:border-red-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <Link href="/register">
                  <button className="py-2 px-3 border-solid border-[1px] text-white hover:text-opacity-50 border-blue-600 rounded-[18px] font-normal text-sm hover:bg-slate-900 hover:border-blue-800">
                    Бүртгүүлэх
                  </button>
                </Link>
                <Link href="/login">
                  <button className="py-2 px-3 border-solid border-[1px] border-[#2563eb] rounded-[18px] font-normal text-sm bg-[#2563EB] hover:bg-opacity-70 text-white hover:text-opacity-50">
                    Нэвтрэх
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
