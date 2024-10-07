"use client"

import { FiCheckCircle } from "react-icons/fi";

export default function Confirmed(){
    return(
        <div className="pt-[105px] pb-[390px] flex justify-center">
            <div className="py-14 px-[7px] bg-stone-300 rounded-2xl text-black">
                <div className="flex flex-col gap-[17px] w-[360px] items-center">
                    <div><FiCheckCircle className="w-8 h-8 text-[#2563EB]"/>
                    </div>
                    <div className="font-medium text-base">Захиалга амжилттай баталгаажлаа.</div>
                </div>
            </div>
        </div>
    )
}