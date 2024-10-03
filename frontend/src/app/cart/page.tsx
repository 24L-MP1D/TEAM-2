"use client"
import Image from "next/image"
import { useEffect, useState } from "react";



interface Products {
    _id: string;
    name: string;
    size: string;
    images: string;
    price: number;
    uploadedPhotos: string;
}

export default function Cart() {

    const [products, setProducts] = useState();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/products');
                if (!response.ok) throw new Error("Failed to fetch products");
                const data: Products[] = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className="w-[738px] h-[664px] mx-auto mt-20 bg-white ">
            <div >
                <h1>1.Сагс</h1>
                <hr className="mt-3"></hr>
                <div className="flex flex-cols-3">
                    {/* <Image src="" alt="" className="" /> */}
                    <div>frf</div>
                    <div className="ml-0">
                        <p className="font-bold ">fverv</p>
                        <p className="">fefrv</p>
                    </div>
                </div>

            </div>
            <hr></hr>
            <div className="flex justify-between ">
                <p>Нийт төлөх дүн</p>
                <p className="font-bold text-xl">360.000</p>
            </div>
        </div>
       
    )
}