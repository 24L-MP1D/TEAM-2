"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function OrderPayment({
  setVisible,
}: {
  setVisible: Dispatch<SetStateAction<number>>;
}) {
  const bankLogos = [
    {  Image: < Image src="/bankLogos/ard.png" alt="banks" />,
      id:1
     },
    {  Image: < Image src="/bankLogos/booronhii.png" alt="banks" />,
      id:2
     },
    {  Image: < Image src="/bankLogos/dorwoljin.png" alt="banks" />,
      id:3
     },
    {  Image: < Image src="/bankLogos/duruu.png" alt="banks" />,
      id:4
     },
    {  Image: < Image src="/bankLogos/hetewch.png" alt="banks" />,
      id:5
     },
    {  Image: < Image src="/bankLogos/khan.png" alt="banks" /> ,
      id:6
    },
    {  Image: < Image src="/bankLogos/khas.png" alt="banks" />,
      id:7
     },
    {  Image: < Image src="/bankLogos/mbank.png" alt="banks" /> ,
      id:8
    },
    {  Image: < Image src="/bankLogos/qpay.png" alt="banks" />,
      id:9
     },
    {  Image: < Image src="/bankLogos/tdb.png" alt="banks" />,
      id:10
     },
    {  Image: < Image src="/bankLogos/triangle.png" alt="banks" /> ,

      id:11
    },
    {  Image: < Image src="/bankLogos/turiin.png" alt="banks" />,
      id:12
     },
    {  Image: < Image src="/bankLogos/zoos.png" alt="banks" /> ,
      id:13
    },
  ];

  return (
    <div className="p-8 bg-white rounded-2xl flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="text-lg font-semibold">3.Төлбөр төлөлт</div>
        <div className=" flex flex-col items-center py-9 gap-6">
          <div className="flex flex-col items-center w-[397px]">
            <div className="bg-[#F4F4F5] rounded-2xl px-2 py-1">14:59</div>
            <div className="px-[105px] py-5">
              <Image src="/QR.png" alt="qr-code" width={187} height={187} />
            </div>
          </div>
          <div className="w-[623px] flex flex-col gap-5 items-center">
            <div>Төлөх боломжтой банкууд:</div>
            <div className="px-10 grid grid-cols-8 gap-6">
              {bankLogos.map((item) => (
                <div className="w-12 h-12" key={item.id}>
                  <a href="/buySteps/Confirmed">{item. Image}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="bg-transparent text-black px-8 border-#71717A border-solid border-[1px] rounded-full hover:bg-slate-200"
          onClick={() => setVisible(2)}
        >
          Буцах
        </Button>
      </div>
    </div>
  );
}
