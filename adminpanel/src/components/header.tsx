"use client";

import Image from "next/image";
import { useState } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

export default function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const handleClick = (): void => {
    setOpenSearch(true);
  };

  return (
    <div className="bg-black">
      <div className="py-1 px-6 flex justify-between items-center gap-4  h-12 mx-auto">
        <div className="flex justify-start items-center flex-1">
          <Image src="/symbol.png" alt="icon" width={24} height={24} className="w-6 h-6" />
        </div>
        <div className="w-9 h-9 flex justify-center items-center">
          <MdNotificationsNone className="w-5 h-5" />
        </div>
        <div className="flex items-center">
          <div className="w-9 h-9 flex justify-center items-center">
            <FaRegUser className="w-4 h-4" />
          </div>
          <div className="px-2 py-[6px] font-normal text-sm">Username</div>
        </div>
      </div>
    </div>
  );
}