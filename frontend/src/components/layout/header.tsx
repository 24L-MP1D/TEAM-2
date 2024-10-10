"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiHeartStraight } from "react-icons/pi";
import { PiShoppingCartSimple } from "react-icons/pi";
import Searcharea from "./searchArea";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import Cookies from 'js-cookie';
import Link from "next/link";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const handleClick = (): void => {
    setOpenSearch(true);
  };

  const router = useRouter();

  const clothes = [
    {
      name: "Chunky Glyph Tee",
      price: 120.0,
      Image: "/public/image.png",
    },
    {
      name: "Chunky Glyph gsr5",
      price: 120.0,
      image: "Users/24LP1786/Desktop/team-2/TEAM-2/frontend/public/image.png",
    },
    {
      name: "Chunky Glyph ergs",
      price: 120.0,
      image: "Users/24LP1786/Desktop/team-2/TEAM-2/frontend/public/image.png",
    },
    {
      name: "Chunky Glyph ergs",
      price: 120.0,
      image: "Users/24LP1786/Desktop/team-2/TEAM-2/frontend/public/image.png",
    },
  ];
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
      router.push('/');
      router.refresh()

    }
  }, [setIsLoggedIn]);

  return (
    <div className="bg-black ">
      <header className="mx-auto max-w-[1440px]  px-6 py-4">
        <div className="flex justify-between items-center text-white h-9 ">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-[6px]">
              <Image src="/Symbol.png" alt="icon" width={24} height={24} className="w-6 h-6" />
              <Link href="/">
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
              onClick={handleClick}
              placeholder="Бүтээгдэхүүн хайх"
              className="bg-[#18181b] outline-none placeholder-[#71717a]"
            />
            {openSearch && (
              <div className="">
                <Popover>
                  <PopoverTrigger>SEARCH</PopoverTrigger>
                  <PopoverContent className="border-1 w-[610px]">
                    {clothes.map((clothes) => (
                      <div key={clothes.name} className="">
                        <div className="grid grid-cols-2 rounded border-1">
                          <div>{clothes.image}</div>
                          <div className="ml-0">
                            <p className="font-bold ">{clothes.name}</p>
                            <p className="">{clothes.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <PiHeartStraight className="w-6 h-6" />
            </div>
            <Link href="/buySteps">
              <div>
                <PiShoppingCartSimple className="w-6 h-6" />
              </div>
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <User className="w-6 h-6" />
                <button
                  onClick={() => {
                    Cookies.remove('token');
                    setIsLoggedIn(false);
                    
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
