"use client";

import { fetcher } from "@/components/fetcher";
import { Button } from "@/components/ui/button";
import { userInfo } from "os";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PiTrashLight } from "react-icons/pi";

export default function Cart({setVisible}: {setVisible: Dispatch<SetStateAction<number>>}) {
  var numeral = require("numeral");

  interface Product {
    userId:String,
    productId:String,
    selectedCount:Number,
    selectedSize:String,
   
   
   
  }

  
  const [products, setProducts] = useState<Product[]>([]);

  // const addPieces = (index: number) => {
  //   const updatedProducts = [...products];
  //   updatedProducts[index].selectedCount++;
  //   setProducts(updatedProducts);
  // };

  // const removePieces = (index: number) => {
  //   const updatedProducts = [...products];
  //   if (updatedProducts[index].pieces > 1) {
  //     updatedProducts[index].pieces--;
  //     setProducts(updatedProducts);
  //   }
  // };

  const removeProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  useEffect(()=>{

    
    const userinfo=localStorage.getItem('userInfo')
    const productId=localStorage.getItem('product')
    const token=localStorage.getItem('authToken')

    if(userinfo&& productId && token){
      const userData=JSON.parse(userinfo);
      const product=JSON.parse(productId);

      console.log(userData, product)
    }
    

    
    

    fetcher(`/buySteps`, 'GET').then((data)=>setProducts(data))
  })

  const [Card,cardfinish]=useState(false)

  return (
    <div className="bg-white p-8 rounded-2xl mx-auto">
      <div className="w-[574px] flex flex-col gap-6 mx-auto">
        {/* <div className="flex flex-col gap-4">
          <div className="font-bold text-black text-xl flex">
            1.Сагс &nbsp;
            <div className="text-[#71717A]">({products.length})</div>
          </div>
          {products.map((product, index) => (
            <div className="flex items-start gap-6 p-4 rounded-2xl border-[#ECEDF0] border-solid border-[1px]">
              <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden text-[#000000]">
                {product.image}
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="text-base font-normal">{product.name} </div>
                <div className="flex flex-col gap-2 ">
                  <div>
                    <div className="flex items-center">
                      <Button
                        className="w-8 h-8 rounded-full border-solid border-[1px] border-black bg-transparent text-black text-lg hover:bg-slate-300"
                        onClick={() => removePieces(index)}
                        disabled={product.pieces < 2}
                      >
                        -
                      </Button>
                      <span className="px-4 text-black">{product.pieces}</span>
                      <Button
                        className="w-8 h-8 rounded-full border-solid border-[1px] border-black bg-transparent text-black text-lg hover:bg-slate-300"
                        onClick={() => addPieces(index)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="font-bold text-base">
                    {numeral(product.price * product.pieces).format("0,0")}
                    &#8366;
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 flex justify-center items-center">
                <PiTrashLight
                  className="w-6 h-6"
                  onClick={() => removeProduct(index)}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between pb-6">
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
        <div className=" h-[9] text-end">
          <Button variant={"default3"} onClick={()=>setVisible(2)}>Худалдан авах </Button>
        </div> */}
      </div>
    </div>
  );
}