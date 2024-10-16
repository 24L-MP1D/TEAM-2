"use client";

import { MdWindow } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import { RiListView } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { Button } from "../../public/ui/button";
import Link from "next/link";

export default function LeftBar() {
  return (
    <div className="w-[222px] h-[976px] bg-white pt-6 flex flex-col gap-4 text-[#121316]">
      <Button
        variant={"sipmle"}
        className="flex items-center justify-start h-10 hover:bg-[#ECEDF0] w-[222px]"
      >
        <div className="w-14 flex justify-center items-center ">
          <MdWindow className="w-6 h-6" />
        </div>
        <div className="text-base font-semibold">Хяналтын самбар</div>
      </Button>
      <Link href="/order">
      <Button
        variant={"sipmle"}
        className="flex items-center justify-start h-10 hover:bg-[#ECEDF0] w-[222px]"
      >
        <div className="w-14 flex justify-center items-center ">
          <FaRegClipboard className="w-6 h-6" />
        </div>
        <div className="text-base font-semibold">Захиалга</div>
      </Button>
      </Link>
      

      <Link href="/income">
        <Button
          variant={"sipmle"}
          className="flex items-center justify-start h-10 hover:bg-[#ECEDF0] w-[222px]"
        >
          <div className="w-14 flex justify-center items-center ">
            <ImPriceTags className="w-6 h-6" />
          </div>
          <div className="text-base font-semibold">Орлого</div>
        </Button>
      </Link>

      <Link href="/products">
        <Button
          variant={"sipmle"}
          className="flex items-center justify-start h-10 hover:bg-[#ECEDF0] w-[222px]"
        >
          <div className="w-14 flex justify-center items-center ">
            <RiListView className="w-6 h-6" />
          </div>
          <div className="text-base font-semibold">Бүтээгдэхүүн</div>
        </Button>
      </Link>
      <Link href="/settings">
        <Button
          variant={"sipmle"}
          className="flex items-center justify-start h-10 hover:bg-[#ECEDF0] w-[222px]"
        >
          <div className="w-14 flex justify-center items-center ">
            <IoMdSettings className="w-6 h-6" />
          </div>
          <div className="text-base font-semibold">Тохиргоо</div>
        </Button>
      </Link>
    </div>
  );
}
