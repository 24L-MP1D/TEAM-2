"use client";

import { useState } from "react";


import { IoMdCheckmark } from "react-icons/io";
import OrderPayment from "@/components/buySteps/OrderPayment";

import { Cart } from "@/components/buySteps/Cart";
import { Address } from "@/components/buySteps/Address";




export default function BuySteps() {
  const [visible, setVisible] = useState<number>(1);

  return (
    <div className="bg-[#f7f7f8] text-black flex flex-col items-center pb-[163px] pt-[30px] " >
      <div className="pb-[66px]">
        <div className="border-b-[1px] border-solid border-[#18181B] w-64 absolute mt-4 z-0"></div>
        <div className="w-64 h-8 flex justify-between relative z-10">
          <div
            className={`w-8 h-8 rounded-full bg-[#2563EB] flex justify-center items-center font-bold text-base text-white`}
          >
            {visible===1?"1":<IoMdCheckmark />}
          </div>
          <div
            className={`${visible != 1 ? "bg-[#2563EB] font-bold text-base text-white " : "bg-[#FFFFFF]  border-[1px] border-solid border-[#18181B] "} w-8 h-8 rounded-full  flex justify-center items-center`}
          >
            {visible !=3 ?"2":<IoMdCheckmark />}
          </div>
          <div
            className={`${visible ===3 ?"bg-[#2563EB] font-bold text-base text-white":"border-[1px] border-solid border-[#18181B] bg-[#FFFFFF] " } w-8 h-8 rounded-full flex justify-center items-center `}
          >
            3
          </div>
        </div>
      </div>
      <div className="">
        {visible === 1 && <Cart setVisible={setVisible} />}

        {visible === 2 && <Address setVisible={setVisible} />}

        {visible === 3 && <OrderPayment setVisible={setVisible} />}
      </div>
    </div>
  );
}
