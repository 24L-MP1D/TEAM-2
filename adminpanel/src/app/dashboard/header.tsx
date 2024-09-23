"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const handleClick = (): void => {
      setOpenSearch(true);
    };
  
    return (
      <div className="bg-black ">
        <header className="mx-auto max-w-[1440px]  px-6 py-4">
          <div className="flex justify-between items-center text-white h-9 ">
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-[6px]">
                <Image src="/Symbol.png" alt="icon" width={24} height={24} />
                <div className="text-sm font-normal ">ECOMMERCE</div>
              </div>
              <button className="font-normal text-sm text-[#FFFFFF] text-opacity-75">
                Ангилал
              </button>
            </div>
            <div className="w-[300px] h-[40px] bg-[#18181b] px-4 py-2 rounded-[20px] flex items-center gap-2">
              {/* <CiSearch className="size-6" /> */}
  
              <input
                onClick={handleClick}
                placeholder="Бүтээгдэхүүн хайх"
                className="bg-[#18181b] outline-none placeholder-[#71717a]"
              />
              {openSearch && (
                <div className="">
                  
                </div>
              )}
            </div>
            <div className="flex gap-6 items-center">
                <Link href="/login">
                  <button className="py-2 px-3  border-solid border-[1px] border-[#2563eb] rounded-[18px] font-normal text-sm bg-[#2563EB] hover:bg-opacity-70 text-white hover:text-opacity-50 ">
                   Username
                  </button>
                </Link>
            </div>
          </div>
        </header>
      </div>
    );
}