"use client"
import Image from "next/image"

import { Button } from "@/components/ui/button";
import { Heart, } from "lucide-react";
import { useEffect, useState } from "react";



interface Product {
    _id: string;
    name: string;
    size: string;
    price: number;
    uploadedPhotos: string[];
}

export default function Wishlist() {
    const [savedProducts, setSavedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const savedProduct = localStorage.getItem("savedProducts");
        if (savedProduct) {
            setSavedProducts(JSON.parse(savedProduct));
        }
    }, []);

    const handleRemove = (_id: string,) => {
        const updatedProduct = savedProducts.filter(product => product._id !== _id);
        setSavedProducts(updatedProduct);
        localStorage.setItem("savedProducts", JSON.stringify(updatedProduct));
    };

    useEffect(() => {
        const savedProduct = localStorage.getItem("savedProducts");
        if (savedProduct) {
            setSavedProducts(JSON.parse(savedProduct));
        }
    }, []);


    return (
        <div className="w-[738px] h-[664px] mx-auto mt-20 mb-20 bg-#FFFFFF">
            <div className="mx-auto w-[574px] h-132px ">
                <h1 className="font-bold p-3 text-black">Хадгалсан бараа ({savedProducts.length})</h1>
                <hr className="mt-3"></hr>
                {savedProducts.map((product) => (
                    <div key={product._id} className="flex flex-row gap-4 border-2 m-3 rounded-lg text-black">
                        {product.uploadedPhotos && product.uploadedPhotos.length > 0 ? (
                            <Image
                                src={product.uploadedPhotos[0]}
                                width={100}
                                height={100}
                                alt={product.name}
                                className="p-3 rounded-2xl"
                            />
                        ) : null}

                        <div className="flex-1 flex-col p-3 ">
                            <h1 className="">{product.name}</h1>
                            <div className="font-bold text-xl mt-3">{product.price}</div>
                            <Button className="mt-2" variant="def2">Cагслах</Button>
                        </div>
                        <div className="flex-1 grid justify-items-end p-5">
                            <Heart className="fill-black" onClick={() => handleRemove(product._id)} />
                        </div>
                    </div>
                ))}
                <div className="flex justify-between p-3">
                    <div className="text-black"> Нийт төлөх дүн:</div>
                    <div className="font-bold text-2xl te" >{savedProducts.reduce((total, product) => total + product.price, 0)}</div>
                </div>
                <div className="grid justify-items-end ">
                    <Button className="mt-4 rounded-m m-4" variant="default"> Худалдаж авах </Button>
                </div>

            </div>
        </div>
    )
};



