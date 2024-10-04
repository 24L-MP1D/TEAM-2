"use client";

import Card from "./Card";

export default function BuySteps() {
  return (
    <div className="bg-[#f7f7f8] text-black flex flex-col items-center pb-[163px] pt-[30px]">
      <div className="pb-[66px]">
        <div className="border-b-[1px] border-solid border-[#18181B] w-64 absolute mt-4 z-0"></div>
        <div className="w-64 h-8 flex justify-between relative z-10">
          <div className="w-8 h-8 rounded-full bg-[#2563EB] flex justify-center items-center font-bold text-base text-white">
            1
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex justify-center items-center border-[1px] border-solid border-[#18181B]">
            2
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex justify-center items-center border-[1px] border-solid border-[#18181B]">
            3
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
