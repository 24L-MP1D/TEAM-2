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
      <div className="bg-black py-3 px-6 justify-between flex">
       
         
                <Image src="/logo.png" alt="icon" width={30} height={30} className=""/>
               
           
            
           
            
            <div className="flex gap-6 items-center">
             
                  <div className="py-2 px-3  border-solid border-[1px] border-[#2563eb] rounded-[18px] font-normal text-sm bg-[#2563EB] hover:bg-opacity-70 text-white hover:text-opacity-50 ">
                   Username
                  </div>
              
            </div>
            </div>
        
   
    );
}