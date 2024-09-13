import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiHeartStraight } from "react-icons/pi";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Header() {
  return (
    <header className="bg-black m-auto max-w-[1440px] h-[68px] px-6 py-4">
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
          <CiSearch className="size-6" />
          <input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-[#18181b] outline-none placeholder-[#71717a]"
          />
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <PiHeartStraight className="w-6 h-6"/>
          </div>
          <div>
            <PiShoppingCartSimple className="w-6 h-6" />
          </div>
          <div className="flex gap-2 items-center ">
            <button className="py-2 px-3 border-solid border-[1px] text-white hover:text-opacity-50 border-blue-600 rounded-[18px] font-normal text-sm hover:bg-slate-900 hover:border-blue-800">
              Бүртгүүлэх
            </button>
            <button className="py-2 px-3  border-solid border-[1px] border-[#2563eb] rounded-[18px] font-normal text-sm bg-[#2563EB] hover:bg-opacity-70 text-white hover:text-opacity-50 ">
              Нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
