"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { FaAngleDown } from "react-icons/fa6";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";

export default function orderHistory() {
   const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#f7f7f8] text-black flex justify-center">
      <div className="w-[884px] mt-[105px]">
        <div className="flex gap-5">
          <div className="flex flex-col items-start gap-1">
            <Button asChild variant="default2" className="w-[244px] h-9 bg-transparent">
              <Link href="/user">Хэрэглэгчийн хэсэг</Link>
            </Button>
            <Button variant={"default2"} className="w-[244px] h-9">
              <Link href="/orderHistory">Захиалгын түүх</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-6 flex-1 pb-[156px]">
        <div className="font-bold text-lg border-solid border-b-[1px] border-[#E4E4E7] pb-6">
          Захиалгын түүх
        </div>
        <div className="bg-white py-8 px-6 rounded-2xl">
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                  <div className="text-base font-bold">2024-09-14 15:36</div>
                  <div className="bg-[#2563EB] rounded-full py-[2px] px-[10px] text-xs font-semibold text-[#FAFAFA] flex items-center">
                    хүргэлтэнд гарсан
                  </div>
                </div>
                <div>
                  <FaAngleDown className="transition duration-150 ease-in-out" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 border-[#E4E4E7] border-dashed border-b-[1px] flex flex-col gap-3 pb-6">
                  <div>item1</div>
                  <div>item2</div>
                  <div>item3</div>
                </div>
              </AccordionContent>
              <div className="flex justify-between pt-4">
                <div className="text-base font-normal">Үнийн дүн:</div>
                <div className="text-lg font-bold">120'000&#8366;</div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bg-white py-8 px-6 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                  <div className="text-base font-bold">2024-09-14 15:36</div>
                  <div className="border-solid border-[#2563EB] border-[1px] bg-[#2563EB] bg-opacity-10 rounded-full py-[2px] px-[10px] text-xs font-semibold text-[#2563EB] flex items-center">
                    дууссан
                  </div>
                </div>
                <div>
                  <FaAngleDown className="transition duration-150 ease-in-out" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 border-[#E4E4E7] border-dashed border-b-[1px] flex flex-col gap-3 pb-6">
                  <div>item1</div>
                  <div>item2</div>
                  <div>item3</div>
                </div>
              </AccordionContent>
              <div className="flex justify-between pt-4">
                <div className="text-base font-normal">Үнийн дүн:</div>
                <div className="text-lg font-bold">120'000&#8366;</div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
  