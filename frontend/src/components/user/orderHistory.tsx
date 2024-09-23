import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { FaAngleDown } from "react-icons/fa6";
import { Accordion } from "@/components/ui/accordion";

export default function OrderHistory() {
  //test object data
  let products = [
    {
      state:"hurgelt",
      name: "Chunky Glyph Tee",
      image: <img src="/image.png" alt="item" />,
      price: 120000,
      pieces: 1,
    },
    {
      state:"hurgegdsen",
      name: "item 2",
      image: <img src="/image.png" alt="item" />,
      price: 120000,
      pieces: 1,
    },
    {
      state:"hurgelt",
      name: "item 3",
      image: <img src="/image.png" alt="item" />,
      price: 120000,
      pieces: 1,
    },
    {
      state:"hurgegdsen",
      name: "item 4",
      image: <img src="/image.png" alt="item" />,
      price: 120000,
      pieces: 1,
    },{
      state:"hurgelt",
      name: "item 5",
      image: <img src="/image.png" alt="item" />,
      price: 120000,
      pieces: 1,
    },

  ];

  return (
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
                {/* hurgeltend garsan objectuud */}
                {products.filter((item)=>item.state =="hurgelt").map((item) => (
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-[4px] overflow-hidden">{item.image}</div>
                    <div className="flex flex-col flex-1 gap-1 justify-center">
                      <div className="font-normal text-xs">{item.name}</div>
                      <div className="flex">
                        <div className="flex flex-1 justify-between">
                          <div className="flex font-normal text-xs">
                            <div>{item.pieces}</div>&nbsp;x&nbsp;
                            <div>{item.price}&#8366;</div>
                          </div>
                          <div className="text-xs font-bold">
                            {item.price}&#8366;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
            <div className="flex justify-between pt-4">
              <div className="text-base font-normal">Үнийн дүн:</div>
              {/* uniin dungiin niilberiig oldog function */}
              <div className="text-lg font-bold">{products.filter((item)=> item.state == "hurgelt").reduce((price, item) => price + item.price, 0)}&#8366;</div>
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
                {/* hurgegdsen objectuud */}
              {products.filter((item)=>item.state =="hurgegdsen").map((item) => (
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-[4px] overflow-hidden">{item.image}</div>
                    <div className="flex flex-col flex-1 gap-1 justify-center">
                      <div className="font-normal text-xs">{item.name}</div>
                      <div className="flex">
                        <div className="flex flex-1 justify-between">
                          <div className="flex font-normal text-xs">
                            <div>{item.pieces}</div>&nbsp;x&nbsp;
                            <div>{item.price}&#8366;</div>
                          </div>
                          <div className="text-xs font-bold">
                            {item.price}&#8366;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </AccordionContent>
            <div className="flex justify-between pt-4">
              <div className="text-base font-normal">Үнийн дүн:</div>
              <div className="text-lg font-bold">{products.filter((item)=> item.state == "hurgegdsen").reduce((price, item) => price + item.price, 0)}&#8366;</div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
