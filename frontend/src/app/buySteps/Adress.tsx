"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";

export default function Adress({setVisible}: {setVisible: Dispatch<SetStateAction<number>>}) {
  var numeral = require("numeral");

  const mockProducts = [
    {
      id: 1,
      name: "Chunky Glyph Tee 1",
      image: <img src="/image.png" alt="itemPNG" />,
      price: 120000,
      pieces: 1,
    },
    {
      id: 2,
      name: "Chunky Glyph Tee 2",
      image: <img src="/image.png" alt="itemPNG" />,
      price: 120000,
      pieces: 1,
    },
    {
      id: 3,
      name: "Chunky Glyph Tee 3",
      image: <img src="/image.png" alt="itemPNG" />,
      price: 120000,
      pieces: 1,
    },
    {
      id: 4,
      name: "Chunky Glyph Tee 4",
      image: <img src="/image.png" alt="itemPNG" />,
      price: 120000,
      pieces: 1,
    },
    {
      id: 5,
      name: "Chunky Glyph Tee 5",
      image: <img src="/image.png" alt="itemPNG" />,
      price: 120000,
      pieces: 1,
    },
  ];

  const [products, setProducts] = useState(mockProducts);

  return (
    <div className="flex gap-5">
      <div className="bg-white p-8 rounded-2xl h-fit">
        <div className="w-[333px] max-h-[678px] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-black text-xl flex">
              1.Сагс &nbsp;
              <div className="text-[#71717A]">({products.length})</div>
            </div>
            <div className="border-b-[1px] border-dashed border-[#ECEDF0] flex-nowrap overflow-hidden max-h-[678px] flex flex-col gap-4 pb-4">
              {products.map((product, index) => (
                <div className="">
                  <div className="flex items-start gap-4 rounded-2xl">
                    <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden">
                      {product.image}
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="text-base font-normal">
                        {product.name}{" "}
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <div className="font-bold text-base">
                          {numeral(product.price * product.pieces).format(
                            "0,0"
                          )}
                          &#8366;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <div className="text-lg font-normal">Нийт төлөх дүн:</div>
              <div className="font-bold text-xl">
                {numeral(
                  products.reduce(
                    (total, product) => total + product.price * product.pieces,
                    0
                  )
                ).format("0,0")}
                &#8366;
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl flex flex-col gap-9 w-[687px]">
        <div className="font-semibold text-lg">2.Хүргэлтийн мэдээлэл оруулах</div>
        <div className="flex flex-col gap-4 font-semibold text-sm">
          <div className="flex flex-col gap-2">
            Овог:
            <Input className="rounded-full bg-white" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            Нэр:
            <Input className="rounded-full bg-white" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            Утасны дугаар:
            <Input className="rounded-full bg-white" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            Хаяг:
            <Textarea className="rounded-3xl bg-white" />
          </div>
          <div className="flex flex-col gap-2">
            Нэмэлт мэдээлэл:
            <Textarea className="rounded-3xl bg-white" />
            <span className="font-normal text-xs text-[#71717A]">Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй</span>
          </div>
        </div>
        <div className="flex justify-between">
            <Button className="bg-transparent text-black px-8 border-#71717A border-solid border-[1px] rounded-full hover:bg-slate-200" onClick={()=> setVisible(1)}>Буцах</Button>
            <Button variant={"default3"} className="px-8" onClick={()=> setVisible(3)} >Төлбөр төлөх</Button>
        </div>
      </div>
    </div>
  );
}
