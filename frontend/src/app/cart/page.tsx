"use client"
import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import { Delete, DeleteIcon, LucideDelete, Trash2, Trash2Icon } from "lucide-react";

// interface Products {
//     _id: string;
//     name: string;
//     size: string;
//     images: string;
//     price: number;
//     uploadedPhotos: string;
// }

// interface CartContextType {
//     cart: Product[];
//     addToCart: (product: Product) => void;
//     removeFromCart: (id: string) => void;
// }

export default function Cart() {
    const [selectedCount, setSelectedCount] = useState(0);
    const { cart, addToCart } = useContext(CartContext)

    useEffect(() => {
        console.log("haha")
        addToCart({ name: 'banana', price: 1000, _id: "123" })
    }, [])
    return (
        <div className="w-[738px] h-[664px] mx-auto mt-20">
            <div className="mx-auto w-[574px] h-132px ">
                <h1 className="font-bold p-3">1.Сагс</h1>
                <hr className="mt-3"></hr>
                <div className="flex flex-row gap-4 border-2 m-3 rounded-lg">
                    <Image src='/' width={100} height={100} alt={""} className="rounded-lg p-3" />
                    <div className="flex-1 flex-col p-3 ">
                        <h1 className="mb-3">name</h1>
                        <div className="pt-4 flex gap-2 items-center">
                            <button
                                type="button"
                                className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                                onClick={() => setSelectedCount((prevCount) => Math.max(prevCount - 1, 0))}
                            >
                                -
                            </button>
                            <div className="text-black text-xs">{selectedCount}</div>
                            <button
                                type="button"
                                className="bg-[#FFFFFF] border-[#18181B] border-[1px] rounded-2xl w-8 h-8 font-normal text-lg text-[#09090B]"
                                onClick={() => setSelectedCount(selectedCount + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className="font-bold text-xl mt-3">price</div>
                    </div>
                    <div className="flex-1 grid justify-items-end p-5">
                        <Trash2Icon className="" />
                    </div>
                </div>
                <div className="flex justify-between p-3">
                    <div> Нийт төлөх дүн:</div>
                    <div className="font-bold text-2xl" >Үнэ</div>
                </div>
                <div className="grid justify-items-end ">
                    <Button className="mt-4 rounded-m m-4 " variant="default"> Худалдаж авах </Button>
                </div>

            </div>

        </div>
    )
};




